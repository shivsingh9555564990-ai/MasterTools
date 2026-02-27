import ToolForm from '@/components/ToolForm'

export default function LinkedInPostGeneratorPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">LinkedIn Post Generator</h1>
        <p className="text-gray-400">Generate professional LinkedIn posts that engage your network</p>
      </div>
      <ToolForm 
        toolType="linkedin-post-generator" 
        placeholder="Enter your post topic or key points..."
      />
    </div>
  )
}