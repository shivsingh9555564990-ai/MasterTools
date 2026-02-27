'use client'

import { useState } from 'react'
import OutputBox from './OutputBox'

interface ToolFormProps {
  toolType: string
  placeholder?: string
}

export default function ToolForm({ toolType, placeholder = 'Enter your content idea here...' }: ToolFormProps) {
  const [userInput, setUserInput] = useState('')
  const [tone, setTone] = useState('professional')
  const [wordLength, setWordLength] = useState(500)
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const tones = ['professional', 'casual', 'friendly', 'enthusiastic', 'witty', 'formal']
  const wordLengths = [300, 500, 800, 1000, 1500]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!userInput.trim()) {
      setError('Please enter some content')
      return
    }

    if (userInput.length > 3000) {
      setError('Input must be less than 3000 characters')
      return
    }

    setLoading(true)
    setError('')
    setOutput('')

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toolType,
          userInput: userInput.trim(),
          tone,
          wordLength,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate content')
      }

      setOutput(data.content)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={placeholder}
            rows={6}
            className="w-full bg-gray-900 border border-gray-800 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
            maxLength={3000}
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {userInput.length}/3000
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Tone
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-gray-700"
            >
              {tones.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Word Length
            </label>
            <select
              value={wordLength}
              onChange={(e) => setWordLength(Number(e.target.value))}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-gray-700"
            >
              {wordLengths.map((len) => (
                <option key={len} value={len}>
                  {len} words
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Generating...
            </span>
          ) : (
            'Generate'
          )}
        </button>
      </form>

      {error && (
        <div className="bg-red-900/50 border border-red-800 rounded-lg p-4 text-red-200">
          {error}
        </div>
      )}

      {output && <OutputBox content={output} />}
    </div>
  )
}