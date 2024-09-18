import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

// Convert image to Base64
const loadImageAsBase64 = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });
};

const createExcelFile = async (data: { text: string; highlight?: boolean }[][]) => {
  // Create a new workbook and a worksheet
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet 1');

  // Load the image as Base64 from public directory
  const base64Image = await loadImageAsBase64('/Images/gtr.png'); // Adjust the path if needed

  // Add the image to the workbook
  const imageId = workbook.addImage({
    base64: base64Image,
    extension: 'png', // Image format
  });

  // Add the image to the header
  worksheet.getCell('A1').value = ''; // Clear cell A1 if needed
  worksheet.getCell('A1').alignment = { vertical: 'top', horizontal: 'left' }; // Align image in the header

  // Set the image in the header
  worksheet.addImage(imageId, {
    tl: { col: 0, row: 0 }, // Top-left position (A1)
    ext: { width: 100, height: 100 }, // Size of the image
  });

  // Add header row (first row) with bold and larger font size
  const header = data[0].map((cell) => cell.text);
  const headerRow = worksheet.addRow(header);

  // Apply styles to the header row
  headerRow.eachCell({ includeEmpty: true }, (cell) => {
    cell.font = {
      bold: true, // Bold text
      size: 14,   // Larger font size
    };
  });

  // Add remaining rows and apply conditional formatting for highlighted cells
  data.slice(1).forEach((row) => {
    const rowData = row.map((cell) => cell.text);
    const excelRow = worksheet.addRow(rowData);

    // Apply styles for each cell in the row
    row.forEach((cell, cellIndex) => {
      const excelCell = excelRow.getCell(cellIndex + 1); // Excel cells use 1-based indexing

      // Apply font color (red) and background fill for selected cells
      if (cell.highlight) {
        excelCell.font = {
          color: { argb: 'FF0000' }, // Red text
        };
        excelCell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFC7CE' }, // Light red background
        };
      }
    });
  });

  // Write the workbook to a Blob and trigger download
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/octet-stream' });
  saveAs(blob, 'data_with_image.xlsx');
};

export default createExcelFile;
