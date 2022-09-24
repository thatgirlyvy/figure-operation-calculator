export default class Figure{
    constructor(private name: string, private operation: string){}

    getNameFigure(){
        return this.name;
    }

    getOperation(){
        return this.operation;
    }
}