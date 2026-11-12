# Portafolio-nicoguti

Portafolio académico de Nicolás Gutiérrez para la asignatura Arquitectura de Software de la UCEVA. La aplicación principal está desarrollada con Angular y presenta cinco proyectos independientes con sus enlaces de código y publicación.

## Proyectos

| Proyecto | Tecnología principal | Repositorio | Publicación prevista |
| --- | --- | --- | --- |
| Portafolio digital | Angular | [GitHub](https://github.com/gutinico023-dev/Portafolio-nicoguti) | [GitHub Pages](https://gutinico023-dev.github.io/Portafolio-nicoguti/) |
| Client-Server | Angular + Node.js | [GitHub](https://github.com/gutinico023-dev/Guti-Uceva-Angular-NodeJS-Taller-Client-Server) | [GitHub Pages](https://gutinico023-dev.github.io/Guti-Uceva-Angular-NodeJS-Taller-Client-Server/) |
| Angular Modules | Angular + NgModules | [GitHub](https://github.com/gutinico023-dev/Uceva-Angular-Taller-Modules) | [GitHub Pages](https://gutinico023-dev.github.io/Uceva-Angular-Taller-Modules/) |
| Design System | Angular + Bootstrap | [GitHub](https://github.com/gutinico023-dev/Guti-Uceva-Angular-Taller-Design-System) | [GitHub Pages](https://gutinico023-dev.github.io/Guti-Uceva-Angular-Taller-Design-System/) |
| Astro SSG SPA | Astro + TypeScript | [GitHub](https://github.com/gutinico023-dev/Guti-Uceva-Astro-Angular-SSG-SPA) | [GitHub Pages](https://gutinico023-dev.github.io/Guti-Uceva-Astro-Angular-SSG-SPA/) |

Las URLs de Pages son las previstas por el enunciado; su disponibilidad depende de habilitar Pages y ejecutar los workflows en GitHub.

## Desarrollo local

```bash
npm ci
npm start
```

Para validar el build con el subpath de GitHub Pages:

```bash
npm run build -- --base-href "/Portafolio-nicoguti/"
```

## CI/CD

El workflow ejecutable está en `.github/workflows/pipeline.yml` y se replica en `pipeline.yml` para mantener la configuración visible en la raíz. El despliegue se activa solo con `push` a `develop` o manualmente mediante `workflow_dispatch`.

Los cuatro repositorios adicionales viven en `projects/` como repositorios Git independientes. `projects/` está excluido localmente mediante `.git/info/exclude`; no se agregan sus fuentes ni sus `.git` al índice del portafolio principal.

Antes del primer despliegue, revisa en cada repositorio `Settings > Pages` que la fuente de publicación sea `GitHub Actions` y que el entorno `github-pages` tenga los permisos de Pages habilitados. No se hicieron cambios remotos desde este entorno.
