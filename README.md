# Fullstack_project
Creado el middleware para Autenticación. Se crea auth.services.js que contiene las funciones encryptPassword, comparePassword, createToken y decodeToken utilizando la librería jwt y bcrypt. 
Se crea auth.middleware donde se define la función needsAuthToken que se utilzará en los endpoints cerrados. Es decir solo se podrá acceder a estos endpoints si se dispone de un token válido.
En user service.js, se añade la parte de autenticación.
Se prueba con insomnia y se crea un usuario y se hace login recibiendo un token.

To Do:
No he utilizado el archivo config.js sino que he definido las variables directamente en auth.service. Quizás sería bueno crearlo por claridad.
Creo que podía ser bueno añadir al token, además del email, tambien el userType aunque no estoy seguro si es necesario o se puede buscar en la base de datos una vez recibido el token. 
El endpoint de test no lo he implementado en modo dev. Esto es solo para probar que al utilizar needsAuthToken, solamente se accede si hay un token válido creado al logearse. Podemos probarlo directamente con el siguiente endpoint que desarrollemos.

Resumiendo lo que se ha hecho es:

Al registrarse, se guarda en la base de datos los datos del usuario y se genera un token con su email, añadiendo salt para evitar que se puedan reconocer dos passwords iguales aunque estén encriptados. Este hash es el que se guarda en la base de datos, no el password introducido por el usuario. Una vez registrado, al hacer login, se le envía un token válido donde va encriptado su email. Sin este token, no podrá acceder a ningún endpoint cerrado. A continuación tendremos que ir implementando endpoints del tipo crear nueva tarea, eliminar tarea, cambiar estado, asignar.... y todos deberán estar cerrados por la función needsAuthToken.
