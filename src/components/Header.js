import React from 'react';
import { MoonIcon, SunIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import './Header.css';

function Header({ darkMode, onToggleDarkMode }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <DocumentTextIcon className="header-icon" />
          <h1 className="header-title">Markdown to PDF</h1>
        </div>
        
        <div className="header-right">
          <button
            className="theme-toggle"
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="icon" />
            ) : (
              <MoonIcon className="icon" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

