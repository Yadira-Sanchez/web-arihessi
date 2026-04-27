# Sistema de Temas Dinámico (Theme Dynamics Page)

## Descripción General
La página `ThemeDynamicsPage` es una demostración completa e interactiva de un sistema de temas Dark/Light Mode usando React y Tailwind CSS. Implementa todos los requerimientos técnicos solicitados.

## Ubicación
- Archivo: `src/pages/ThemeDynamicsPage.jsx`
- Acceso: Click en "System" en el navbar o navegación a `#theme-dynamics`
- Enrutamiento: Automático en App.jsx

## Requerimientos Implementados

### 1. Estructura Raíz
```jsx
<div className="bg-white text-slate-900 transition-colors duration-500 
               dark:bg-slate-950 dark:text-white min-h-screen">
```
- **Modo Claro**: `bg-white` + `text-slate-900`
- **Modo Oscuro**: `dark:bg-slate-950` + `dark:text-white`
- **Transición**: `transition-colors duration-500` para cambios suaves
- **Resultado**: La página completa cambia de color al togglear el tema

### 2. Tipografía Inteligente
Todos los encabezados y párrafos usan colores condicionales:

```jsx
// Encabezados
<h1 className="text-slate-800 dark:text-slate-100">Encabezado</h1>

// Párrafos secundarios
<p className="text-slate-600 dark:text-slate-400">Texto secundario</p>

// Textos pequeños
<p className="text-slate-500 dark:text-slate-500">Muy pequeño</p>
```

### 3. Botón de Toggle Funcional
Ubicado en la esquina superior derecha (flotante):

```jsx
const toggleTheme = () => {
  const htmlElement = document.documentElement;
  const newTheme = isDark ? 'light' : 'dark';
  
  htmlElement.classList.remove('light', 'dark');
  htmlElement.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
  setIsDark(!isDark);
};
```

**Características**:
- Ejecuta función al hacer click
- Añade/elimina clase `'dark'` del `document.documentElement`
- Persiste preferencia en localStorage
- Cambia icono (Sol/Luna) según estado
- Animación con Framer Motion (`whileHover`, `whileTap`)

### 4. Secciones de Muestra

#### Hero Section
- Fondo degradado: `from-slate-50 to-slate-100` → `dark:from-slate-900 dark:to-slate-950`
- Elementos decorativos con efecto blur
- Botón secundario de toggle

#### Sección de Tarjetas
Tres tarjetas que demuestran cambios dinámicos:

**Tarjeta 1:**
- Fondo: `bg-slate-100` → `dark:bg-slate-900`
- Sombra: `shadow-lg dark:shadow-2xl dark:shadow-ari-rose/20` (resplandor en oscuro)

**Tarjeta 2:**
- Fondo: `bg-slate-100` → `dark:bg-slate-900`
- Sombra: `dark:shadow-ari-lavender/20` (resplandor lavanda)

**Tarjeta 3:**
- Fondo: `bg-slate-100` → `dark:bg-slate-900`
- Sombra: `dark:shadow-ari-mint/20` (resplandor mint)

### 5. Bordes y Sombras

#### Modo Claro
```jsx
className="shadow-xl border border-slate-200"
```
- Sombras suaves naturales con `shadow-xl`
- Bordes claros con `border-slate-200`

#### Modo Oscuro
```jsx
className="dark:shadow-2xl dark:shadow-ari-rose/30 dark:border-ari-rose/30"
```
- Resplandores elegantes con `dark:shadow-ari-rose/30`
- Bordes coloreados con `dark:border-ari-rose/30`
- Efecto de "glow" sutil pero sofisticado

## Secciones de la Página

### 1. Hero Section
- Fondo adaptativo con elementos decorativos
- Título con gradiente
- Botón de toggle prominente
- Enlace a scroll suave

### 2. Tipografía Inteligente
Ejemplos de:
- Encabezados principales
- Texto secundario
- Jerarquía visual

### 3. Tarjetas Dinámicas
Tres tarjetas interactivas que muestran:
- Cambios de color de fondo
- Transiciones suaves
- Efectos hover con Framer Motion
- Sombras y resplandores adaptativos

### 4. Bordes y Resplandores
Demostración lado a lado de:
- Sombras suaves (modo claro)
- Resplandores de acento (modo oscuro)
- Bordes adaptativos

### 5. Código
Bloque de código que muestra la estructura técnica:
- Estructura raíz
- Tipografía adaptativa
- Tarjetas dinámicas
- Función de toggle

### 6. Características
Listado de 6 características implementadas:
1. Estructura Raíz
2. Tipografía Adaptativa
3. Toggle Funcional
4. Tarjetas Dinámicas
5. Sombras Inteligentes
6. Transiciones 500ms

### 7. Footer CTA
Llamada a acción final con botón para cambiar tema

## Colores Utilizados

### Modo Oscuro (html.dark)
- Fondo principal: `#020617` (bg-slate-950)
- Texto principal: `#f8fafc` (text-slate-100)
- Texto secundario: `#94a3b8` (text-slate-400)
- Acentos: `ari-rose`, `ari-lavender`, `ari-mint`

### Modo Claro (html.light)
- Fondo principal: `#ffffff` (bg-white)
- Texto principal: `#0f172a` (text-slate-900)
- Texto secundario: `#475569` (text-slate-600)
- Acentos: Mismos colores pero con transiciones suaves

## Transiciones

Todas las transiciones usan `duration-500` para:
- Cambios de color de fondo
- Cambios de color de texto
- Cambios de sombras
- Animaciones de hover/tap

Resulta en un cambio visual suave y profesional sin parpadeos.

## Uso de Framer Motion

Elementos animados:
- Botones: `whileHover` y `whileTap`
- Tarjetas: `whileHover` para efecto de elevación
- Secciones: `initial` → `animate` para entrada suave

## Enrutamiento

El App.jsx detecta automáticamente cuando acceder a esta página:

```jsx
const isThemeDynamics = window.location.pathname === '/theme-dynamics' 
                     || window.location.hash === '#theme-dynamics';

if (isThemeDynamics) {
  return <ThemeDynamicsPage />;
}
```

## Cómo Acceder

1. **Desde navbar**: Click en "System"
2. **URL directa**: Navega a `/#theme-dynamics`
3. **Programáticamente**: `window.location.hash = '#theme-dynamics'`

## Persistencia

El tema se guarda en localStorage:
```jsx
localStorage.setItem('theme', newTheme);
```

La preferencia se carga automáticamente al recargar la página.

## Requerimientos Técnicos - Checklist

✅ Estructura raíz con clases completas
✅ Tipografía inteligente con colores condicionales
✅ Botón toggle que maneja clases
✅ Sección Hero con cambios visuales
✅ Sección de tarjetas con fondos dinámicos
✅ Bordes adaptativos
✅ Sombras suaves en claro / resplandores en oscuro
✅ Transiciones 500ms en todos los elementos
✅ Integración con localStorage
✅ Animaciones con Framer Motion
