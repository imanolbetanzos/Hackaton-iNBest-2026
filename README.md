# TapaTrip

TapaTrip es un prototipo web desarrollado para un hackathon enfocado en el Mundial FIFA 2026, con Guadalajara, Jalisco, como una de las sedes principales. La solución busca mejorar la experiencia del aficionado fuera del estadio a través de una plataforma digital centrada en movilidad, experiencias culturales y convivencia social.

## Descripción del proyecto

Durante el Mundial 2026, miles de aficionados nacionales e internacionales llegarán a Guadalajara enfrentándose a varios retos: cómo trasladarse, qué actividades realizar en la ciudad y dónde convivir con otros fans antes o después de un partido.

TapaTrip propone una solución digital que reúne en un solo lugar:

- Ride Sharing
- Cultural Experience
- Partying / Social Events

La aplicación muestra un mapa interactivo del área de Jalisco y Guadalajara, donde el usuario puede identificar zonas con alta concurrencia de actividades mediante hotspots o burbujas visuales. Esto permite descubrir rápidamente dónde hay más movimiento, eventos o trayectos disponibles.

## Problema que resuelve

Actualmente, la experiencia del visitante está fragmentada entre múltiples plataformas: transporte, mapas, recomendaciones, eventos y redes sociales. Esto genera fricción, desinformación y una experiencia poco integrada.

TapaTrip resuelve ese problema al centralizar en una sola interfaz:

- movilidad compartida hacia zonas clave
- descubrimiento de actividades culturales
- acceso a espacios de convivencia y celebración

## Propuesta de valor

Ruta Tapatía convierte el fan journey fuera del estadio en una experiencia más simple, visual y conectada.

La plataforma permite que el usuario:

- encuentre zonas activas en tiempo real
- identifique rides cercanos
- descubra experiencias locales auténticas
- acceda a eventos sociales para convivir con otros aficionados

## Funcionalidades principales del prototipo

- mapa interactivo centrado en Guadalajara y Jalisco
- hotspots para mostrar zonas con mayor actividad
- filtros visuales por tipo de experiencia
- tarjetas de Ride Sharing
- tarjetas de Cultural Experience
- tarjetas de Partying
- navegación inferior centrada
- botón de acceso externo a Sectur Jalisco
- diseño responsive para visualización web y móvil

## Arquitectura tecnológica

El proyecto está pensado para ejecutarse sobre AWS con una arquitectura moderna, escalable y orientada a servicios.

### Frontend
- React
- Vite
- CSS personalizado

### Mapa
- Amazon Location Service
- MapLibre GL JS

### Hosting
- AWS Amplify

### Servicios AWS considerados para evolución del MVP
- Amazon Cognito para autenticación
- AWS AppSync para APIs
- DynamoDB para almacenamiento de eventos, rides y usuarios
- Amazon S3 para imágenes o contenido multimedia

## Estructura del proyecto

```bash
src/
  components/
    RealMap.jsx
  App.jsx
  index.css
public/
README.md
package.json
amplify.yml