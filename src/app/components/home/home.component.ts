import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Figure from 'src/app/models/figure';
import ExchangeService from 'src/app/services/exchange';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  rectangleOperation = new FormControl('');
  triangleOperation = new FormControl('');
  circleOperation= new FormControl('');
  squareOperation= new FormControl('');

  selectedOperation = '';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  selectOperationHandler(event: any) {
    this.selectedOperation = event.target.value;
  }

  gotoTriangle(){
    ExchangeService.figureName = "Triangle";
    ExchangeService.operation = this.selectedOperation;
    this.router.navigate(['/operation']);
  }

  gotoRectangle(){
    ExchangeService.figureName = "Rectangle";
    ExchangeService.operation = this.selectedOperation;
    this.router.navigate(['/operation']);
  }

  goToCircle(){
    ExchangeService.figureName = "Circle";
    ExchangeService.operation = this.selectedOperation;
    this.router.navigate(['/operation']);
  }

  goToSquare(){
    ExchangeService.figureName = "Square";
    ExchangeService.operation = this.selectedOperation;
    this.router.navigate(['/operation']);
  }

}
