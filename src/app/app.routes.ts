import { Routes } from '@angular/router';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContatoComponent } from './componentes/contato/contato.component';

export const routes: Routes = [
    {path:"cadastro", component:CadastroComponent},
    {path:"login", component:LoginComponent},
    {path:"contato", component:ContatoComponent}
];
