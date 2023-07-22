# WePlay Store
WePlay es una store ficticia que cree para aprender a implementar React JS. Simula un básico e-commerce con productos Gamers donde podrás ejecutar varias funciones habituales en este tipo de webs. Por cada orden de compra generada se realiza un nuevo pedido a la base de datos de Firebase lo que genera un cambio de stock y un ID personal de compra.

## Tecnologías empleadas
- Vite
- React
- React Router DOM
- Firebase

## Funcionalidades
- Visualizar una lista completa de productos
- Filtrar los productos mediante sus categorias
- Añadir productos al carrito
- Eliminar productos del carrito
- Vaciar completamente el carrito
- Visualizar el carrito completo
- Stock actualizado automaticamente mediante la ejecución de compras
- Realizar una orden de compra obteniendo un ID de compra

## Instalación del Proyecto

### Para instalar y poder montar el proyecto en tu propia PC seguí estos pasos:

1. Clona este repositorio.
2. Abri utilizando cualquier terminal o consola en el directorio del proyecto.
3. Ejecuta el comando "npm install" para instalar las dependencias necesarias.
4. Ejecutar el comando "npm run dev" para darle inicio a la aplicación
5. En el navegador de tu preferencia navega a http://localhost:5173 para ver la aplicación en acción.

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea o logea una cuenta en Firebase.
2. Crea un Nuevo Proyecto.
3. En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
4. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
5. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
6. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.