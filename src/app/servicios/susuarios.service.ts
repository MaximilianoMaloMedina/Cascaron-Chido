import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SusuariosService {
  url = 'http://localhost/';

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`http:/localhost/recuperarusuarios.php`);
  }

  alta(usuario) {
    alert(usuario);
    alert(JSON.stringify(usuario));
    alert('entrando');
    return this.http.post(`${this.url}agregarusuario.php`, JSON.stringify(usuario));
  }
}
