import ToolForm from '@/components/ToolForm'

export default function ProductDescriptionGeneratorPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Product Description Generator</h1>
        <p className="text-gray-400">Create compelling product descriptions that drive sales</p>
      </div>
      <ToolForm 
        toolType="product-description-generator" 
        placeholder="Describe your product and its features..."
      />
    </div>
  )
}