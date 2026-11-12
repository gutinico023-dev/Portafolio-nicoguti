# Portafolio de Nicolás Gutiérrez

Portafolio académico desarrollado para la asignatura Arquitectura de Software de la Unidad Central del Valle del Cauca (UCEVA). Reúne cinco proyectos independientes y sus respectivas publicaciones en GitHub Pages.

[![Deploy Angular to GitHub Pages](https://github.com/gutinico023-dev/Portafolio-nicoguti/actions/workflows/pipeline.yml/badge.svg?branch=develop)](https://github.com/gutinico023-dev/Portafolio-nicoguti/actions/workflows/pipeline.yml)

## Información del estudiante

- Nombre: Nicolás Gutiérrez Escudero
- Código: 230231029
- Modalidad: trabajo individual
- Repositorio: [github.com/gutinico023-dev/Portafolio-nicoguti](https://github.com/gutinico023-dev/Portafolio-nicoguti)
- Sitio publicado: [gutinico023-dev.github.io/Portafolio-nicoguti](https://gutinico023-dev.github.io/Portafolio-nicoguti/)

## Proyectos presentados

| Proyecto | Tecnologías | Código | Demo |
| --- | --- | --- | --- |
| Portafolio digital | Angular, TypeScript, SCSS | [Repositorio](https://github.com/gutinico023-dev/Portafolio-nicoguti) | [GitHub Pages](https://gutinico023-dev.github.io/Portafolio-nicoguti/) |
| Client-Server | Angular, Node.js, Jest | [Repositorio](https://github.com/gutinico023-dev/Guti-Uceva-Angular-NodeJS-Taller-Client-Server) | [GitHub Pages](https://gutinico023-dev.github.io/Guti-Uceva-Angular-NodeJS-Taller-Client-Server/) |
| Angular Modules | Angular, NgModules, RxJS | [Repositorio](https://github.com/gutinico023-dev/Uceva-Angular-Taller-Modules) | [GitHub Pages](https://gutinico023-dev.github.io/Uceva-Angular-Taller-Modules/) |
| Design System | Angular, Bootstrap, ng-packagr | [Repositorio](https://github.com/gutinico023-dev/Guti-Uceva-Angular-Taller-Design-System) | [GitHub Pages](https://gutinico023-dev.github.io/Guti-Uceva-Angular-Taller-Design-System/) |
| Astro SSG SPA | Astro, TypeScript, Bootstrap | [Repositorio](https://github.com/gutinico023-dev/Guti-Uceva-Astro-Angular-SSG-SPA) | [GitHub Pages](https://gutinico023-dev.github.io/Guti-Uceva-Astro-Angular-SSG-SPA/) |

## Stack del portafolio

- Angular 20 con componentes standalone.
- TypeScript 5.9.
- SCSS para estilos y diseño responsive.
- Angular CLI para desarrollo y compilación.
- GitHub Actions y GitHub Pages para integración y despliegue continuo.

La información de los proyectos se mantiene en el componente principal y se presenta mediante tarjetas reutilizables. Cada tarjeta enlaza al repositorio fuente y a su demo publicada.

## Ejecutar localmente

Requisitos: Node.js y npm instalados.

```bash
npm ci
npm start
```

La aplicación estará disponible en `http://localhost:4200/`.

## Comandos disponibles

```bash
# Servidor de desarrollo
npm start

# Compilación de producción
npm run build

# Compilación usando el subpath de GitHub Pages
npm run build -- --base-href "/Portafolio-nicoguti/"

# Pruebas unitarias en modo interactivo
npm test

# Pruebas unitarias sin interfaz gráfica
npm test -- --no-watch --no-progress --browsers=ChromeHeadless
```

## Integración y despliegue continuo

El workflow [`pipeline.yml`](.github/workflows/pipeline.yml) se ejecuta cuando hay un `push` a la rama `develop` o cuando se inicia manualmente desde GitHub Actions.

El pipeline realiza las siguientes tareas:

1. Instala las dependencias con `npm ci`.
2. Ejecuta las pruebas unitarias en Chrome Headless.
3. Compila la aplicación con el `base-href` del repositorio.
4. Genera `404.html` a partir de `index.html` para soportar las rutas de GitHub Pages.
5. Sube el artefacto estático y lo publica en el entorno `github-pages`.

La configuración de Pages debe utilizar GitHub Actions como fuente de publicación. La URL resultante es:

<https://gutinico023-dev.github.io/Portafolio-nicoguti/>

## Estructura principal

```text
src/
├── app/
│   ├── app.ts          # Datos de los proyectos y lógica del componente raíz
│   ├── app.html        # Estructura de la página
│   ├── app.scss        # Estilos del portafolio
│   └── app.routes.ts   # Configuración de rutas
├── index.html
└── main.ts
.github/workflows/pipeline.yml
angular.json
package.json
pipeline.yml
```

## Licencia

Proyecto académico de uso educativo. Todos los proyectos enlazados pertenecen a su repositorio correspondiente.
