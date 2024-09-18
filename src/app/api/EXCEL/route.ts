import ExcelJS from 'exceljs';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

interface RequestData {
  receivedFrom: string;
  receivedDate: string;
  equipmentName: string;
  locationOfMotor: string;
  power: string;
  rpm: string;
  workRequest: string;
  make: string;
  checkboxes: { cell: string; label: string; color: string }[];
}

// Function to apply red color to a specific cell
function applyRedColorToCell(cell: ExcelJS.Cell): void {
  cell.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFFF0000' }, // Red color
  };
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body: RequestData = await request.json();

    const {
      receivedFrom,
      receivedDate,
      equipmentName,
      locationOfMotor,
      power,
      rpm,
      workRequest,
      make,
      checkboxes = []
    } = body;

    const filePath = path.resolve('public/template.xlsx');

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ message: 'File not found' }, { status: 404 });
    }

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet: ExcelJS.Worksheet | undefined = workbook.getWorksheet(1);
    if (!worksheet) {
      throw new Error('Worksheet not found');
    }
    // Set basic cell values (you can modify based on your requirements)
    worksheet.getCell('B4').value = receivedFrom || 'N/A';
    worksheet.getCell('B5').value = receivedDate || 'N/A';
    worksheet.getCell('E4').value = equipmentName || 'N/A';
    worksheet.getCell('E5').value = locationOfMotor || 'N/A';
    worksheet.getCell('B9').value = power || 'N/A';
    worksheet.getCell('B10').value = rpm || 'N/A';
    worksheet.getCell('E9').value = workRequest || 'N/A';
    worksheet.getCell('E10').value = make || 'N/A';

    // Apply red color to specific cells from the checkboxes array
    checkboxes.forEach(({ cell }) => {
      if (cell) {
        const excelCell = worksheet.getCell(cell);
        applyRedColorToCell(excelCell);
      }
    });

    // Write the updated Excel file to buffer and return
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
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ message: 'Use POST to send data' }, { status: 400 });
}
