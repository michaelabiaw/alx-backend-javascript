export type RowID = number;

export interface RowElement {
  firstName: string,
  lastName: string,
  age?: number,
 };

 export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}


const row: RowElement = {
  firstName: 'Michael',
  lastName: 'Kash',
};

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {...row, age: 30}

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);
