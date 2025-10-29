import React, { useRef } from 'react';
import {
  ArrowDownTrayIcon,
  TrashIcon,
  DocumentDuplicateIcon,
  ArrowUpTrayIcon,
  ArrowDownOnSquareIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import './Controls.css';

function Controls({
  onGeneratePDF,
  onClear,
  onLoadTemplate,
  onImport,
  onExport,
  onPDFOptions,
  isGenerating
}) {
  const fileInputRef = useRef(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="controls-container">
      <div className="controls-content">
        <div className="controls-group">
          <button
            className="control-btn control-btn-primary"
            onClick={onGeneratePDF}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <div className="spinner"></div>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <ArrowDownTrayIcon className="btn-icon" />
                <span>Generate PDF</span>
              </>
            )}
          </button>

          <button
            className="control-btn control-btn-secondary"
            onClick={onPDFOptions}
            title="PDF Options"
          >
            <Cog6ToothIcon className="btn-icon" />
            <span className="btn-text-hide-mobile">Options</span>
          </button>
        </div>

        <div className="controls-divider"></div>

        <div className="controls-group">
          <button
            className="control-btn control-btn-secondary"
            onClick={onLoadTemplate}
            title="Load Template"
          >
            <DocumentDuplicateIcon className="btn-icon" />
            <span className="btn-text-hide-mobile">Templates</span>
          </button>

          <button
            className="control-btn control-btn-secondary"
            onClick={handleImportClick}
            title="Import Markdown File"
          >
            <ArrowUpTrayIcon className="btn-icon" />
            <span className="btn-text-hide-mobile">Import</span>
          </button>

          <button
            className="control-btn control-btn-secondary"
            onClick={onExport}
            title="Export as Markdown"
          >
            <ArrowDownOnSquareIcon className="btn-icon" />
            <span className="btn-text-hide-mobile">Export</span>
          </button>

          <button
            className="control-btn control-btn-danger"
            onClick={onClear}
            title="Clear Content"
          >
            <TrashIcon className="btn-icon" />
            <span className="btn-text-hide-mobile">Clear</span>
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept=".md,.markdown,.txt"
          onChange={onImport}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}

export default Controls;

