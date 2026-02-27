import ToolForm from '@/components/ToolForm'

export default function AIRewriterPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Rewriter</h1>
        <p className="text-gray-400">Rewrite and improve your existing content</p>
      </div>
      <ToolForm 
        toolType="ai-rewriter" 
        placeholder="Paste your text here to rewrite..."
      />
    </div>
  )
}