# Aplicación de Gestión de Tareas

Una sencilla aplicación web para crear, ver y gestionar tareas. Esta aplicación permite a los usuarios registrar tareas con una descripción y realizar un seguimiento de su progreso.



## Funcionalidades

- Crear nuevas tareas con una descripción.
- Marcar tareas como completadas o pendientes.
- Ver la lista de tareas existentes.
- Editar o eliminar tareas.

## Tecnologías Utilizadas

- Frontend: React.js
- Backend: Node.js y Express.js
- Base de datos: PostgreSQL con Sequelize ORM

## Configuración del Proyecto

1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta del proyecto:

```bash
cd aplicacion-gestion-tareas
Instala las dependencias para el frontend y el backend:
cd frontend
npm install
cd ../backend
npm install

Configura la base de datos PostgreSQL. Asegúrate de configurar las credenciales de la base de datos en el archivo .env en la carpeta backend. Ejemplo de configuración:
DB_USER=nombre_de_usuario_de_la_base_de_datos
DB_PASSWORD=contraseña_de_la_base_de_datos
DB_HOST=127.0.0.1
DB_NAME=nombre_de_la_base_de_datos
DB_PORT=5432
Ejecuta las migraciones de la base de datos para crear las tablas necesarias:  
npx sequelize-cli db:migrate

Inicia la aplicación:
Para el frontend:
cd frontend
npm start
Para el backend:
cd backend
npm start

Contribuir
Si deseas contribuir a este proyecto, no dudes en crear un pull request o reportar problemas (issues). Tu contribución es bienvenida.

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.


En este README.md, he incluido secciones para describir el proyecto, las tecnologías utilizadas, la configuración del proyecto, cómo contribuir y la licencia del proyecto. Puedes personalizar este README con información específica de tu proyecto. Asegúrate de incluir capturas de pantalla o imágenes relevantes y proporcionar instrucciones claras sobre cómo configurar y ejecutar la aplicación.
