import { Routes } from '@angular/router';
import { FaleConoscoComponent } from './components/fale-conosco/fale-conosco.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:"faleconosco", component:FaleConoscoComponent},
    {path:"contato", component:FaleConoscoComponent},
    {path:"vitrine",component:VitrineComponent},
    {path:"", component:VitrineComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"login", component:LoginComponent}
];
