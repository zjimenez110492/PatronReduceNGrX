import { ResetearAction } from './../contador.actions';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
 contador:number; 
  constructor(private store:Store<AppState>) { 
    this.store.select('contador').subscribe(state=>{
      this.contador=state;
    })
  }

  ngOnInit(): void {
    
  }
  resetContador()
  {
    const accion= new ResetearAction();
    this.store.dispatch(accion);
  }

}

