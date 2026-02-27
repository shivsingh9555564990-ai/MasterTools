import ToolForm from '@/components/ToolForm'

export default function HeadlineHookGeneratorPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Headline Hook Generator</h1>
        <p className="text-gray-400">Generate attention-grabbing headlines and hooks</p>
      </div>
      <ToolForm 
        toolType="headline-hook-generator" 
        placeholder="Enter your topic or main idea..."
      />
    </div>
  )
}