import ToolForm from '@/components/ToolForm'

export default function YouTubeScriptGeneratorPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">YouTube Script Generator</h1>
        <p className="text-gray-400">Generate engaging video scripts for your YouTube channel</p>
      </div>
      <ToolForm 
        toolType="youtube-script-generator" 
        placeholder="Enter your video topic or main points..."
      />
    </div>
  )
}