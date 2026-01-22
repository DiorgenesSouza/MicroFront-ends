import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Produto {
  nome: string;
  valor: number;
  imagem: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  produtos: Produto[] = [
  {
    nome: 'Camiseta Angular',
    valor: 79.90,
    imagem: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=400&auto=format&fit=crop'
  },
  {
    nome: 'Caneca Programador',
    valor: 49.90,
    imagem: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop'
  },
  {
    nome: 'Mouse Gamer RGB',
    valor: 129.90,
    imagem: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop'
  },
  {
    nome: 'Teclado Mecânico',
    valor: 299.00,
    imagem: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400&auto=format&fit=crop'
  },
  {
    nome: 'Headset Bluetooth',
    valor: 199.90,
    imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop'
  }
];
}
