---
title: "Tourment"
slug: "tourment"
locale: "es"
accentColor: "#E5394B"
tagline: "Plataforma full-stack para organizar torneos amateur de VALORANT en España: inscripciones, brackets de eliminación directa, estadísticas de jugador y panel de administración."
role: "Desarrollo fullstack · TFG"
year: 2025
stack: ["React", "Vite", "Python · Flask", "MySQL", "JWT", "Docker"]
demoUrl: "https://tourment.vercel.app"
repoUrl: "https://github.com/AlvaroMP01/Tourment"
cover: "../../assets/projects/tourment/cover.png"
screenshots:
  - "../../assets/projects/tourment/bracket.png"
  - "../../assets/projects/tourment/tournament-detail.png"
  - "../../assets/projects/tourment/players-ranking.png"
  - "../../assets/projects/tourment/teams-ranking.png"
  - "../../assets/projects/tourment/admin-panel.png"
  - "../../assets/projects/tourment/news.png"
featured: true
order: 1
---

## Contexto

La escena amateur de VALORANT en España organiza sus torneos a base de Discord
y hojas de cálculo: inscripciones desperdigadas, brackets a mano y estadísticas
que se pierden entre partida y partida. Tourment centraliza todo eso en una
sola herramienta: registro de equipos (plantillas de hasta 7 jugadores), un
flujo de aprobación por parte del organizador, brackets de eliminación
directa, reporte de partidas con estadísticas por jugador, rankings públicos
de jugadores y equipos, un calendario de eventos y noticias del ecosistema
importadas del feed RSS de VLR.gg, todo ello sobre un panel de administración
con roles separados.

Es mi Trabajo de Fin de Grado, construido de punta a punta: modelo de datos,
API en Flask, frontend en React y la lógica de emparejamiento de los brackets.

## Decisiones técnicas

El diferenciador real del proyecto no es la interfaz, sino las decisiones de
backend que la sostienen.

- **Contraseñas con PBKDF2.** Se almacenan con `pbkdf2_sha256` (Werkzeug), nunca
  en texto claro.
- **JWT de vida corta.** Expiran a las 12 horas y se firman con un secreto de
  más de 32 caracteres; la aplicación se niega a arrancar si ese secreto no
  está configurado.
- **Login protegido contra fuerza bruta y enumeración.** Limitado a 5
  intentos por minuto y 20 por hora por IP, y devuelve el mismo coste y el
  mismo mensaje de error tanto si el usuario existe como si no, para no dar
  pistas sobre qué cuentas son reales.
- **CORS restrictivo.** Lista blanca de orígenes definida por variables de
  entorno, no "cualquier origen".
- **Algoritmo de bracket de eliminación directa** para tamaños estrictos de
  4, 8 o 16 equipos: el ganador avanza automáticamente al hueco
  correspondiente de la siguiente ronda. Una vez generado, el árbol no se
  edita a mano — cualquier cambio lo regenera entero, así el bracket nunca
  queda en un estado inconsistente.
- **Imágenes procesadas en memoria con Pillow**: se valida el tipo
  (JPEG/PNG/WEBP), se redimensionan a 256×256 y se recomprimen por debajo de
  500 KB antes de guardarlas internamente, sin URLs externas. Si el commit a
  base de datos falla, el archivo recién subido se borra para no dejar
  huérfanos.
- **Blueprints de Flask por dominio** con decoradores encadenados
  (`@token_required` seguido de `@role_required` o `@admin_required`), de
  forma que la autorización no se repite en cada endpoint.

## Proceso y aprendizajes

La parte difícil no fue la interfaz, sino los casos límite del bracket
(avances impares, coherencia del árbol): esa lógica se escribió antes que la
interfaz, no después. La capa de seguridad se diseñó haciéndome una pregunta
muy concreta — "¿qué pasa si se filtra la base de datos?" — y la respuesta fue
un hash robusto con salt por usuario, de forma que un volcado de la tabla no
es, por sí solo, una contraseña.
