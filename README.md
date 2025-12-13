# 🎂 Cumpleaños de Genaro - ¡8 Años! 🎉

Una hermosa página de countdown con estética LEGO para el cumpleaños número 8 de Genaro el 20 de diciembre de 2025.

## 🎨 Características

- ⏰ **Countdown en tiempo real** - Muestra días, horas, minutos y segundos hasta el cumpleaños
- 🧱 **DISEÑO LEGO LIMPIO Y MODERNO** - Bloques simples con identidad LEGO:
  - 🎨 **Fondo con patrón LEGO** - Bloques dispersos animados en el fondo
  - 🧱 **Bloques simples 3D** - Sin studs, enfoque en el countdown
  - 💎 **Sombras profundas** - Efecto 3D realista
  - ✨ **Plástico brillante** - Gradientes que simulan superficie LEGO
  - 🎨 **Colores vibrantes** - Rojo, amarillo, azul, verde LEGO
  - 💡 **Iluminación consistente** - Highlight y sombras realistas
  - 🎯 **Hover suave** - Levantan elegantemente
  - 📐 **Diseño limpio** - Fácil de leer y usar
  - ⚡ **Performance optimizado** - 25% menos CSS
  - 🌊 **Animación de fondo** - Patrón LEGO en movimiento
- 🎊 **Celebración Épica** - Cuando llega el día del cumpleaños:
  - 🎆 Confetti explosivo desde múltiples direcciones
  - 🎇 Fuegos artificiales continuos
  - 🌈 Fondo con efecto hue-rotate (confeti de colores)
  - 🎉 Decoraciones gigantes giratorias
  - 🔴 Botón con efecto de brillo deslizante
  - 🧱 Mensajes en bloques LEGO con wiggle
  - ✨ Título con gradiente arcoíris animado

## 🚀 Despliegue en Vercel

### Opción 1: Desde la interfaz web de Vercel

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Haz clic en "Add New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente que es un proyecto Vite
6. Haz clic en "Deploy"

### Opción 2: Desde la línea de comandos

```bash
# Instala Vercel CLI globalmente
npm install -g vercel

# Despliega el proyecto
vercel

# Para producción
vercel --prod
```

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework de JavaScript
- **Vite 7** - Build tool ultra rápido
- **Canvas Confetti** - Efectos de confetti y celebración profesionales
- **CSS3 Avanzado** - Animaciones complejas, gradientes, sombras multicapa, transforms 3D
- **SVG Inline** - Bloques LEGO decorativos sin HTTP requests
- **Google Fonts** - Righteous (idéntica a LEGO oficial), Fredoka, Lilita One

## 📱 Viewport y Responsive

El sitio está **completamente optimizado** para todos los dispositivos:

### Dispositivos Soportados
- 📱 **Móviles:** 320px - 599px (iPhone SE, Pixel, Galaxy S, etc.)
- 📱 **Tablets:** 600px - 1023px (iPad, Galaxy Tab, etc.)
- 💻 **Desktop:** 1024px+ (Laptops, monitores, 4K)
- 🔄 **Landscape Mode:** Optimizado para orientación horizontal

### PWA Ready
- Puede instalarse como app en el home screen
- Meta tags optimizados para iOS y Android
- Compatible con notch/isla dinámica
- Viewport adaptable hasta zoom 5x (accesibilidad)

**Ver más detalles:** Consulta `VIEWPORT_GUIDE.md` para información completa.

---

## 📝 Personalización

Si quieres cambiar la fecha del cumpleaños, edita el archivo `src/App.jsx` en la línea donde se define `birthdayDate`:

```javascript
const birthdayDate = new Date('2025-12-20T00:00:00');
```

## 🎉 Características Especiales

- **Responsive** - Se adapta a móviles, tablets y desktop
- **Animaciones suaves** - Transiciones y efectos visuales
- **Interactivo** - Los bloques LEGO responden al hover
- **Celebración automática** - Se activa automáticamente cuando llega el día

## ❤️ Hecho con amor para Genaro

¡Que tengas un cumpleaños increíble! 🎈🎁🎊
