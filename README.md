## Proyecto TTHH Cliente Web (Angular 2+)
### Requisitos
1. Node 6+
2. Angular cli

### Instalación
 Node: (https://nodejs.org/en/download/package-manager/)

 Angular: npm install -g @angular/cli

Una vez configurado el ambiente, a continuación proceda descargar el proyecto base (http://gitlab.yachay.gob.ec/yachay/proyectoBase_client.git).
Instalar en Módulo dentro del proyecto:

dirijase al directorio de proyecto y ejecute el siguiente comando.
 npm install
En caso de que no se instale de forma automática los componentes(ng-select, ngx-pagination) ejecutar los comandos:
 npm install --save @ng-select/ng-select
 npm install ngx-pagination --save
 npm install alertifyjs --save

 En caso de tener el error: Error: Cannot find module 'rxjs/operators', instalar la versión actual.
    npm install --save rxjs@latestVersion

Finalmente
 ng serve

### Ayuda
Para mayor ayuda referirse a la documentación:
1. [Node] (https://nodejs.org)
2. [ngx-pagination] (https://www.npmjs.com/package/ngx-pagination) 
3. [Angular cli] (https://angular.io/)
4. [ng-select] (https://www.npmjs.com/package/@ng-select/ng-select)
5. [alertify] (https://signl.uk/tutorial/index/notify-service-with-angular-5)
