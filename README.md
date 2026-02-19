# 🎂 Cumpleaños Familiares 🎉

Una hermosa página de countdown con estética LEGO para toda la familia. Muestra el próximo cumpleaños destacado y todos los demás cumpleaños en tarjetas interactivas.

## 🎨 Características

- 👨‍👩‍👧‍👦 **Sistema Familiar** - Gestiona los cumpleaños de toda la familia (Mamá, Papá, Bruno, Gena)
- 🎯 **Próximo Cumpleaños Destacado** - El cumpleaños más cercano se muestra en grande con badge dorado
- 🎴 **Tarjetas Interactivas** - Los otros cumpleaños aparecen en tarjetas LEGO 3D con hover effects
- 🔢 **Edades Automáticas** - Calcula automáticamente la edad basándose en el año de nacimiento
- ⏰ **Countdown en tiempo real** - Muestra días, horas, minutos y segundos hasta el próximo cumpleaños
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

Para personalizar los miembros de tu familia, edita el array `familyMembers` en `src/App.jsx`:

```javascript
const familyMembers = [
  { name: 'Mamá', date: '10-30', emoji: '👩', color: 'red', birthYear: 1988 },
  { name: 'Papá', date: '07-13', emoji: '👨', color: 'blue', birthYear: 1988 },
  { name: 'Bruno', date: '08-15', emoji: '👦', color: 'yellow', birthYear: 2012 },
  { name: 'Gena', date: '12-20', emoji: '🎂', color: 'green', birthYear: 2016 }
];
```

**Parámetros:**
- `name`: Nombre de la persona
- `date`: Fecha del cumpleaños en formato `'MM-DD'`
- `emoji`: Emoji representativo
- `color`: Color del bloque LEGO (`'red'`, `'yellow'`, `'blue'`, `'green'`)
- `birthYear`: Año de nacimiento (las edades se calculan automáticamente)

## 🎉 Características Especiales

- **Responsive** - Se adapta a móviles, tablets y desktop
- **Animaciones suaves** - Transiciones y efectos visuales
- **Interactivo** - Los bloques LEGO responden al hover
- **Celebración automática** - Se activa automáticamente cuando llega el día

## ❤️ Hecho con amor para toda la familia

¡Celebremos juntos cada cumpleaños! 🎈🎁🎊

### Sistema de Edades Automático 🔢

Las edades se calculan automáticamente según el año actual y el año de nacimiento:
- **Mamá**: 36 años (cumple 37 en octubre)
- **Papá**: 36 años (cumple 37 en julio)
- **Bruno**: 12 años (cumple 13 en agosto)
- **Gena**: 8 años (cumple 9 en diciembre)

El sistema siempre mostrará la edad correcta que cada persona cumplirá en su próximo cumpleaños.
