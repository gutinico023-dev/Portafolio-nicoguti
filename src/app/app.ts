import { Component } from '@angular/core';

interface PortfolioProject {
  name: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  features: string[];
  repository: string;
  deployment: string;
  accent: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly projects: PortfolioProject[] = [
    {
      name: 'Portafolio digital',
      eyebrow: 'Proyecto principal',
      description: 'Catálogo Angular para presentar proyectos académicos, decisiones de arquitectura y enlaces de publicación.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      features: ['Perfil profesional', 'Catálogo centralizado', 'CI/CD con GitHub Actions'],
      repository: 'https://github.com/gutinico023-dev/Portafolio-nicoguti',
      deployment: 'https://gutinico023-dev.github.io/Portafolio-nicoguti/',
      accent: 'violet',
    },
    {
      name: 'Client-Server',
      eyebrow: 'Angular + Node.js',
      description: 'Aplicación cliente-servidor con vistas de usuarios, productos, categorías, reseñas y órdenes.',
      technologies: ['Angular 20', 'Node.js', 'Jest'],
      features: ['Arquitectura cliente-servidor', 'Servicios HTTP', 'Pruebas unitarias'],
      repository: 'https://github.com/gutinico023-dev/Guti-Uceva-Angular-NodeJS-Taller-Client-Server',
      deployment: 'https://gutinico023-dev.github.io/Guti-Uceva-Angular-NodeJS-Taller-Client-Server/',
      accent: 'blue',
    },
    {
      name: 'Angular Modules',
      eyebrow: 'Taller de modularidad',
      description: 'Exploración de módulos, rutas hijas y componentes reutilizables con dominios de anime y videojuegos.',
      technologies: ['Angular', 'NgModules', 'RxJS'],
      features: ['Carga por módulos', 'Rutas anidadas', 'Consumo de APIs'],
      repository: 'https://github.com/gutinico023-dev/Uceva-Angular-Taller-Modules',
      deployment: 'https://gutinico023-dev.github.io/Uceva-Angular-Taller-Modules/',
      accent: 'orange',
    },
    {
      name: 'Design System',
      eyebrow: 'Diseño atómico',
      description: 'Librería Angular con átomos, moléculas y organismos Bootstrap consumidos por una app de demostración.',
      technologies: ['Angular', 'Bootstrap', 'ng-packagr'],
      features: ['Componentes reutilizables', 'Librería publicable', 'Demo interactiva'],
      repository: 'https://github.com/gutinico023-dev/Guti-Uceva-Angular-Taller-Design-System',
      deployment: 'https://gutinico023-dev.github.io/Guti-Uceva-Angular-Taller-Design-System/',
      accent: 'pink',
    },
    {
      name: 'Astro SSG SPA',
      eyebrow: 'Sitio estático',
      description: 'Aplicación de generación estática con Astro para consultar datos de usuarios, productos y órdenes.',
      technologies: ['Astro', 'TypeScript', 'Bootstrap'],
      features: ['SSG', 'Rutas estáticas', 'Publicación en Pages'],
      repository: 'https://github.com/gutinico023-dev/Guti-Uceva-Astro-Angular-SSG-SPA',
      deployment: 'https://gutinico023-dev.github.io/Guti-Uceva-Astro-Angular-SSG-SPA/',
      accent: 'cyan',
    },
  ];

  protected scrollToProjects(): void {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
