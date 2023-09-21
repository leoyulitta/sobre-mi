# Juego de Piedra, papel o tijera  


## Descripcion  


El proyecto comprende el famoso juego de piedra, papel y tijera a modo de p�gina web.

Para el mismo se han utilizado los lenguajes de programaci�n HTML,Js y Css.

Como editor de c�digo se ha utlizado VS Code y extensiones para el mismo.

## Instrucciones

- Para comenzar el juego el participante debe ingresar su nombre y presionar el bot�n entrar.

- Luego debe elegir una de las tres opciones: piedra, papel o tijera y presionar el bot�n jugar.

- Automaticamente la opci�n de juego del otro participante se elegir� de forma aleatoria.

- Cada vez que finalice una partida, los contadores de cada jugador se actualizar�n autom�ticamente.

- Al completarse las cinco partidas se elegir� al ganador de la ronda.

## Reglas de juego

- La ronda completa comprende cinco partidas.

- Para ganar la ronda el participante deber� conseguir tres victorias.

- En el caso de no conseguir ninguno de los participantes las tres victorias no habr� ganador y se jugar� una nueva ronda.

- "Piedra" gana a "tijera" - "papel" gana a "piedra" - "tijera" gana a "papel".

## Detalles de implementación

- Obtención de los elementos que forman el DOM de acuerdo a su id, para asignar escuchadores de eventos.
- Implementación de escuchadores de eventos para diferentes tipos de inputs y botones, para cada tipo de acción que realice el usuario.
- Implementación de diferentes funciones asociadas a los escuchadores de eventos tales como juagada de usuario, registro de usuario, reinicio de juego.
- Implementación de la función para conocer al ganador de cada partida y de la ronda de acuerdo a los valores devueltos por la funcion de jugada de usuario y jugada de la pc(esta última es aleatoria).
- Se implementan reglas de estilo css para diferentes estados de los botones e inputs como ser habilitados y deshabilitados.
- Se implementan diferentes acciones de seguridad como prohibir que el campo de nombre quede vacío o se introduzca un espacio en blanco.
- Se implementa medida de seguridad que prohibe jugar sin elegir el tipo de jugada.


