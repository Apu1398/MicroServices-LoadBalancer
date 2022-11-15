import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/model/gasto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  constructor(public api:DataService) { }

  

  gastoActual:Gasto = {
    monto:0,
    descripcion:"",
    responsable:"",
    departamento:"",
    fecha: ""
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.gastoActual.monto < 0) alert("Monto no puede ser menor o igual 0 colones");
    else{
      this.api.crearGasto(this.gastoActual)
      .subscribe(response => {
        alert("Dato enviado");
        this.gastoActual = {
          monto:0,
          descripcion:"",
          responsable:"",
          departamento:"",
          fecha: ""}
      });      
    }
  }




}
