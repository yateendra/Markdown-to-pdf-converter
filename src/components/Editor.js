import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import './Editor.css';
import './EditorOverride.css';

function Editor({ value, onChange, darkMode }) {
  return (
    <div className="editor-container">
      <div className="editor-header">
        <PencilSquareIcon className="section-icon" />
        <h2 className="section-title">Editor</h2>
        <div className="char-count">
          {value.length} characters
        </div>
      </div>
      
      <div className="wysiwyg-editor-wrapper" data-color-mode={darkMode ? 'dark' : 'light'}>
        <MDEditor
          value={value}
          onChange={(val) => onChange(val || '')}
          preview="edit"
          height="100%"
          visibleDragbar={false}
          hideToolbar={false}
          style={{
            backgroundColor: darkMode ? '#111827' : '#ffffff',
            color: darkMode ? '#f9fafb' : '#111827'
          }}
          textareaProps={{
            placeholder: '# Start writing your markdown here...\n\n## Features Supported:\n- **Bold text**\n- *Italic text*\n- [Links](https://example.com)\n- `Code blocks`\n- Lists and more!\n\nUse the toolbar above for quick formatting →',
            style: {
              color: darkMode ? '#f9fafb' : '#111827',
              backgroundColor: darkMode ? '#111827' : '#ffffff'
            }
          }}
        />
      </div>
    </div>
  );
}

export default Editor;

