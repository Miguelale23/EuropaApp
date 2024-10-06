###### Miguel Pérez Ballester
# Documentación App Europa

## Indice
- [Diseño de la app](#diseño)
    - [Resumen](#resumen)
    - [Como usar la app como colegial](#como-usar-la-app-como-colegial)
    - [Como usar la app como colegial que crea posts](#como-usar-la-app-como-colegial-que-crea-posts)
    - [Posts](#posts)
    - [Pestaña novedades](#pestaña-novedades)
    - [Pestaña eventos](#pestaña-eventos)
    - [Pestaña decanatos](#pestaña-decanatos)
- [Desarrollo de la app](#desarrollo)
    - [Cómo funciona](#cómo-funciona)
        - []
    - [Por hacer](#por-añadir)


### DISEÑO

#### Resumen

Esta aplicación es una app distribuida tanto como para android y para ios que servirá de forma de gestión de los decanatos y eventos del Europa. La usarán durante el curso los aproximadamente 200 colegiales.

La aplicación se basa en recibir [posts](#posts), que los usuarios con privilegios podrán crear y distribuir a todos los colegiales o a un grupo determinado de colegiales. 

En estos post se podrá poner un simple difundido con opcionalmente alguna imagen, un difundido con un cuestionario de sí o no en el que poder votar.

#### Como usar la app como colegial

Como colegial, al abrir la aplicación se presentará una pantaña de inicio de sesión. La contraseña y usuario serán proporcionadas por el decano de informática y con ellas podrás entrar. 
Una vez dentro, puedes ver los posts que se van publicando en la pestaña de NOVEDADES. En esta pestaña para pasar al siguiente post se tiene que deslizar hacia la derecha, revelando el siguiente en la cola. Si no hay más, saldrá un mensaje diciendo que la cola está vacía.
En la pestaña de EVENTOS, se verá un calendario que contiene el calendario del curso y se puede ciclar entre meses. En cada día podrá haber unas bolitas de colores con texto indicando que hay eventos de un determinado decanato en ese día. En la leyenda se puede saber cuál es.
![alt text](calendario.png)

Al clicar en un día, saldrá una ventana deslizable verticalmente que se podrá ver todos los eventos disponibles para ese día. En caso de ser privilegiado, se podrá ver más información sobre ese post, como quién lo ha visto, quien ha votado, y quien ha confirmado lectura mediante deslizar.

Finalmente en la pestaña de DECANATOS, se puede hacer algo similar al calendario y entrar en un decanato concreto para poder ver todos los eventos que han habido de ese decanato. Es de notar que si el usuario no pertenece al grupo objetivo del post, no lo podrá ver en esta pestaña. Por ejemplo, si el usuario no pertenece al club de tenis y entra en la sección de decanato de deportes, no verá los post dirijidos al club de tenis.

También habrá una sección para ver los menús del día, así como los vigías (DUDA ?)
Se intentará hacer para que los menús del día se suban automáticamente ese mismo día por la mañana como post.

#### Como usar la app como colegial que crea posts

Como colegial que crea posts, se te asignará un privilegio sobre ciertos decanatos. Por ejemplo, el entrenador de rugby será capaz de ver estadísticas y crear posts para el decanato de deportes. 
En la pestaña de DECANATOS habrá un botón que mostrará los decanatos donde se podrá publicar. Al elegir el decanato, luego se elegirá el grupo de gente al que mandar el post, y finalmente ya el post en sí con su difundido e imagen opcional.
Si se quiere, se podrá tickar una opción para incluir la encuesta. Esto activará los dos botones y registrará a quien dice que sí, que no y el que ignora los botones.

En caso de querer ver información sobre los posts ya publicados, se accede a la pestaña DECANATOS, donde le da al botón del decanato deseado, y desde ahí en cada post saldrá un botón de 3 líneas, que al pulsar mostrará una caja donde dirá las estadísticas del post.

#### Posts

Los post contienen un encabezado y un color de fondo que dictan a que decanato pertenece el post.  
![alt text](post1.png) 
Luego tendrá un texto que podrá contener emojis y opcionalmente una imagen.
Luego existe la opción de tener una encuesta de si o no donde el usuario podrá votar en función al texto. Esto quedará registrado en el contador de personas apuntadas, y si se clica el botón de personas apuntadas, saldrá una lista con los usuarios que han pulsado el botón de VOY.
También se podrá deslizar el post hacia la derecha para confirmar lectura, que quitará el post y revelará los siguientes post en la cola. Esto también queda registrado y el creador del post podrá verlo.
![alt text](post2.png)

El creador del post puede dirigir el post a un grupo determinado de personas, como el equipo de rugby masculino por ejemplo, o a todos los colegiales si lo necesita. El creador puede ver cuánta gente ha visto el post, cuanta gente lo ha ignorado, y cuanta gente le ha dado a VOY y a NO VOY.

NO ES LO MISMO POST QUE EVENTO DEL CALENDARIO.
Para añadir un evento al calendario se hará de forma similar pero solo será un texto que saldrá el día del evento.

#### Pestaña eventos

Desde esta pestaña se podrá ver los eventos distribuidos en un calendario, separados por decanatos y visibles por bolitas con texto de colores debajo de cada día que indican el evento de ese día.
El significado de los colores de las bolitas lo muestra una leyenda justo abajo del calendario. 
Al clicar en un día, muestra los eventos de ese día en forma de deslizador vertical.

#### Pestaña novedades

Aquí saldrán los post nuevos. Para confirmar lectura y pasar al siguiente se tiene que deslizar a la derecha. Desde aquí también se podrá acceder a tu cuenta y a ajustes (no se si haré algo para esas dos secciones)

#### Pestaña decanatos

En esta pestaña se podrán ver todos los posts de todos los distintos decanatos. Al clicar en un decanato saldrán todos en forma de deslizador vertical y podrás verlos.
Desde aquí los usuarios con privilegios podrán subir posts.
Se podrán ver todos los posts de los decanatos, así como los posts de enlaces al vigía o los posts sobre el comedor.


## DESARROLLO 

### RESUMEN

La aplicación será un desplegable que se podrá instalar en ios y android. Está desarrollada en react-native, de manera que no hará falta cambiar el código para desplegarlo en ios o en android.
La aplicación se comunica con un servidor node.js que usa express mediante peticiones GET, POST, etc, y mediante la función 'fetch' de javascript.
Desde el backend, tenemos una base de datos única que funciona con SQLite. Tiene una tabla para usuarios y otra tabla para posts.
La aplicación necesitará de un ordenador corriendo el servidor backend constantemente para funcionar, además de tener su puerto disponible al internet para poder comunicarse desde cualquier lado.

### Por añadir

- [x] Sistema de inicio de sesión
- [x] Sistema de API_KEY
- [ ] Optimizar el codigo de API en frontend para q se lea mejor
- [ ] Componente post
- [ ] Poder recibir posts al entrar a la app
- [ ] Poder subir posts
- [ ] Poder elegir a quien subir posts
- [ ] Poder elegir entrar a grupos de recibimiento de posts
- [ ] Diseño de pestaña de decanatos
- [ ] Diseño de pestaña de novedades
- [ ] Diseño de pestaña de eventos
- [ ] Funcionalidad de pestaña de decanatos
- [ ] Funcionalidad de pestaña de decanatos
- [ ] Funcionalidad de pestaña de decanatos

##### OPCIONAL O NO SEGURO DE AÑADIR
- [ ] Pestaña de editar datos de usuario
- [ ] Customizar color de posts
- [ ] Añadir emojis reacción
- [ ] Pestaña de lector de vigías

### Cómo funciona

#### FRONTEND

##### Herramientas de desarrollo
Se esta desarrollando con EXPO, una plataforma que tiene utilidades para desarrollar en react-native.
React native es un framework para desarrollar aplicaciones nativas que se podrán desplegar en ios y en android.
##### Como funciona el login
Nada mas entrar a la aplicación, se entra 


#### BACKEND

servidor NODE.JS con EXPRESS con base de datos sqLite

guardar datos como las credenciales con expo-secure-store

### Notas

1. Tablas Principales Simplificadas
1.1 Usuarios (users)

Esta tabla almacenará la información básica de los usuarios.

    user_id (Primary Key, auto-increment): ID único del usuario.
    username (Unique): Nombre de usuario.
    email (Unique): Correo electrónico.
    password_hash: Hash de la contraseña.
    created_at: Fecha de creación del usuario.

1.2 Posts (posts)

Tabla que almacenará los posts publicados.

    post_id (Primary Key, auto-increment): ID único del post.
    user_id (Foreign Key): ID del usuario que creó el post.
    content: Contenido del post.
    has_vote: Booleano indicando si el post tiene votación.
    created_at: Fecha de creación del post.

1.3 Votos (votes)

Tabla que registrará los votos de los usuarios en los posts.

    vote_id (Primary Key, auto-increment): ID único del voto.
    user_id (Foreign Key): ID del usuario que votó.
    post_id (Foreign Key): ID del post.
    vote: Valor del voto (booleano, "sí" o "no").
    voted_at: Fecha del voto.

1.4 Lectura de Posts (post_reads)

Tabla que registrará cuando un usuario desliza un post para marcarlo como leído.

    read_id (Primary Key, auto-increment): ID único del registro de lectura.
    user_id (Foreign Key): ID del usuario que deslizó el post.
    post_id (Foreign Key): ID del post deslizado.
    read_at: Fecha en que se deslizó el post.

2. Relaciones y Consultas

    Obtener posts no deslizados por un usuario: Consulta con LEFT JOIN entre posts y post_reads, filtrando los que no tienen coincidencia en post_reads.
    Obtener votos de un post: Filtrar la tabla votes por post_id.
    Ver si un usuario ha votado en un post: Filtrar votes por user_id y post_id.

3. Optimizaciones para 180 Usuarios

    Índices básicos: Asegúrate de tener índices en user_id en las tablas posts, votes, y post_reads para mejorar la velocidad de las consultas.
    Consultas rápidas: Dado el número limitado de usuarios y posts, las consultas deberían ser rápidas sin necesidad de optimizaciones complejas.
    Simplificación: Evita complicaciones innecesarias como particionamiento o caché para esta escala de usuarios.

4. Consideraciones Prácticas

    Manejo de Crecimiento Moderado: Si en algún momento la base de usuarios o de posts crece un poco más allá de lo esperado, este diseño sigue siendo robusto.
    Mantenimiento: La simplicidad en el diseño facilitará el mantenimiento de la base de datos y la aplicación en general.


{condition && "value"} si condition, mostramos value


REDIS: cache

Docker: Si tu portátil lo permite, puedes usar Docker para contenerizar tu aplicación. Esto facilita la gestión del entorno y el despliegue.
PM2: Es una herramienta de manejo de procesos para Node.js que puede reiniciar tu aplicación automáticamente en caso de fallos y mantenerla corriendo como un servicio.
