instituto/instituto backend
![image](https://github.com/user-attachments/assets/fb7e2aed-974d-4746-84ec-efce71cb52a4)

![image](https://github.com/user-attachments/assets/64d283c8-4bc5-4296-a3fe-b931f1fe0525)

Se desea crear un sistema para consulta de información de una institución utilizando un API.

Para esto se debe crear una base de datos con 3 tablas iniciales:

Create database instituto;
USE instituto;
-	Estudiante (Puede tomar varios cursos)
CREATE TABLE estudiante (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    correo_electronico VARCHAR(100) UNIQUE
);
-	Profesor (Puede impartir varios cursos)
CREATE TABLE profesor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    correo_electronico VARCHAR(100) UNIQUE
);
-	Cursos (Contiene varios estudiantes)
CREATE TABLE curso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);
CREATE TABLE estudiante_curso (
    estudiante_id INT,
    curso_id INT,
    PRIMARY KEY (estudiante_id, curso_id),
    FOREIGN KEY (estudiante_id) REFERENCES estudiante(id),
    FOREIGN KEY (curso_id) REFERENCES curso(id)
);

CREATE TABLE profesor_curso (
    profesor_id INT,
    curso_id INT,
    PRIMARY KEY (profesor_id, curso_id),
    FOREIGN KEY (profesor_id) REFERENCES profesor(id),
    FOREIGN KEY (curso_id) REFERENCES curso(id)
);

La información de Estudiante y profesor debe incluir teléfono y correo electrónico, agregar información que ayude a la solución del ejercicio.
Realizar 5 al menos métodos principales de consulta de información.

Crear 
Eliminar
Consultar por id
Editar
Consultar todos

Los métodos se deben poder consultar por postman, pero sí se puede realizar pantallas para consultar esta información (no obligatorio).
INICIO
Java Springboot
https://start.spring.io/
Project. Maven
Spritng boot 3.0+
Dependencias: spring web, Spiring Data JPA
mysql
hasta mañana a las 9.00
Instalación del java jdk versión 21
Cmd:  java –versión
Propiedades del sistema
Variables de entorno
JAVA_HOME (Nombre de la variable)
C:\Program Files\Java\jdk-21
Luego a la parte inferior el pat.
Maven (para la gestión de dependencias)
https://start.spring.io/
Instalación de Maven
Variables del sistema
C:\workspace\apache-maven-3.9.9-bin\apache-maven-3.9.9
En el path %MAVEN_HOME%\bin
Creacion de la base de datos:
Create database instituto;
Estructura de mi proyecto backend
instituto
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── ejemplo
│   │   │           └── instituto
│   │   │               ├── InstitutoApplication.java
│   │   │               ├── controller
│   │   │               │   ├── EstudianteController.java
│   │   │               │   ├── ProfesorController.java
│   │   │               │   └── CursoController.java
│   │   │               ├── model
│   │   │               │   ├── Estudiante.java
│   │   │               │   ├── Profesor.java
│   │   │               │   └── Curso.java
│   │   │               ├── repository
│   │   │               │   ├── EstudianteRepository.java
│   │   │               │   ├── ProfesorRepository.java
│   │   │               │   └── CursoRepository.java
│   │   │               └── service
│   │   └── resources
│   └── test
│       └── java
│           └── com
│               └── ejemplo
│                   └── instituto
│                       └── InstitutoApplicationTests.java
├── mvnw
├── mvnw.cmd
├── pom.xml
└── README.md
get es para consultas simples

post mas complejo y mas seguro traer datos y mandar datos.

Request Vocabulario:

Get: Requerir recursos.

Post: Enviando y traer recursos.

Put: Remplazar recursos.

Patch: Remendar recursos.

Delete: Eliminar recursos.
