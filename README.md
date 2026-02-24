# LVL Consulting - Prueba Técnica Frontend

LVL CONSULTING - Evaluación - Perfil Dev Frontend

##Tecnologías Utilizadas

El proyecto construido utilizando un stack moderno y escalable:

*   **Core:** React 18 + TypeScript + Vite.
*   **Estilos:** Tailwind CSS (Diseño responsive y fiel al maquetado).
*   **Navegación:** React Router DOM v6.
*   **Gráficos:** Chart.js y React-chartjs-2.
*   **Iconos:** Lucide React.
*   **Imágenes:**
    *   *Visualización:* Picsum Photos API (Para datos dummy en tablas).
    *   *Carga (Upload):* Cloudinary API (Para subida real de archivos).

##  Funcionalidades Destacadas

1.  **Dashboard Interactivo:**
    *   Gráficos de ventas y estadísticas visuales.
    *   Tarjetas de resumen con indicadores de crecimiento.
2.  **Gestión de Tablas (Data Dummy):**
    *   Consumo de datos desde archivos JSON locales.
    *   Integración con **Picsum API** para generar avatares dinámicos en cada fila.
3.  **Carga de Imágenes Real (Cloudinary):**
    *   En la sección *Administrador*, se implementó un sistema de **Drag & Drop**.
    *   Las imágenes se suben realmente a la nube usando la API de Cloudinary.
    *   Generación de vista previa y enlace de verificación post-subida.
4.  **Experiencia de Usuario (UX):**
    *   **Sidebar Colapsable:** Menú lateral dinámico que optimiza el espacio.
    *   **Navegación Anidada:** Menú "Páginas Web" con acceso directo y submenú.
    *   **Modales:** Formulario de contacto emergente con switches interactivos.
5.  **Autenticación (Simulada):**
    *   Pantallas de Login y Registro maquetadas.
    *   Flujo de redirección inicial.

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Frnk24/lvl-consulting-test.git
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador:**
    Ingresa a `http://localhost:5173/`

## Estructura del Proyecto

```text
src/
├── components/      # Componentes reutilizables (Sidebar, Navbar, Modales, Gráficos)
├── data/            # Archivos JSON con datos de prueba (Dummy Data)
├── pages/           # Vistas principales (Dashboard, Login, Tablas, Formularios)
├── service/          # Apis para Picsum y Cloudinary 
├── App.tsx          # Configuración principal de navegación
└── main.tsx         # Punto de entrada
