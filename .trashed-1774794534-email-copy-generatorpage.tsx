import ToolForm from '@/components/ToolForm'

export default function EmailCopyGeneratorPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Email Copy Generator</h1>
        <p className="text-gray-400">Create effective email marketing copy that converts</p>
      </div>
      <ToolForm 
        toolType="email-copy-generator" 
        placeholder="Describe your email purpose and audience..."
      />
    </div>
  )
}