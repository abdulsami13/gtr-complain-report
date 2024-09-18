import ExcelJS from 'exceljs';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  try {
    // Define the path to the Excel file in the 'public' directory
    const filePath = path.resolve('public/template.xlsx');

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ message: 'File not found' }, { status: 404 });
    }

    // Create a new workbook and read the existing file
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    // Get the first worksheet
    const worksheet: ExcelJS.Worksheet | undefined = workbook.getWorksheet(1);
    if (!worksheet) {
      throw new Error('Worksheet not found');
    }
    // Modify specific cells or add new data
    // Example: Add or update text in specific cells
    worksheet.getCell('A2').value = 'Updated Text in A1'; // Update cell A1
    worksheet.getCell('B2').value = 'New Text in B2'; // Update cell B2

    // Save the modified file to a buffer
    const buffer = await workbook.xlsx.writeBuffer();
    const nodeBuffer = Buffer.from(buffer);
    
    return new NextResponse(nodeBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="updated_template.xlsx"',
        'Content-Length': nodeBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error modifying and serving Excel file:', error);
    return NextResponse.json({ message: 'Error modifying file' }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json({ "sami": "sami" });
}
