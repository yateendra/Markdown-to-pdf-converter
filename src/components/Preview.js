import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { EyeIcon } from '@heroicons/react/24/outline';
import './Preview.css';

function Preview({ markdown, darkMode, previewRef }) {
  return (
    <div className="preview-container">
      <div className="preview-header">
        <EyeIcon className="section-icon" />
        <h2 className="section-title">Preview</h2>
      </div>
      
      <div className="preview-content" ref={previewRef}>
        <div className="markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            components={{
              code: ({ node, inline, className, children, ...props }) => {
                return inline ? (
                  <code className="inline-code" {...props}>
                    {children}
                  </code>
                ) : (
                  <pre className="code-block">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                );
              },
              a: ({ node, children, ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
              img: ({ node, ...props }) => (
                <img {...props} alt={props.alt || 'Image'} loading="lazy" />
              ),
            }}
          >
            {markdown || '*Start typing in the editor to see preview...*'}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Preview;

