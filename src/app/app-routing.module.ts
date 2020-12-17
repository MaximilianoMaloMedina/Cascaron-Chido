import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent} from './componentes/libros/libros.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PrestamosComponent } from './componentes/prestamos/prestamos.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';

const routes: Routes = [
  { path: 'libros', component: LibrosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'prestamos', component: PrestamosComponent },
  { path: 'acercade', component: AcercadeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
