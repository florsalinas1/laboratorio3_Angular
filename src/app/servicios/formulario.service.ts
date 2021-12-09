import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  url_backend = environment.url_backend+"/usuario";

  constructor(private http:HttpClient) { }

  crear_datosFormulario(datosFormulario:any){
    return this.http.post(`${this.url_backend}/crear-usuario`,datosFormulario);
    console.log(datosFormulario);
  }

  obtenerListaUsuarios(){
    return this.http.get(`${this.url_backend}/obtener-usuarios`);
  }

  eliminarListaUsuarios(id_usuarioform:any){
    return this.http.delete(`${this.url_backend}/eliminar-usuario/${id_usuarioform}`);
    
  }
}
