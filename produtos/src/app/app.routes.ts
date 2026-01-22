import { Routes } from '@angular/router';
import { App } from './app'; // Remova o .ts do final, o Angular já entende
import { Carrinho } from './carrinho/carrinho'; // Ajustado para a pasta que aparece na sua imagem

export const routes: Routes = [
    { path: 'produtos', component: App },
    { path: 'carrinho', component: Carrinho },
    { path: '', redirectTo: 'produtos', pathMatch: 'full' }
];