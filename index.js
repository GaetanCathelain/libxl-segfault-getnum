'use strict';

var libxl = require('libxl');
var xlsxBook = new libxl.Book(libxl.BOOK_TYPE_XLSX);
xlsxBook.setKey(process.env.LIBXL_OWNER, process.env.LIBXL_KEY);

const book = xlsxBook.loadSync('file.xlsx');
const sheet = book.getSheet(0);

const firstCol = sheet.firstCol();
const lastCol = sheet.lastCol();
const firstRow = sheet.firstRow();
const lastRow = sheet.lastRow();

for(let i=firstCol; i<lastCol; i++) {
  for(let j=firstRow; j<lastRow; j++) {
    let cellType;
    try {
      cellType = sheet.cellType(j, i);
    } catch (err) {
      console.log('Error while getting cellType:', e);
    }

    switch (cellType) {
      case libxl.CELLTYPE_EMPTY:
        console.log('Empty  cell');
        break
      case libxl.CELLTYPE_NUMBER:
        console.log('Number cell: ');
        console.log(sheet.readNum(j, i));
        break;
      case libxl.CELLTYPE_STRING:
        console.log('String cell: ', sheet.readStr(j, i));
        break;
      case libxl.CELLTYPE_BOOLEAN:
        console.log('Boolean cell: ', sheet.readBool(j, i));
        break;
      case libxl.CELLTYPE_BLANK:
        console.log('Blank cell');
        break;
      case libxl.CELLTYPE_ERROR:
        console.log('Error on cell');
        break;
      default:
        console.log('Unknown cell type');
        break;
    }
  }
}


