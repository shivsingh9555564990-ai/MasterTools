interface PromptTemplate {
  (input: string, tone: string, wordLength: number): string
}

const templates: Record<string, PromptTemplate> = {
  'ai-blog-writer': (input, tone, wordLength) => 
    `Write a ${wordLength}-word SEO optimized blog post in a ${tone} tone about: ${input}. Include headings, subheadings and FAQ section.`,
  
  'seo-article-writer': (input, tone, wordLength) => 
    `Create a ${wordLength}-word SEO-optimized article in a ${tone} tone about: ${input}. Include meta description, keywords, and proper heading structure.`,
  
  'youtube-script-generator': (input, tone, wordLength) => 
    `Generate a ${wordLength}-word YouTube video script in a ${tone} tone about: ${input}. Include intro, main points, and call to action.`,
  
  'instagram-caption-generator': (input, tone, wordLength) => 
    `Create an engaging ${wordLength}-word Instagram caption in a ${tone} tone about: ${input}. Include relevant hashtags and emojis.`,
  
  'linkedin-post-generator': (input, tone, wordLength) => 
    `Write a professional ${wordLength}-word LinkedIn post in a ${tone} tone about: ${input}. Include insights and engagement question.`,
  
  'email-copy-generator': (input, tone, wordLength) => 
    `Generate a ${wordLength}-word email marketing copy in a ${tone} tone about: ${input}. Include subject line and call to action.`,
  
  'product-description-generator': (input, tone, wordLength) => 
    `Create a compelling ${wordLength}-word product description in a ${tone} tone for: ${input}. Highlight features and benefits.`,
  
  'ai-rewriter': (input, tone, wordLength) => 
    `Rewrite the following text to be ${wordLength} words in a ${tone} tone while maintaining the core message: ${input}`,
  
  'headline-hook-generator': (input, tone, wordLength) => 
    `Generate ${wordLength} attention-grabbing headlines in a ${tone} tone about: ${input}. Make them click-worthy and engaging.`,
  
  'grammar-improver': (input, tone, wordLength) => 
    `Improve the grammar and clarity of this text (aim for ${wordLength} words) while maintaining a ${tone} tone: ${input}`,
}

export function buildPrompt(
  toolType: string,
  userInput: string,
  tone: string,
  wordLength: number
): string {
  const template = templates[toolType]
  
  if (!template) {
    throw new Error(`Unknown tool type: ${toolType}`)
  }

  return template(userInput, tone, wordLength)
}