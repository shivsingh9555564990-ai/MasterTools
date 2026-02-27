import ToolCard from '@/components/ToolCard'

const tools = [
  { title: 'AI Blog Writer', description: 'Generate engaging blog posts in minutes', href: '/ai-blog-writer', icon: '📝' },
  { title: 'SEO Article Writer', description: 'Create SEO-optimized articles that rank', href: '/seo-article-writer', icon: '🔍' },
  { title: 'YouTube Script Generator', description: 'Write compelling video scripts', href: '/youtube-script-generator', icon: '🎥' },
  { title: 'Instagram Caption Generator', description: 'Create viral Instagram captions', href: '/instagram-caption-generator', icon: '📸' },
  { title: 'LinkedIn Post Generator', description: 'Professional LinkedIn content', href: '/linkedin-post-generator', icon: '💼' },
  { title: 'Email Copy Generator', description: 'Effective email marketing copy', href: '/email-copy-generator', icon: '✉️' },
  { title: 'Product Description Generator', description: 'Compelling product descriptions', href: '/product-description-generator', icon: '🛍️' },
  { title: 'AI Rewriter', description: 'Rewrite and improve your content', href: '/ai-rewriter', icon: '🔄' },
  { title: 'Headline Hook Generator', description: 'Attention-grabbing headlines', href: '/headline-hook-generator', icon: '🎣' },
  { title: 'Grammar Improver', description: 'Polish your writing', href: '/grammar-improver', icon: '✨' },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          All-in-One AI Content Creation Platform
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Generate high-quality content for blogs, social media, emails, and more with our suite of AI-powered tools.
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.href} {...tool} />
        ))}
      </section>
    </div>
  )
}