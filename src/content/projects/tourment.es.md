---
title: "Tourment"
slug: "tourment"
locale: "es"
accentColor: "#E5394B"
tagline: "Plataforma para organizar y seguir torneos de Valorant: brackets en vivo, inscripciones de equipos y panel de administración."
role: "Fullstack (solo)"
year: 2024
stack: ["Python", "Flask", "MySQL", "React", "JWT"]
cover: "../../assets/projects/tourment/cover.png"
screenshots:
  - "../../assets/projects/tourment/shot-1.png"
  - "../../assets/projects/tourment/shot-2.png"
  - "../../assets/projects/tourment/shot-3.png"
featured: true
order: 1
---

<!-- DRAFT: copy provisional, se finaliza en la fase 6 junto con las capturas reales. -->

## Contexto

Las comunidades de Valorant organizan torneos por Discord y hojas de cálculo:
inscripciones desordenadas, brackets a mano y resultados que se pierden. Tourment
nace para resolverlo con una sola herramienta: un organizador monta un torneo en
minutos y los equipos siguen su progreso en tiempo real.

Lo construí entero yo: diseño de la base de datos, API en Flask, frontend en
React y la lógica de emparejamiento de los brackets.

## Decisiones técnicas

El diferenciador real del proyecto no es la interfaz, sino las decisiones de
backend que la sostienen.

**Autenticación endurecida.** El acceso usa JWT con expiración corta y renovación
controlada, y las contraseñas se almacenan con **PBKDF2** (derivación de clave con
salt e iteraciones), no con un hash simple. Para un gestor de torneos con roles de
administrador, capitán de equipo y jugador, una autenticación débil habría sido el
punto de fallo más caro de todo el sistema.

**Modelo relacional en MySQL.** Torneos, equipos, jugadores y partidas son
relaciones puras con restricciones reales (un jugador no puede estar en dos
equipos del mismo torneo, una partida no puede cerrarse sin resultado). Un
esquema relacional con claves foráneas evita estados imposibles que una base
documental habría permitido sin disciplina adicional en el código.

**Flask sobre un framework más pesado.** La API no necesitaba un CMS ni
generación de vistas en servidor: necesitaba rutas claras y control total sobre
el ciclo de petición/respuesta para servir a un frontend en React.

## Proceso y aprendizajes

Generar brackets correctos con número impar de equipos y *byes* obligó a
escribir primero los casos límite y después la interfaz, no al revés. Fue la
parte del proyecto donde más se notó la diferencia entre "funciona en el caso
feliz" y "funciona siempre".

La capa de autenticación se construyó pensando en qué pasaría si se filtrara la
base de datos: con PBKDF2 y salts por usuario, un volcado de la tabla de
contraseñas no es, por sí solo, una contraseña en texto plano.
