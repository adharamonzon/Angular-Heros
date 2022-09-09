# Aplicación de super héroes con Angular
Este proyecto se ha creado con **Angular CLI** 
Para  poder levantar el proyecto desde un servidor local, deben primero clonarse el repositorio con el siguiente comando: 
  *git clone https://github.com/adharamonzon/Angular-Heros.git*
Después se deben instalar el respositorio en local: 
  *npm install*
Para lanzar el servidor utilizar el comando *ng serve* que lanzara la aplicación en la dirección *`http://localhost:4200/`*

Este proyecto es una actividad para afianzar conocimientos básicos y avanzados de Angular. 

# Router
Esta aplicación usa rutas para navigar entre los distintos componentes. Estas rutas se cargan con un lazyload. Por un lado se carga la página principal y el módlulo de error si no encuentra la url. En ésta página hay una lista con los enlaces a los distintos módulos del código que sólo se cargan cuando se accede ea ellos. 
# Componentes 
La aplicación está dividida en componentes pequeños, para que sea manejable, escalable y reutilizable. 
Hay componentes generales, como por ejemplo una página de error si no se encuentra la url y páginas relacionadas con los héroes. Todos los componentes relacionados con los héroes se instancian en  se instancia en el archivo *heroe.module.ts* que éste a su vez se instancia en *app.module.ts*.
