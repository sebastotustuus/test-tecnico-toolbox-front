# Descripción del Proyecto como Prueba Técnica

Este proyecto responde a los requerimientos de la prueba técnica de Toolbox. En ningún momento pretende ser llevado más allá que las pruebas locales o de pruebas por parte de la empresa. Este correponde al front-end del aplicativo.

### Tech
El proyecto del lado del front end usa diferentes dependencias para su funcionamiento

* [ReactJS](https://reactjs.com) - Librería de Facebook para el desarrollo del FrontEnd
* [Redux](https://es.redux.js.org/) - Gestor de Estados del aplicativo
* [Redux-thunk](https://github.com/reduxjs/redux-thunk) - Middleware para Redux
* [Webpack](https://webpack.js.org/) - Webpack para construccion del bundle
* [Bootstrap](https://getbootstrap.com/) - Bootstrap
* [Jest](https://jestjs.io/es-ES/) - Jest para Unit Testing


# Instalación

El proyecto requiere [Node.js](https://nodejs.org/es/) v10+ para correr. Perferiblemente la versión LTS actual.

### Instalacción de dependencias mencionadas

```sh
$ npm install 
```
### Levantar proyecto local en desarrollo
```sh
$ npm start
```

### Construir bundle del proyecto
```sh
$ npm build
```

## Consideraciones varias sobre la realización del proyecto
 - Se utiliza como gestor de estados a Redux con el middleware de Thunk
 - Es importante levantar el servidor primero antes de poner en funcionamiento el FrontEnd.
 - El proyecto del lado del front responde a una arquitectura de Componente/Contenedor
 


