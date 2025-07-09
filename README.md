# Viamind Blog - Tecnología, IA y Tiempos Modernos

Sistema de gestión y consultoría para Viamind Consulting. Un blog moderno y profesional que explora las últimas tendencias en tecnología, inteligencia artificial y los desafíos de los tiempos modernos.

## 🚀 Características

- **Landing Page Profesional**: Diseño moderno y elegante con animaciones suaves
- **Tema Oscuro**: Interfaz moderna con gradientes y efectos visuales
- **Responsive Design**: Optimizado para todos los dispositivos
- **Animaciones Interactivas**: Elementos flotantes y transiciones suaves
- **Navegación Fluida**: Scroll suave y navegación activa
- **Páginas de Error**: Manejo elegante de errores 404 y 500

## 📁 Estructura del Proyecto

```
viamindblog/
├── app.py                 # Aplicación principal Flask
├── requirements.txt       # Dependencias del proyecto
├── README.md             # Documentación del proyecto
├── .gitignore           # Archivos ignorados por Git
├── routes/              # Endpoints de la API (futuro)
├── logic/               # Lógica de negocio (futuro)
├── data/                # Base de datos y modelos (futuro)
├── templates/           # Plantillas HTML
│   ├── index.html       # Página principal
│   ├── 404.html         # Página de error 404
│   └── 500.html         # Página de error 500
├── static/              # Archivos estáticos
│   ├── css/
│   │   └── style.css    # Estilos principales
│   └── js/
│       └── main.js      # JavaScript interactivo
└── backups/             # Copias de seguridad
```

## ⚡ Guía Rápida

### Ejecutar el proyecto en 3 pasos:

```bash
# 1. Navegar al directorio
cd C:\Users\claud\viamindblog

# 2. Instalar dependencias (solo la primera vez)
pip install -r requirements.txt

# 3. Ejecutar el servidor
python app.py
```

**Acceder a la página**: http://localhost:5000

**Detener el servidor**: Presiona `Ctrl + C` en la terminal

## 🛠️ Instalación Detallada

### Prerrequisitos

- **Python 3.8 o superior**
- **pip** (gestor de paquetes de Python)
- **Git** (para clonar el repositorio)

### Verificar Python

```bash
python --version
```

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ghosterox/viamindblog.git
   cd viamindblog
   ```

2. **Crear entorno virtual (recomendado)**
   ```bash
   # Crear entorno virtual
   python -m venv venv
   
   # Activar en Windows
   venv\Scripts\activate
   
   # Activar en macOS/Linux
   source venv/bin/activate
   ```

3. **Instalar dependencias**
   ```bash
   pip install -r requirements.txt
   ```

4. **Verificar instalación**
   ```bash
   pip list | findstr Flask
   ```

## 🚀 Uso

### Desarrollo Local

1. **Navegar al directorio del proyecto**
   ```bash
   cd C:\Users\claud\viamindblog
   ```

2. **Iniciar el servidor de desarrollo**
   ```bash
   python app.py
   ```

3. **Acceder a la aplicación**
   - **URL principal**: http://localhost:5000
   - **Health check**: http://localhost:5000/health
   - **Página 404**: Intenta ir a cualquier URL que no exista

4. **Logs del servidor**
   ```
   🚀 Iniciando Viamind Blog...
   📡 Servidor corriendo en: http://localhost:5000
   🔧 Modo debug: False
   * Running on http://127.0.0.1:5000
   * Running on http://192.168.0.101:5000
   ```

### Producción

Para desplegar en producción, se recomienda usar un servidor WSGI como Gunicorn:

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## 🎨 Características del Diseño

### Paleta de Colores
- **Primario**: #6366f1 (Indigo)
- **Secundario**: #8b5cf6 (Violeta)
- **Acento**: #06b6d4 (Cian)
- **Fondo Oscuro**: #0f172a
- **Texto Claro**: #f8fafc

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Animaciones
- **Elementos Flotantes**: Animación suave con diferentes velocidades
- **Contadores**: Animación de números en las estadísticas
- **Barras de Progreso**: Animación de llenado
- **Hover Effects**: Transformaciones en tarjetas y botones

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop**: 1200px y superior
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Endpoints Disponibles

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/` | GET | Página principal del blog |
| `/health` | GET | Estado del servidor |
| `/*` | GET | Página de error 404 |

## 🚧 Estado del Desarrollo

### Completado ✅
- [x] Landing page principal
- [x] Diseño responsive
- [x] Animaciones y efectos visuales
- [x] Páginas de error (404, 500)
- [x] Navegación suave
- [x] Configuración de Flask
- [x] Sincronización con GitHub
- [x] Documentación completa

### En Desarrollo 🔄
- [ ] Sistema de blog completo
- [ ] Panel de administración
- [ ] Base de datos
- [ ] Sistema de usuarios
- [ ] API REST

### Planificado 📋
- [ ] Sistema de comentarios
- [ ] Búsqueda avanzada
- [ ] Newsletter
- [ ] Integración con redes sociales
- [ ] Analytics y métricas

## ⚠️ Solución de Problemas

### Error: "No module named 'flask'"
```bash
pip install -r requirements.txt
```

### Puerto 5000 ocupado
El servidor automáticamente te dirá si el puerto está ocupado. Soluciones:
- Cerrar otras aplicaciones que usen el puerto 5000
- Modificar el puerto en `app.py` línea 47

### Página no carga
1. Verifica que el servidor esté corriendo (deberías ver los logs)
2. Asegúrate de usar la URL correcta: http://localhost:5000
3. Revisa que no haya firewall bloqueando

### Verificar instalación
```bash
pip list | findstr Flask
```

## 🔄 Comandos Git Útiles

```bash
# Ver estado del repositorio
git status

# Ver cambios recientes
git log --oneline -5

# Actualizar desde GitHub
git pull origin master

# Ver ramas
git branch -a
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: info@viamind.com
- **GitHub**: [@ghosterox](https://github.com/ghosterox)
- **Proyecto**: [https://github.com/ghosterox/viamindblog](https://github.com/ghosterox/viamindblog)

## 🙏 Agradecimientos

- **Flask**: Framework web ligero y flexible
- **Font Awesome**: Iconos vectoriales
- **Google Fonts**: Tipografía Inter
- **CSS Grid & Flexbox**: Layout moderno
- **Intersection Observer API**: Animaciones de scroll

---

**Viamind Blog** - Construyendo el futuro, una línea de código a la vez. 🚀

*Última actualización: Julio 2025* 