import { Component, OnInit } from '@angular/core';
import { Gasto } from 'src/app/model/gasto';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  constructor() { }

  gastoActual:Gasto = {
    monto:0,
    descripcion:"",
    responsable:"",
    departamento:"",
    fecha: new Date()
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.gastoActual.monto > 0)   alert("Responsable: " + this.gastoActual.responsable + "\nDepartamento: " + this.gastoActual.departamento + "\nMonto: " + this.gastoActual.monto + "\nDescripción: " + this.gastoActual.descripcion + "\nFecha: " + this.gastoActual.fecha );
    else alert("Monto no puede ser menor o igual 0 colones")
  }




}
