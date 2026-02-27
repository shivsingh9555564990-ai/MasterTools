import { NextRequest, NextResponse } from 'next/server'
import { rateLimiter } from '@/lib/rateLimiter'
import { generateWithFallback } from '@/lib/openrouter'
import { buildPrompt } from '@/lib/promptBuilder'

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'anonymous'
    const rateLimitResult = rateLimiter(ip)
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: rateLimitResult.message },
        { status: 429 }
      )
    }

    // Parse and validate request
    const body = await req.json()
    const { toolType, userInput, tone, wordLength } = body

    if (!userInput || typeof userInput !== 'string') {
      return NextResponse.json(
        { error: 'User input is required' },
        { status: 400 }
      )
    }

    if (userInput.length > 3000) {
      return NextResponse.json(
        { error: 'Input exceeds maximum length of 3000 characters' },
        { status: 400 }
      )
    }

    if (!toolType || !tone || !wordLength) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Build prompt
    const prompt = buildPrompt(toolType, userInput, tone, wordLength)

    // Generate content with fallback
    const content = await generateWithFallback(prompt)

    return NextResponse.json({ content })
  } catch (error) {
    console.error('Generation error:', error)
    return NextResponse.json(
      { error: 'AI service temporarily unavailable. Please try again.' },
      { status: 503 }
    )
  }
}