# Clon Netflix app Document

 ### Especificación del servicio: La API usada [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction).
 ### Casos de uso:
 - El usuario al ingresar se le desplegará un contenido relacionado con series y películas. 
 - El usuario podrá navegar hacia el detalle de dicha selección. disfrutar del tráiler, valoración y descripción del mismo contenido seleccionado.

## Implementación

Se ha desarrollado una aplicación que permite al usuario realizar las siguientes acciones:
- podra visualiza una lista de peliculas. Filtradas para mayor facilidad del usuario se realizo un top10 (podria ser modificada) mediante el consumo de la API  [themoviedb](https://developers.themoviedb.org/3/movies/get-popular-movies). GET /movie/popular.  
- consta de 3 secciones Popular Movies, Top Rated, Upcoming las dos últimas serán visualizadas por medio de un Carrusel Horizontal donde el usuario podrá ir a la izq (mediante algunas funciones se desabilito el derecho ) para seleccionar el contenido deseado dar un click y disfrutar de un tráiler, valoración y descripción del mismo.

## Tecnologías y herramientas
Algunas de las tecnologías utilizadas en la construcción del proyecto:

 - Bootstrap: 5.1
 - Framer-motion: 6.3
 - React: 18.1
 - React-bootstrap: 2.3
 - React-dom: 18.1
 - React-router-dom: 6.3
 - React-scripts: 5.0
 - React-youtube: 9.0
 - Web-vitals: 2.1

## Videos demostrativos

https://user-images.githubusercontent.com/88940167/168672996-5728c25e-fde0-4741-bc84-b55323c6c86a.mp4




