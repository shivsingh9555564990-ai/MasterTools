import ToolForm from '@/components/ToolForm'

export default function InstagramCaptionGeneratorPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Instagram Caption Generator</h1>
        <p className="text-gray-400">Create engaging captions with hashtags for your Instagram posts</p>
      </div>
      <ToolForm 
        toolType="instagram-caption-generator" 
        placeholder="Describe your photo or post idea..."
      />
    </div>
  )
}