import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import './PDFOptionsModal.css';

function PDFOptionsModal({ options, onClose, onSave }) {
  const [localOptions, setLocalOptions] = useState(options);

  const handleChange = (key, value) => {
    setLocalOptions(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    onSave(localOptions);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-content-small" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">PDF Export Options</h2>
          <button className="modal-close" onClick={onClose}>
            <XMarkIcon className="icon" />
          </button>
        </div>

        <div className="modal-body">
          <div className="option-group">
            <label className="option-label">Page Size</label>
            <select
              className="option-input"
              value={localOptions.pageSize}
              onChange={(e) => handleChange('pageSize', e.target.value)}
            >
              <option value="a4">A4</option>
              <option value="letter">Letter</option>
              <option value="legal">Legal</option>
            </select>
          </div>

          <div className="option-group">
            <label className="option-label">Orientation</label>
            <select
              className="option-input"
              value={localOptions.orientation}
              onChange={(e) => handleChange('orientation', e.target.value)}
            >
              <option value="portrait">Portrait</option>
              <option value="landscape">Landscape</option>
            </select>
          </div>

          <div className="option-group">
            <label className="option-label">Margin (mm)</label>
            <input
              type="number"
              className="option-input"
              min="0"
              max="50"
              value={localOptions.margin}
              onChange={(e) => handleChange('margin', parseInt(e.target.value) || 0)}
            />
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Save Options
          </button>
        </div>
      </div>
    </div>
  );
}

export default PDFOptionsModal;

