'use client'
import { useState } from 'react'

export function CodeBlock({ code, id }: { code: string; id?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <pre className="code" id={id}>
      <button
        className={`copy${copied ? ' copied' : ''}`}
        onClick={() => {
          navigator.clipboard.writeText(code)
          setCopied(true)
          setTimeout(() => setCopied(false), 1200)
        }}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
      <code>{code}</code>
    </pre>
  )
}
