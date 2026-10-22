# FESTIVAL CONTROL · React Native + Expo Web + Amplify Gen 2

Aplicación de operaciones de festival con AWS Amplify Gen 2 y DynamoDB. Mantiene la identidad visual del cuaderno 04-PILARES-SERVERLESS: fondo `#090909`, cards `#151515`, acento `#FF2F92`, confirmado `#39D98A` y retrasado `#F5C542`.

## Inicio rápido

```bash
npm install
npx expo install --fix
npm run web
```

## Backend Amplify Gen 2

El modelo `Event` está definido en [amplify/data/resource.ts](./amplify/data/resource.ts) con `ClientSchema`. Amplify crea la API GraphQL y la tabla DynamoDB a partir de ese esquema.

Para crear un entorno sandbox y generar `amplify_outputs.json`:

```bash
npm run sandbox
```

El sandbox necesita credenciales AWS configuradas. Para un despliegue desde CI/CD:

```bash
npm run deploy
```

La aplicación usa el cliente `aws-amplify/data` para listar, crear, editar, cambiar el estado y eliminar eventos. El backend está configurado con API key pública únicamente para esta demo; en producción debe sustituirse por autenticación con Cognito.

## Exportación para AWS Amplify Hosting

```bash
npm run build:web
```

El resultado estático se genera en `dist/`. En Amplify: conectar GitHub, rama `main`, usar `amplify.yml` y publicar `dist/`. El backend debe desplegarse previamente con `npm run sandbox` o desde el pipeline.

## Prueba de alumno

1. Abrir **Eventos** y filtrar por escenario o artista.
2. Crear `TECHNO TITANS`, escenario `MAIN STAGE`, hora `21:45` y estado `CONFIRMED`.
3. Editar el evento y cambiar la hora a `23:00`.
4. Cambiar el estado a `DELAYED`.
5. Eliminar el evento.

Los datos se guardan en DynamoDB y permanecen después de recargar la página. `amplify_outputs.json` se genera o actualiza al ejecutar el sandbox; el archivo incluido en el repositorio es una configuración inicial vacía para que TypeScript pueda compilar antes del primer despliegue.

## Referencia docente

https://github.com/albertohdezakkari/04-PILARES-SERVERLESS
