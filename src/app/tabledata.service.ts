import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dummytableData } from './mockTableData';
import { dummytableHeaders } from './mockTableHeaders';
import { TableData, TableHeader } from './TableData';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  getTabledata():Observable<TableData[]> {
    const tableData=of(dummytableData);
    return tableData;
  }
  getTableHeaders(): Observable<TableHeader[]> {
    const tableHeaders=of(dummytableHeaders);
    return tableHeaders;
  }
  

  constructor() { }
}
