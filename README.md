Proyecto "Amigo Secreto"
Este es un proyecto web interactivo de "Amigo Secreto", una aplicación para organizar sorteos de Amigo Secreto de manera fácil y divertida. Los usuarios pueden ingresar los nombres de sus amigos, y la aplicación seleccionará aleatoriamente un "Amigo Secreto" para cada participante.

Funcionalidades
1. Agregar amigos a la lista
Los usuarios pueden ingresar los nombres de sus amigos en un campo de texto.
Al hacer clic en el botón "Añadir", el nombre se agrega a una lista que se muestra debajo del campo de entrada.
Si el campo de texto está vacío, se muestra un mensaje de advertencia para ingresar un nombre.
2. Mostrar lista de amigos
Los nombres de los amigos agregados se muestran en una lista debajo del campo de entrada.
La lista se actualiza automáticamente cada vez que un nombre se agrega.
3. Sortear un amigo secreto
Al hacer clic en el botón "Sortear amigo", la aplicación selecciona aleatoriamente un "Amigo Secreto" de la lista de amigos.
El resultado del sorteo se muestra en un área especial de la página, destacando el nombre del amigo secreto sorteado.
Si no hay amigos en la lista, se muestra un mensaje de advertencia indicando que la lista está vacía.
4. Interfaz amigable
La página tiene un diseño moderno y responsivo, adaptándose bien a distintos tamaños de pantalla.
Se utilizan colores y fuentes agradables para mejorar la experiencia del usuario.

Estructura del Proyecto
Amigo-Secreto/
│
├── index.html           # El archivo principal de la aplicación
├── style.css            # Estilos CSS para la interfaz
├── app.js               # Lógica en JavaScript para la funcionalidad
└── assets/
    └── amigo-secreto.png # Imagen representativa para el encabezado
    └── play_circle_outline.png # Icono para el botón de sorteo

index.html
El archivo principal que contiene la estructura de la página. Incluye:

El título de la aplicación ("Amigo Secreto").
Un área para ingresar los nombres de los amigos.
Una lista que muestra los amigos ingresados.
Un botón para realizar el sorteo y mostrar el resultado.
style.css
El archivo que contiene los estilos visuales de la página, utilizando variables CSS para los colores y estilos consistentes en toda la aplicación.

app.js
El archivo que contiene la lógica en JavaScript. Gestiona las siguientes funciones:

Agregar amigos a la lista.
Mostrar la lista actualizada de amigos.
Sortear un amigo secreto aleatorio.

assets/
La carpeta que contiene las imágenes utilizadas en la interfaz, como el ícono de sorteo y la imagen de encabezado.

Instalación
Este proyecto no requiere ninguna instalación compleja. Solo necesitas un navegador web para verlo en funcionamiento.

Pasos para ejecutar el proyecto:
Clona o descarga el repositorio en tu computadora.
Abre el archivo index.html en tu navegador.
¡Disfruta sorteando tus amigos secretos!

Requisitos
Un navegador web moderno (Chrome, Firefox, Edge, Safari, etc.).
Mejoras Futuras
Este proyecto se puede mejorar de diversas maneras, algunas ideas incluyen:

Agregar la opción de asignar un "amigo secreto" por correo electrónico.
Enviar los resultados del sorteo a través de correo electrónico.
Permitir que los usuarios eliminen amigos de la lista.
Añadir animaciones para hacer la experiencia de sorteo más dinámica.
