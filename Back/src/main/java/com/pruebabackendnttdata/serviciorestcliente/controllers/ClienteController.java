package com.pruebabackendnttdata.serviciorestcliente.controllers;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pruebabackendnttdata.serviciorestcliente.Entities.Cliente;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("api/clientes")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {

    @GetMapping("/consultar")
    public Cliente obtenerCliente(@RequestParam String tipoDocumento,
        @RequestParam String numeroDocumento){
        return new Cliente (tipoDocumento,numeroDocumento," Juan Perez","Bogotá");        
        
    }

    


}
