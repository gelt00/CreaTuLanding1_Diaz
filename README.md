# NavegaLasRutas - E-commerce con React Router

Proyecto realizado como parte del **Curso de React**, correspondiente a la entrega de navegación con React Router.

Esta entrega tiene como objetivo implementar la navegación entre diferentes vistas de la aplicación utilizando React Router, creando una estructura de e-commerce con múltiples páginas y rutas dinámicas.

## 📋 Descripción

El proyecto implementa un e-commerce funcional con navegación completa, utilizando **Vite + React (JavaScript)**, **React Router** para el enrutamiento y **Bootstrap** como framework de estilos.

## 🎯 Funcionalidades Principales

- **Navegación entre páginas**: Home, Catálogo, Detalle de producto, Categorías
- **Rutas dinámicas**: Visualización de productos por ID y categoría
- **React Router DOM**: Implementación de BrowserRouter, Routes, Route, Link y NavLink
- **Barra de navegación interactiva**: Enlaces activos con estilos dinámicos
- **Componente de detalle**: Vista individual de cada producto
- **Filtrado por categorías**: Navegación entre diferentes categorías de productos

## 📁 Estructura del Proyecto

```
NavegaLasRutas_Diaz/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── CartWidget.jsx
│   │   ├── ItemCard.jsx
│   │   ├── ItemCount.jsx
│   │   └── ItemDetail.jsx
│   │   └── ItemList.jsx
│   │   └── NavBar.jsx
│   │   └── NotFound.jsx
│   ├── containers/
│   │    ├── ItemDetailContainer.jsx
│   │    └── ItemListContainer.jsx
│   ├── context/
│   │    └── CartContext.jsx
│   ├── data/
│   │    └── products.js
│   ├── imgs/
│   │    └── imagenes
│   └── services/
│   │    └── api.js
│   └── pages/
│        └── CardPage.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **React Router DOM** - Librería para manejar el enrutamiento en React
- **Vite** - Herramienta de desarrollo rápida y moderna
- **Bootstrap 5** - Framework CSS para diseño responsivo
- **JavaScript (ES6+)** - Lenguaje de programación

## ✨ Características Técnicas

- Componentes funcionales con React Hooks
- Rutas estáticas y dinámicas
- Parámetros de URL (`useParams`)
- Navegación programática (`useNavigate`)
- NavLink con clases activas
- Props para comunicación entre componentes
- StrictMode para validar buenas prácticas

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio:**

```bash
git clone https://github.com/gelt00/NavegaLasRutas_Diaz.git
cd NavegaLasRutas_Diaz
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Inicia el servidor de desarrollo:**

```bash
npm run dev
```

4. **Abre tu navegador en:**

```
http://localhost:5173
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la versión de producción
- `npm run preview` - Previsualiza la build de producción

## 🌐 Rutas Implementadas

| Ruta                    | Componente          | Descripción                       |
| ----------------------- | ------------------- | --------------------------------- |
| `/`                     | Home                | Página principal                  |
| `/category/:categoryId` | ItemListContainer   | Lista de productos por categoría  |
| `/item/:itemId`         | ItemDetailContainer | Detalle de un producto específico |

## 🔥 Firestore (Firebase)

Colecciones utilizadas:

- `products`: catálogo de productos.
- `orders`: órdenes generadas desde el checkout.

Cada orden almacena:

- Datos del comprador (`buyer`)
- Detalle de items (`items`)
- Total (`total`)
- Fecha de creación (`createdAt`)

## 👨‍💻 Autor

**Díaz**

- GitHub: [@gelt00](https://github.com/gelt00)

## 📄 Licencia

Este proyecto fue creado con fines educativos como parte del Curso de React.

---

⭐ Si te fue útil este proyecto, ¡no olvides darle una estrella en GitHub!
