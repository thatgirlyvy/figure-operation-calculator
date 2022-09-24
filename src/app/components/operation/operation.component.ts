import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ExchangeService from 'src/app/services/exchange';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {

  squareArea = false;
  squarePerimeter = false;
  circleArea = false;
  circlePerimeter = false;
  rectangleArea = false;
  rectanglePerimeter = false;
  triangleArea = false;
  trianglePerimeter = false;
  resultAvailable = false;
  result : number;

  selectedUnit = '';

  figureState = ExchangeService.figureName;
  operationState = ExchangeService.operation;

  squareAreaDetails : FormGroup;
  squarePerimeterDetails : FormGroup;
  rectangleAreaDetails : FormGroup;
  rectanglePerimeterDetails : FormGroup;
  triangleAreaDetails : FormGroup;
  trianglePerimeterDetails : FormGroup;
  circleAreaDetails : FormGroup;
  circlePerimeterDetails : FormGroup;

  constructor(private formBuilder : FormBuilder) { 
  }

  ngOnInit(): void {
    console.log(this.figureState);
    console.log(this.operationState);
    if (this.figureState == "Rectangle" && this.operationState == "Perimeter") {
      this.rectanglePerimeter = true;
    } else if (this.figureState == "Rectangle" && this.operationState == "Area") {
      this.rectangleArea = true;
    } else if (this.figureState == "Square" && this.operationState == "Perimeter") {
      this.squarePerimeter = true;
    } else if (this.figureState == "Square" && this.operationState == "Area") {
      this.squareArea = true;
    } else if (this.figureState == "Circle" && this.operationState == "Perimeter") {
      this.circlePerimeter = true;
    } else if (this.figureState == "Circle" && this.operationState == "Area") {
      this.circleArea = true;
    } else if (this.figureState == "Triangle" && this.operationState == "Perimeter") {
      this.trianglePerimeter = true;
    } else if (this.figureState == "Triangle" && this.operationState == "Area") {
      this.triangleArea = true;
    }
    this.triangleAreaDetails = this.formBuilder.group({
      height : ['', [Validators.required]],
      base : ['', [Validators.required]],
    });
    this.trianglePerimeterDetails = this.formBuilder.group({
      side1: ['', [Validators.required]],
      side2 : ['', [Validators.required]],
      height : ['', [Validators.required]],
    });
    this.rectangleAreaDetails = this.formBuilder.group({
      height : ['', [Validators.required]],
      width : ['', [Validators.required]],
    });
    this.rectanglePerimeterDetails = this.formBuilder.group({
      height : ['', [Validators.required]],
      width : ['', [Validators.required]],
    });
    this.circleAreaDetails = this.formBuilder.group({
      radius : ['', [Validators.required]],
    });
    this.circlePerimeterDetails = this.formBuilder.group({
      radius : ['', [Validators.required]],
    });
    this.squareAreaDetails = this.formBuilder.group({
      side : ['', [Validators.required]],
    });
    this.rectangleAreaDetails = this.formBuilder.group({
      height : ['', [Validators.required]],
      width : ['', [Validators.required]],
    });
  }

  calculateRectanglePerimeter(height: number, width: number) {
    this.result = (height + width) * 2;
    this.resultAvailable = true;
    return this.result;
  }

  selectUnitHandler(event: any) {
    this.selectedUnit = event.target.value;
    this.convert();
  }

  calculateSquarePerimeter(side: number) {
    this.result = side * 4;
    this.resultAvailable = true;
    return this.result;
  }

  calculateTrianglePerimeter(side1: number, height: number, side2: number) {
    this.result = side1 + height + side2;
    this.resultAvailable = true;
    return this.result;
  }

  calculateCirclePerimeter(radius: number) {
    this.result = 2 * radius * 22 / 7;
    this.resultAvailable = true;
    return this.result;
  }

  calculateRectangleArea(height: number, width: number) {
    this.result = height * width;
    this.resultAvailable = true;
    return this.result;
  }

  calculateSquareArea(side: number) {
    this.result = side * side;
    this.resultAvailable = true;
    return this.result;
  }

  calculateTriangleArea(height: number, base: number) {
    this.result = height * base / 2;
    this.resultAvailable = true;
    return this.result;
  }

  calculateCircleArea(radius: number) {
    this.result = radius * radius * 22 / 7;
    this.resultAvailable = true;
    return this.result;
  }

  convert() {
    if(this.selectedUnit == "cm") {
      this.result = this.result * 100;
    } else if(this.selectedUnit == "dm") {
      this.result = this.result * 10;
    } else if(this.selectedUnit == "km") {
      this.result = this.result / 1000;
    } else if(this.selectedUnit == "m") {
      this.result = this.result;
    } else if(this.selectedUnit == "m2") {
      this.result = this.result;
    }else if(this.selectedUnit == "cm2") {
      this.result = this.result * 10000;
    }else if(this.selectedUnit == "dm2") {
      this.result = this.result * 100;
    }else if(this.selectedUnit == "km2") {
      this.result = this.result / 1000000;
    }
  }

}
