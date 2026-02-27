import ToolForm from '@/components/ToolForm'

export default function AIBlogWriterPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Blog Writer</h1>
        <p className="text-gray-400">Generate engaging, SEO-optimized blog posts in minutes</p>
      </div>
      <ToolForm 
        toolType="ai-blog-writer" 
        placeholder="Enter your blog topic or keywords..."
      />
    </div>
  )
}