'use client'

import { useState } from 'react'

interface OutputBoxProps {
  content: string
}

export default function OutputBox({ content }: OutputBoxProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Generated Content</h3>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-sm"
        >
          {copied ? (
            <>
              <span>✅</span>
              Copied!
            </>
          ) : (
            <>
              <span>📋</span>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  )
}