import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../data.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  dataSubmitted = {
    observationTemp: '',
    observationDate: '',
    observationTime: '',
    observationDesc: '',
  }

  summary: string = ''; 
  errorMsg: string = ''; 
  hideSubmission: boolean = true;

  constructor() { }

  @Output() sendData = new EventEmitter();

  ngOnInit (): void { }

  

  onSubmit(e:any) {
    e.stopPropagation();
    e.preventDefault();

    if (!this.dataSubmitted.observationTemp || !this.dataSubmitted.observationDate || !this.dataSubmitted.observationTime || !this.dataSubmitted.observationDesc) {
      this.errorMsg = 'Please fill in all fields.';
    } else {
      this.errorMsg = '';
      this.summary = `
        Temperature: ${this.dataSubmitted.observationTemp} 
        Date: ${this.dataSubmitted.observationDate} 
        Time: ${this.dataSubmitted.observationTime} 
        Description: ${this.dataSubmitted.observationDesc}
      
      `
      console.log(this.summary);
      this.hideSubmission = false;
    }
  }

  getTemp(tempVal: string) {
    this.dataSubmitted.observationTemp = tempVal;
  }

  getDate(dateVal: string) {
    this.dataSubmitted.observationDate = dateVal;
  }

  getTime(timeVal: string) {
    this.dataSubmitted.observationTime = timeVal;
  }

  getDescription(descVal: string) {
    this.dataSubmitted.observationDesc = descVal;
  }

  hideSub() {
    this.hideSubmission = true;
  }
  
}
