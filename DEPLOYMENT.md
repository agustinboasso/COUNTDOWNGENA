# 🚀 Guía de Deployment en Vercel

Esta guía te ayudará a desplegar la página de cumpleaños de Genaro en Vercel de forma rápida y sencilla.

## Prerequisitos

- Una cuenta en [GitHub](https://github.com) (gratuita)
- Una cuenta en [Vercel](https://vercel.com) (gratuita)

## 📦 Paso 1: Preparar el repositorio en GitHub

### 1.1 Inicializar Git (si aún no lo has hecho)

```bash
git init
git add .
git commit -m "🎂 Página de cumpleaños de Genaro con countdown LEGO"
```

### 1.2 Crear un repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombra tu repositorio (por ejemplo: `genaro-birthday-countdown`)
3. Déjalo como público o privado (ambos funcionan con Vercel gratuito)
4. NO inicialices con README (ya tienes uno)
5. Haz clic en "Create repository"

### 1.3 Subir tu código a GitHub

Copia los comandos que GitHub te muestra y ejecútalos:

```bash
git remote add origin https://github.com/TU_USUARIO/genaro-birthday-countdown.git
git branch -M main
git push -u origin main
```

## 🌐 Paso 2: Desplegar en Vercel

### Opción A: Desde la interfaz web (Recomendado - Más fácil)

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign Up" o "Login"
3. Conecta tu cuenta de GitHub
4. Haz clic en "Add New..." → "Project"
5. Busca tu repositorio `genaro-birthday-countdown`
6. Haz clic en "Import"
7. Vercel detectará automáticamente que es un proyecto Vite
8. **¡No cambies nada!** Vercel ya tiene la configuración correcta
9. Haz clic en "Deploy"
10. ¡Espera 1-2 minutos y listo! 🎉

### Opción B: Desde la línea de comandos

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login en Vercel
vercel login

# Desplegar
vercel

# Seguir las instrucciones en pantalla
# Cuando pregunte "Link to existing project?" → No
# Cuando pregunte por el nombre → Presiona Enter o escribe un nombre
# Cuando pregunte por la configuración → Presiona Enter en todo

# Para desplegar a producción
vercel --prod
```

## 🎯 Paso 3: Obtener tu URL

Una vez desplegado, Vercel te dará una URL como:

```
https://genaro-birthday-countdown.vercel.app
```

¡Comparte esta URL con Genaro para que vea el countdown!

## 🔄 Actualizaciones Automáticas

La mejor parte: **¡Cada vez que hagas un push a GitHub, Vercel automáticamente actualizará el sitio!**

```bash
# Hacer cambios en tu código
git add .
git commit -m "Actualización del diseño"
git push

# ¡Vercel desplegará automáticamente! 🚀
```

## 🎨 Personalización del Dominio (Opcional)

Si tienes un dominio propio, puedes conectarlo:

1. Ve a tu proyecto en Vercel Dashboard
2. Haz clic en "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para actualizar los DNS

## ⚡ Comandos Útiles

```bash
# Ver el estado del deployment
vercel ls

# Ver logs del proyecto
vercel logs

# Abrir el dashboard del proyecto
vercel dashboard
```

## 🐛 Solución de Problemas

### El sitio no carga correctamente

1. Verifica que el build se completó exitosamente en el dashboard de Vercel
2. Revisa los logs en la sección "Deployments" → Click en tu deployment → "View Build Logs"

### Los cambios no se reflejan

1. Asegúrate de haber hecho push a GitHub: `git push`
2. Espera 1-2 minutos para que Vercel complete el deployment
3. Limpia el cache del navegador (Ctrl + Shift + R o Cmd + Shift + R)

### Error de Node.js version

Si ves un error sobre la versión de Node.js:

1. Ve a Vercel Dashboard → Tu proyecto → Settings → General
2. Busca "Node.js Version"
3. Selecciona "20.x" o "22.x"
4. Guarda y redeploy

## 📱 Compartir el Link

Una vez desplegado, puedes:

- Copiar la URL y enviarla por WhatsApp
- Crear un código QR para la URL
- Compartirla en redes sociales
- ¡Hacer que Genaro la guarde en favoritos! 📌

## 💡 Tips

- El sitio es completamente responsive (funciona en móvil, tablet y desktop)
- Se puede agregar a la pantalla de inicio en móviles como una "app"
- Funciona offline después de la primera visita (gracias a Vite)
- Es completamente gratuito en Vercel

## 🎉 ¡Listo!

Ahora Genaro podrá ver su countdown cada día hasta su cumpleaños. ¡Y cuando llegue el 20 de diciembre, verá una celebración increíble! 🎂🎈🎊

---

**¿Necesitas ayuda?** Vercel tiene soporte en vivo y una comunidad muy activa.

