import { Component, OnInit } from '@angular/core';
import { SusuariosService } from '../../servicios/susuarios.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios = null;
  usu = {
    uclave : null,
    unombre : null,
    uemail : null,
    upassword : null,
    ugoogle : null,
    urole : null,
    uimg : null,
    uestado : null
  };

  //uclave = '';
  //unombre = '';
  //uemail = '';
  //upassword = '';
  //ugoogle = '';
  //urole = '';
  //uimg = '';
  //uestado = '';
    resultado = '';

  operaciones = [
    {valor: 'agregaru', muestraValor: 'Agregar'},
    {valor: 'eliminaru', muestraValor: 'Eliminar'},
    {valor: 'modificaru', muestraValor: 'Modificar'},
    {valor: 'consultaru', muestraValor: 'Consultar'}
  ];
  seleccionada: string = this.operaciones[0].valor;

  operar() {
    switch (this.seleccionada) {
      case 'agregaru' : this.agregarusuario(); this.resultado = 'Usuario agregado'; break;
      case 'eliminaru' : this.resultado = 'Usuario eliminado';  break;
      case 'modificaru' : this.resultado = 'Usuario modificado';  break;
      case 'consultaru' : this.resultado = 'Usuario consultado'; break;
    }
  }
  constructor(private usuariosServicio: SusuariosService) { }

  ngOnInit(): void {
    // this.recuperarusuarios();
  }
  irusuarios() {
    this.resultado = 'Usuario';
  }
  agregarusuario() {
      /*alert(this.usu.uclave);
      alert(this.usu.unombre);
      alert(this.usu.uemail);
      alert(this.usu.upassword);
      alert(this.usu.ugoogle);
      alert(this.usu.urole);
      alert(this.usu.uimg);
      alert(this.usu.uestado);*/
      this.usuariosServicio.alta(this.usu).subscribe(datos => {
      if (datos['resultado'] === 'OK') {
        alert('Alta exitosa');
        alert(datos['mensaje']);
        //this.recuperarusuarios();
      }  else {
        alert('error al grabar');
      }
    });
  }

  recuperarusuarios() {
    this.usuariosServicio.recuperarTodos().subscribe(result => this.usuarios = result);
  }

}
