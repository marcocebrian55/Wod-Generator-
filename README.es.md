# WOD-GENERATOR - Full Stack Web Application

[![Stack](https://img.shields.io/badge/Stack-Full%20Stack-blue)](#)
[![Tech](https://img.shields.io/badge/React-2023-%2361DAFB?logo=react)](#)
[![Tech](https://img.shields.io/badge/Python-Flask-%233776AB?logo=python)](#)

## 🚀 Descripción del Proyecto
## 🚀 Descripción del Proyecto
WOD-GENERATOR es una plataforma diseñada para democratizar el entrenamiento de alta intensidad (**CrossFit y Hyrox**). La aplicación permite a los usuarios generar rutinas de entrenamiento personalizadas de forma automática, eliminando la dependencia de un entrenador personal y adaptándose a cualquier horario o equipamiento disponible.

**¿Por qué este proyecto?** Buscábamos resolver la falta de autonomía del atleta medio, permitiéndole entrenar con rigor técnico y variedad de ejercicios desde cualquier lugar.

---

## 🛠️ Stack Tecnológico

### Frontend:
* **React.js**: Construcción de interfaces basadas en componentes reutilizables.
* **Context API**: Gestión de estado global de la aplicación siguiendo el patrón Flux.
* **Bootstrap**: Maquetación responsive y diseño adaptativo.

### Backend:
* **Python & Flask**: API REST robusta para el manejo de lógica de negocio.
* **SQLAlchemy & PostgreSQL**: Modelado de datos relacional y persistencia.
* **JWT (JSON Web Tokens)**: Implementación de autenticación y autorización segura.

---

## 🌟 Funcionalidades Clave
* **Sistema de Autenticación**: Registro de usuarios, inicio de sesión y protección de rutas privadas mediante tokens.
* **Gestión de Datos (CRUD)**: Creación, lectura, actualización y borrado de registros directamente en la base de datos.
* **Dashboard Dinámico**: Visualización de datos en tiempo real consumiendo nuestra propia API interna.
* **Responsive Design**: Optimizado para una experiencia fluida tanto en móviles como en escritorio.

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para desplegar el entorno de desarrollo localmente:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/marcocebrian55/PROYECTO_GRUPO_4](https://github.com/marcocebrian55/PROYECTO_GRUPO_4)
cd PROYECTO_GRUPO_4
1. Instala los paquetes de python: `$ pipenv install`
2. Crea un archivo .env basado en el .env.example: `$ cp .env.example .env`
3. Instala tu motor de base de datos y crea tu base de datos, dependiendo de tu base de datos, debes crear una variable DATABASE_URL con uno de los valores posibles, asegúrate de reemplazar los valores con la información de tu base de datos:

| Motor     | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgres  | postgres://username:password@localhost:5432/example |

4. Migra las migraciones: `$ pipenv run migrate` (omite si no has hecho cambios en los modelos en `./src/api/models.py`)
5. Ejecuta las migraciones: `$ pipenv run upgrade`
6. Ejecuta la aplicación: `$ pipenv run start`

> Nota: Los usuarios de Codespaces pueden conectarse a psql escribiendo: `psql -h localhost -U gitpod example`

### Deshacer una migración

También puedes deshacer una migración ejecutando

```sh
$ pipenv run downgrade
```

### Población de la tabla de usuarios en el backend

Para insertar usuarios de prueba en la base de datos, ejecuta el siguiente comando:

```sh
$ flask insert-test-users 5
```

Y verás el siguiente mensaje:

```
    Creating test users
    test_user1@test.com created.
    test_user2@test.com created.
    test_user3@test.com created.
    test_user4@test.com created.
    test_user5@test.com created.
    Users created successfully!
```

### **Nota importante para la base de datos y los datos dentro de ella**

Cada entorno de Github Codespace tendrá **su propia base de datos**, por lo que si estás trabajando con más personas, cada uno tendrá una base de datos diferente y diferentes registros dentro de ella. Estos datos **se perderán**, así que no pases demasiado tiempo creando registros manualmente para pruebas, en su lugar, puedes automatizar la adición de registros a tu base de datos editando el archivo ```commands.py``` dentro de la carpeta ```/src/api```. Edita la línea 32 de la función ```insert_test_data``` para insertar los datos según tu modelo (usa la función ```insert_test_users``` anterior como ejemplo). Luego, todo lo que necesitas hacer es ejecutar ```pipenv run insert-test-data```.

### Instalación manual del Front-End:

-   Asegúrate de estar usando la versión 20 de node y de que ya hayas instalado y ejecutado correctamente el backend.

1. Instala los paquetes: `$ npm install`
2. ¡Empieza a codificar! inicia el servidor de desarrollo de webpack `$ npm run start`


