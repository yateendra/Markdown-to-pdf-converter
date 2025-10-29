import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Generate PDF from HTML content
 * @param {HTMLElement} element - The HTML element to convert to PDF
 * @param {Object} options - PDF generation options
 * @returns {Promise<void>}
 */
export const generatePDF = async (element, options = {}) => {
  if (!element) {
    throw new Error('Element not found');
  }

  const {
    pageSize = 'a4',
    orientation = 'portrait',
    margin = 20
  } = options;

  try {
    // Store original styles
    const originalOverflow = element.style.overflow;
    const originalHeight = element.style.height;
    const originalMaxHeight = element.style.maxHeight;
    
    // Temporarily remove scrolling to capture full content
    element.style.overflow = 'visible';
    element.style.height = 'auto';
    element.style.maxHeight = 'none';
    
    // Wait a bit for layout to settle
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Create canvas from HTML element with full scrollHeight
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      height: element.scrollHeight,
      windowHeight: element.scrollHeight,
      scrollY: -window.scrollY,
      scrollX: -window.scrollX
    });
    
    // Restore original styles
    element.style.overflow = originalOverflow;
    element.style.height = originalHeight;
    element.style.maxHeight = originalMaxHeight;

    const imgData = canvas.toDataURL('image/png');
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    // Calculate PDF dimensions based on page size
    const pageSizes = {
      'a4': { width: 210, height: 297 },
      'letter': { width: 215.9, height: 279.4 },
      'legal': { width: 215.9, height: 355.6 }
    };

    const pageConfig = pageSizes[pageSize] || pageSizes['a4'];
    
    // Create PDF
    const pdf = new jsPDF({
      orientation: orientation,
      unit: 'mm',
      format: pageSize
    });

    // Calculate dimensions with margins
    const pdfWidth = orientation === 'portrait' ? pageConfig.width : pageConfig.height;
    const pdfHeight = orientation === 'portrait' ? pageConfig.height : pageConfig.width;
    
    const contentWidth = pdfWidth - (margin * 2);
    const contentHeight = pdfHeight - (margin * 2);
    
    // Calculate the ratio to fit width
    const ratio = contentWidth / (imgWidth / 2); // Divide by 2 because of scale: 2 in html2canvas
    const scaledImgHeight = (imgHeight / 2) * ratio; // Divide by 2 because of scale: 2
    
    // Calculate how much content fits on each page
    const pageHeightInPixels = contentHeight / ratio;
    
    let position = 0;
    
    // Add pages with content
    while (position < imgHeight / 2) { // Divide by 2 because of scale: 2
      // Add new page if not the first page
      if (position > 0) {
        pdf.addPage();
      }
      
      // Create a temporary canvas for this page
      const pageCanvas = document.createElement('canvas');
      const pageCtx = pageCanvas.getContext('2d');
      
      // Calculate the height for this page
      const sourceY = position * 2; // Multiply by 2 because of scale: 2
      const sourceHeight = Math.min(pageHeightInPixels * 2, imgHeight - sourceY);
      
      // Set canvas dimensions
      pageCanvas.width = imgWidth;
      pageCanvas.height = sourceHeight;
      
      // Draw the slice of the original canvas
      pageCtx.drawImage(
        canvas,
        0, sourceY, // Source x, y
        imgWidth, sourceHeight, // Source width, height
        0, 0, // Destination x, y
        imgWidth, sourceHeight // Destination width, height
      );
      
      // Convert this page's canvas to image
      const pageImgData = pageCanvas.toDataURL('image/png');
      
      // Calculate the height to draw on PDF
      const drawHeight = Math.min(contentHeight, (sourceHeight / 2) * ratio);
      
      // Add image to PDF
      pdf.addImage(pageImgData, 'PNG', margin, margin, contentWidth, drawHeight);
      
      // Move to next page position
      position += pageHeightInPixels;
    }

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `markdown-document-${timestamp}.pdf`;

    // Save PDF
    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

/**
 * Export content as text file
 * @param {string} content - The content to export
 * @param {string} filename - The filename
 * @param {string} mimeType - The MIME type
 */
export const exportAsFile = (content, filename, mimeType = 'text/plain') => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

