import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../servicios/formulario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  datos_formulario:any;

  constructor(private servicioFormulario: FormularioService) {} 

  ngOnInit(): void {
    this.obtenerListaUsuarios();
  }

  obtenerListaUsuarios(){
    this.servicioFormulario.obtenerListaUsuarios().subscribe(
      (response:any) => {
        this.datos_formulario = response.usuarios;
        console.log(this.datos_formulario)
      },
      error => {
        alert("Hay errores");
      }
    )
  }

  eliminarListaUsuarios(_id:any){
    this.servicioFormulario.eliminarListaUsuarios(_id).subscribe(
      (response:any) =>{
        if(response.registroForms.deletedCount > 0){
          alert("Registro eliminado");
          this.obtenerListaUsuarios();
        }else{
          alert("No se ha podido eliminar el registro");
        }
        
      },
      error => {
        console.log(error)
        alert("Hay errores");
      }
    );
  }

}
