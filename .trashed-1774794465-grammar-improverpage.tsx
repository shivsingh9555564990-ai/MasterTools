import ToolForm from '@/components/ToolForm'

export default function GrammarImproverPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Grammar Improver</h1>
        <p className="text-gray-400">Polish your writing with improved grammar and clarity</p>
      </div>
      <ToolForm 
        toolType="grammar-improver" 
        placeholder="Paste your text here to improve..."
      />
    </div>
  )
}