import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Controls from './components/Controls';
import TemplateModal from './components/TemplateModal';
import PDFOptionsModal from './components/PDFOptionsModal';
import { generatePDF } from './utils/pdfGenerator';
import { SAMPLE_TEMPLATES } from './utils/templates';

function App() {
  // State Management
  const [markdown, setMarkdown] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showPDFOptionsModal, setShowPDFOptionsModal] = useState(false);
  const [notification, setNotification] = useState(null);
  const [pdfOptions, setPdfOptions] = useState({
    pageSize: 'a4',
    orientation: 'portrait',
    margin: 20
  });
  
  const previewRef = useRef(null);

  // Load saved content and theme from localStorage on mount
  useEffect(() => {
    const savedMarkdown = localStorage.getItem('markdown-content');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedMarkdown) {
      setMarkdown(savedMarkdown);
    } else {
      // Set default welcome template
      setMarkdown(SAMPLE_TEMPLATES[0].content);
    }
    
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.setAttribute('data-color-mode', 'dark');
    } else {
      document.documentElement.setAttribute('data-color-mode', 'light');
    }
  }, []);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem('markdown-content', markdown);
    }, 500); // Debounce saving

    return () => clearTimeout(timeoutId);
  }, [markdown]);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    const theme = newMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-color-mode', theme);
    localStorage.setItem('theme', theme);
  };

  // Handle markdown content change
  const handleMarkdownChange = (value) => {
    setMarkdown(value);
  };

  // Handle PDF generation
  const handleGeneratePDF = async () => {
    if (!markdown.trim()) {
      showNotification('Please enter some markdown content first', 'error');
      return;
    }

    setIsGenerating(true);
    try {
      await generatePDF(previewRef.current, pdfOptions);
      showNotification('PDF generated successfully!', 'success');
    } catch (error) {
      console.error('Error generating PDF:', error);
      showNotification('Failed to generate PDF. Please try again.', 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle clear content
  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all content?')) {
      setMarkdown('');
      showNotification('Content cleared', 'success');
    }
  };

  // Handle template loading
  const handleLoadTemplate = (template) => {
    setMarkdown(template.content);
    setShowTemplateModal(false);
    showNotification(`Template "${template.name}" loaded`, 'success');
  };

  // Handle file import
  const handleFileImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMarkdown(e.target.result);
        showNotification('File imported successfully', 'success');
      };
      reader.onerror = () => {
        showNotification('Failed to import file', 'error');
      };
      reader.readAsText(file);
    }
  };

  // Handle markdown export
  const handleExportMarkdown = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    a.click();
    URL.revokeObjectURL(url);
    showNotification('Markdown exported successfully', 'success');
  };

  // Show notification helper
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="app">
      <Header 
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      
      <Controls
        onGeneratePDF={handleGeneratePDF}
        onClear={handleClear}
        onLoadTemplate={() => setShowTemplateModal(true)}
        onImport={handleFileImport}
        onExport={handleExportMarkdown}
        onPDFOptions={() => setShowPDFOptionsModal(true)}
        isGenerating={isGenerating}
      />

      <main className="main-content">
        <div className="editor-section">
          <Editor
            value={markdown}
            onChange={handleMarkdownChange}
            darkMode={darkMode}
          />
        </div>
        
        <div className="preview-section">
          <Preview
            markdown={markdown}
            darkMode={darkMode}
            previewRef={previewRef}
          />
        </div>
      </main>

      {notification && (
        <div className={`notification notification-${notification.type}`}>
          {notification.message}
        </div>
      )}

      {showTemplateModal && (
        <TemplateModal
          onClose={() => setShowTemplateModal(false)}
          onSelectTemplate={handleLoadTemplate}
          templates={SAMPLE_TEMPLATES}
        />
      )}

      {showPDFOptionsModal && (
        <PDFOptionsModal
          options={pdfOptions}
          onClose={() => setShowPDFOptionsModal(false)}
          onSave={(options) => {
            setPdfOptions(options);
            setShowPDFOptionsModal(false);
            showNotification('PDF options updated', 'success');
          }}
        />
      )}
    </div>
  );
}

export default App;

