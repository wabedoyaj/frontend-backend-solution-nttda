import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent {
  cliente: any;

  constructor(private router:Router){
  // navigation recupera los datos del cliente enviados desde el componente inicio
    const navigation = this.router.getCurrentNavigation();
    //asigna los datos al cliente
    this.cliente = navigation?.extras.state?.['cliente'];
    console.log('datos del cliente',this.cliente)
  }
  //metodo para devolverse a la pantalla de inicio
  volver():void{
    this.router.navigate(['/'])
  }

}
