import ToolForm from '@/components/ToolForm'

export default function SEOArticleWriterPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">SEO Article Writer</h1>
        <p className="text-gray-400">Create SEO-optimized articles that rank well in search engines</p>
      </div>
      <ToolForm 
        toolType="seo-article-writer" 
        placeholder="Enter your article topic or keywords..."
      />
    </div>
  )
}