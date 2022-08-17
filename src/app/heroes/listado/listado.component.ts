import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  public heroeBorrado:string='';

  heroes:string[]=['Spiderman','IronMan','Hulk','Thor'];
  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';  
  }
}
