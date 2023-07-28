# Proyecto de Cypress con Docker Compose

Este proyecto contiene casos de prueba automatizados utilizando Cypress para dos sitios web: Mercado Libre y Automation Test Store. Los casos de prueba se ejecutan en un entorno Dockerizado mediante Docker Compose para garantizar una configuración consistente y reproducible.

## Requisitos previos

Asegúrate de tener instalados los siguientes elementos antes de ejecutar este proyecto:

- Docker y Docker Compose: [Instrucciones de instalación](https://docs.docker.com/get-docker/)

## Configuración del entorno

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/PabloOrtiz07/DicsysTests
```

1. Navega al directorio del proyecto:

```bash
cd e2e
```

1. Inicia el entorno Docker mediante Docker Compose:

```bash
docker-compose up 
```
#### Este comando, generará 3 videos de los test. Y además, reportes en XML.

Esto iniciará dos contenedores Docker, uno para Mercado Libre y otro para Automation Test Store, con Cypress instalado y listo para ejecutar los casos de prueba.

## Casos de prueba

### 1. Casos de prueba para Mercado Libre

#### a. Login válido en Mercado Libre

El caso de prueba verifica que un usuario pueda iniciar sesión correctamente en Mercado Libre utilizando credenciales válidas.

#### b. Login inválido en Mercado Libre

Este caso de prueba verifica que el sistema muestre un mensaje de error cuando se intenta iniciar sesión en Mercado Libre con credenciales inválidas.

#### c. Búsqueda en Mercado Libre

Este caso de prueba asegura que el buscador de Mercado Libre funcione correctamente y devuelva resultados relevantes.

Usuario de prueba para Mercado Libre:
- **Nickname:** TEST0548
- **Password:** qatest328

### 2. Caso de prueba para Automation Test Store

#### a. Login de la página web
#### b. Suscripción a la newsletter

## Estructura del proyecto

```
DICSYSTESTS/
  ├── e2e/
  │    ├── cypress/
  │    │    ├── cypress/
  │    │    │    ├── reports/
  │    │    │    ├── videos/ - Videos test
  │    │    ├── integration/
  │    │    │    └── loginMercadoLibre.cy.js
  │    │    ├── pages/
  │    │    │    └── MercadoLibreLogin.js
  │    │    ├── reports/ - Reportes xml
  │    │    ├── support/
  │    │    │    ├── commands.js
  │    │    │    └── e2e.js
  │    ├── docker-compose.yml/
  ├── package.json
  ├── .gitignore
  └── README.md
```