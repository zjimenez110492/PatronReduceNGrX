import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { Action } from '@ngrx/store';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface Appstate{
  contador:number;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

   contador:number;
  constructor(private store:Store<Appstate>){
    this.contador=10;
    this.store.select('contador').subscribe(state=>{
     this.contador=state;
    })
  }
  incrementar()
  {
    const accion= new IncrementarAction();
    this.store.dispatch(accion);
  }
  decrementar()
  {
    const accion= new DecrementarAction();
    this.store.dispatch(accion);
  }
 
}
