package com.pruebabackendnttdata.serviciorestcliente.Entities;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //Genera getters y setters
@AllArgsConstructor //Genera constructor con todos los campos
@NoArgsConstructor  //Genera un constructor vacio 
public class Cliente {
    
    private String tipoDocumento;
    private String numeroDocumento;
    private String nombre;
    private String ciudad;    


}
