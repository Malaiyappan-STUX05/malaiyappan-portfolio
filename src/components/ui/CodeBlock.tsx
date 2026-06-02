'use client';

import { type HTMLAttributes, useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language,
  filename,
  showLineNumbers = false,
  className = '',
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const lines = code.split('\n');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-xl overflow-hidden bg-[#0A0A0F] border border-[rgba(0,240,255,0.08)] ${className}`}>
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#12121A] border-b border-[rgba(0,240,255,0.06)]">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="text-xs font-mono text-[#5A5A72]">
                {filename}
              </span>
            )}
            {language && (
              <span className="text-xs text-[#00F0FF] bg-[rgba(0,240,255,0.1)] px-2 py-0.5 rounded">
                {language}
              </span>
            )}
          </div>
          <button
            onClick={handleCopy}
            className="text-[#5A5A72] hover:text-[#00F0FF] transition-colors p-1"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-[#00F0FF]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      )}

      {/* Code */}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed" {...props}>
        <code className="font-mono text-[#9A9AAA]">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              {showLineNumbers && (
                <span className="inline-block w-8 mr-4 text-right text-[#5A5A72] select-none flex-shrink-0">
                  {i + 1}
                </span>
              )}
              <span>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
