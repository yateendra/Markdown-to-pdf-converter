import React from 'react';
import { XMarkIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import './TemplateModal.css';

function TemplateModal({ onClose, onSelectTemplate, templates }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Choose a Template</h2>
          <button className="modal-close" onClick={onClose}>
            <XMarkIcon className="icon" />
          </button>
        </div>

        <div className="modal-body">
          <div className="template-grid">
            {templates.map((template, index) => (
              <div
                key={index}
                className="template-card"
                onClick={() => onSelectTemplate(template)}
              >
                <div className="template-icon">
                  <DocumentTextIcon className="icon" />
                </div>
                <h3 className="template-name">{template.name}</h3>
                <p className="template-description">{template.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateModal;

