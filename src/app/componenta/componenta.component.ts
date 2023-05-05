import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  detailView:boolean=false;
  viewDetailsValues:any=[];
  allViewed:any=[];



  constructor (private tableDataService : TabledataService, private formBuilder:FormBuilder){}

  ngOnInit():void{
   
      this.getTableHeader();
      this.getTableData();
    

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

  get getValues():any{
    return this.editDetail.controls;
  }
  get getNewValue():any{
    return this.addForm.controls;
  }
  
  //edit form errors
  getNameErrror():any{
    return this.getValues.name.errors.required ? 'Employee Name is required': '';
  }
  getPositionErrror():any{
    return this.getValues.position.errors.required ? 'Employee Position  is required': '';
  }
  getContactErrror():any{
    return this.getValues.position.errors.required ? 'Employee Contact  is required': '';
  }
  getAgeErrror():any{
    return this.getValues.position.errors.required ? 'Employee Age  is required': '';
  }
  getAddressErrror():any{
    return this.getValues.position.errors.required ? 'Employee Address  is required': '';
  }
  getSalaryErrror():any{
    return this.getValues.position.errors.required ? 'Employee Salary  is required': '';
  }


//new form errors

  getNewNameErrror():any{
    return this.getNewValue.name.errors.required ? 'Employee Name is required': '';
  }
  getNewPositionErrror():any{
    return this.getNewValue.position.errors.required ? 'Employee Position  is required': '';
  }
  getNewContactErrror():any{
    return this.getNewValue.position.errors.required ? 'Employee Contact  is required': '';
  }
  getNewAgeErrror():any{
    return this.getNewValue.position.errors.required ? 'Employee Age  is required': '';
  }
  getNewAddressErrror():any{
    return this.getNewValue.position.errors.required ? 'Employee Address  is required': '';
  }
  getNewSalaryErrror():any{
    return this.getNewValue.position.errors.required ? 'Employee Salary  is required': '';
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



//get controls of the form
  get getEditValue():any{
    return this.editDetail.controls;
  }
  get getAddValue():any{
    return this.addForm.controls;
  }
//



  //handle delete entry

  handleDelete(row:any){
    this.tableData = this.tableData.filter((item)=>item.id!==row.id);
  }
  //



  //handle add new entry

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
//




//handle edit submit

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
  //




  //get data from the services

  getTableHeader(){
    this.tableDataService.getTableHeaders().subscribe((tableHeader) => this.tableHeader = tableHeader);
  }
  getTableData(){
    this.tableDataService.getTabledata().subscribe((tableData) => this.tableData = tableData);
  }

  //



//view details
  viewDetails(row:any){
    this.detailView=true;
    this.viewDetailsValues=row;
    // this.allViewed.push(row);
  }

  handleBack(){
    // this.detailView=false;
    // this.viewDetailsValues=[];
    // console.log(this.allViewed,'allViewed');
    
  }
  
  detailStyling(row:any){
    if(this.allViewed.includes(row)){
      return true;
    }
    return false
  }

  getData(row: any) {
    if(!this.allViewed.includes(row)){
      this.allViewed.push(row);
    }
    this.detailView = false;
    console.log(this.allViewed,'allviewed');
    
  }

}
