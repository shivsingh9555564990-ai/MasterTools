const MODELS = [
  'mistralai/mistral-7b-instruct',
  'meta-llama/llama-3-8b-instruct',
  'openchat/openchat-7b',
]

const API_URL = 'https://openrouter.ai/api/v1/chat/completions'
const TIMEOUT_MS = 30000
const MAX_TOKENS = 800

async function fetchWithTimeout(url: string, options: RequestInit, timeout: number) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    })
    clearTimeout(id)
    return response
  } catch (error) {
    clearTimeout(id)
    throw error
  }
}

async function tryModel(model: string, prompt: string): Promise<string> {
  const response = await fetchWithTimeout(
    API_URL,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
        'X-Title': 'Master AI Tool',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: MAX_TOKENS,
        temperature: 0.7,
      }),
    },
    TIMEOUT_MS
  )

  if (!response.ok) {
    throw new Error(`Model ${model} failed with status ${response.status}`)
  }

  const data = await response.json()
  
  if (!data.choices?.[0]?.message?.content) {
    throw new Error('Invalid response format')
  }

  return data.choices[0].message.content
}

export async function generateWithFallback(prompt: string): Promise<string> {
  const errors: Error[] = []

  for (const model of MODELS) {
    try {
      return await tryModel(model, prompt)
    } catch (error) {
      console.error(`Model ${model} failed:`, error)
      errors.push(error as Error)
      
      // Check if we should continue trying
      if (error instanceof Error) {
        const status = (error as any).status
        if (status && ![429, 500, 503].includes(status)) {
          // Don't retry on other status codes
          continue
        }
      }
    }
  }

  throw new Error('All models failed')
}