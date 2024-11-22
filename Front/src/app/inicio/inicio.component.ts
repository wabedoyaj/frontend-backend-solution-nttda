import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
//import { state } from '@angular/animations';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  tipoDocumento:string='';
  numeroDocumento:string='';

  constructor(private clienteService: ClienteService, private router:Router){}

  // Valida que el campo tenga entre 8 y 11 caracteres
  isFormValid():boolean{
    return (this.tipoDocumento !=='' &&
    this.numeroDocumento.length>=8 && this.numeroDocumento.length<=11 &&
    /^[0-9]*$/.test(this.numeroDocumento)
  );
  }
  // Restringe el campo para que solo sean permitidos caracteres numericos
  validarNumero(event:Event): void{
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.numeroDocumento = input.value;
  }
  // Busca la informacion del cliente y la envia al componente formulario
  buscarCliente():void{
    this.clienteService
      .buscarCliente(this.tipoDocumento, this.numeroDocumento)
      .subscribe({
        next: (cliente) => {
          console.log('cliente completo', cliente);
          this.router.navigate(['/resumen'], { state: { cliente } });
        },
        error: (error) => {
          console.error('Error al buscar el cliente', error);
        },
        complete: () => {
          console.log('Consulta de cliente completada');
        },
    });

  }


}
