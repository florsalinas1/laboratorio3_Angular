import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormularioService } from '../servicios/formulario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  formulario:any;

  constructor(private fb:FormBuilder, private serviceFormulario: FormularioService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      rut:['',Validators.required,],
      nombre:['',Validators.required,],
      apellido:['',Validators.required,],
      correo:['',Validators.required,],
      password:['',Validators.required,]
      
    })

  }
  
  get formularioReactivo() {
    return this.formulario.controls;
  }

  enviarDatos(){
    
    this.serviceFormulario.crear_datosFormulario(this.formulario.value).subscribe(
      
      
      (response:any)=>{
        
        if(response.usuario){
          alert("Datos guardados exitosamente");
          console.log(response)
         
        }else{
          alert("Datos no registrados")
        }
        
      },
      error=>{
        console.log(error)
        alert("error al registrar")

      }
      
    )
  }

}
