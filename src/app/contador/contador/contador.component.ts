import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponent{
    public numero:number=10;

    //crear una nueva propiedad llamada base de tipo numero = 5
  
   public  base:number = 10;
    
    sumar(){
      this.numero++;
    }
  
    acumular(valor:number){
      this.numero += valor;
    }
  
    restar(){
      this.numero--;
    }
}