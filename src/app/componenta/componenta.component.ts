import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dummytableData } from '../mockTableData';
import { TableData, TableHeader } from '../TableData';
import { TabledataService } from '../tabledata.service';

@Component({
  selector: 'app-componenta',
  templateUrl: './componenta.component.html',
  styleUrls: ['./componenta.component.css']
})
export class ComponentaComponent {

  tableData:TableData[]=[];
  tableHeader:TableHeader[]=[];
  editDetail!: FormGroup;
  addForm!:FormGroup;
  editId:any;
  editLine:any=[];
  editRowDetail:any=[];

  constructor (private tableDataService : TabledataService, private formBuilder:FormBuilder){}

  ngOnInit():void{
    //  if(this.tableData.length===0){
      this.getTableHeader();
      this.getTableData();
    //  }
    
    console.log('ngoninit triggered');
    

    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      salary: ['', [Validators.required]]
    })

    this.editDetail = this.formBuilder.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      salary: ['', [Validators.required]]
    })

  }


  // handling add logic
  handleAddClick(){
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      salary: ['', [Validators.required]]
    })
  }
 //


//handling edit popup button click (auto fill values in popup)
  editClick(row:any){
    
    this.editId = row.id;
    this.editDetail = this.formBuilder.group({
      id:[row.id],
      name: [row.name, [Validators.required]],
      position: [row.position, [Validators.required]],
      contact: [row.contact, [Validators.required]],
      age: [row.age, [Validators.required]],
      address: [row.address, [Validators.required]],
      salary: [row.salary, [Validators.required]]
    })
    
    
  }



  // Inline edit button (auto fill values in table inputs)
  editClickRow(row:any){
    this.editLine = row;
    this.editId=row.id
    this.editDetail = this.formBuilder.group({
      id:[row.id],
      name: [row.name, [Validators.required]],
      position: [row.position, [Validators.required]],
      contact: [row.contact, [Validators.required]],
      age: [row.age, [Validators.required]],
      address: [row.address, [Validators.required]],
      salary: [row.salary, [Validators.required]]
    })
  }
  handleLineCancel(row:any){
    this.editLine= [];
    
  }
  handleLineSave(){
    this.editLine= [];
    this.handleEditSubmit();
  }
  //




  get getEditValue():any{
    return this.editDetail.controls;
  }
  get getAddValue():any{
    return this.addForm.controls;
  }

  handleDelete(row:any){
    this.tableData = this.tableData.filter((item)=>item.id!==row.id);
  }

  handleAdd(){
    
    this.tableData.push({
      id: this.tableData.length+1,
      name: this.getAddValue.name.value,
      position: this.getAddValue.position.value,
      contact: this.getAddValue.contact.value,
      age: this.getAddValue.age.value,
      address: this.getAddValue.address.value,
      salary: this.getAddValue.salary.value
    })
    
  }

  handleEditSubmit(){
 
    if(this.editId){
      this.tableData[this.editId-1]= {
        id: this.getEditValue.id.value,
        name: this.getEditValue.name.value,
        position: this.getEditValue.position.value,
        contact: this.getEditValue.contact.value,
        age: this.getEditValue.age.value,
        address: this.getEditValue.address.value,
        salary: this.getEditValue.salary.value
      }
    }
    
  }
  getTableHeader(){
    this.tableDataService.getTableHeaders().subscribe((tableHeader) => this.tableHeader = tableHeader);
  }
  getTableData(){
    this.tableDataService.getTabledata().subscribe((tableData) => this.tableData = tableData);
  }

}
