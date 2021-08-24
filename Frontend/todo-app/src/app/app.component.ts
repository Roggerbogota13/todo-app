import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  nombre: string = "Samuel";
  nombreGuardado: string = "";
  casado: boolean = false;
  edad: number = 17;
  listaNombres: string[] = ["Alejandro","Cristian","Rogger","Sergio"];
  persona = {
    name: "Rogger",
    age: 24,
    married: false
  }

  guardar(){
    this.nombreGuardado = this.nombre;
    this.listaNombres.push(this.nombre);
  }
}
