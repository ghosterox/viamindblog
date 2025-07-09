"""
Aplicación principal de Viamind Blog
Sistema de gestión y consultoría para Viamind Consulting
"""

from flask import Flask, render_template
import os

# Configuración de la aplicación
app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'viamind-blog-secret-key-2025')

@app.route('/')
def index():
    """
    Ruta principal que muestra la landing page del blog
    Retorna: Template HTML de la página principal
    """
    return render_template('index.html')

@app.route('/health')
def health_check():
    """
    Endpoint de verificación de salud del sistema
    Retorna: Estado del servidor en formato JSON
    """
    return {
        'status': 'healthy',
        'service': 'viamind-blog',
        'version': '1.0.0',
        'environment': os.environ.get('FLASK_ENV', 'development')
    }

@app.errorhandler(404)
def not_found(error):
    """
    Manejador de errores 404 - Página no encontrada
    Parámetros: error - Objeto de error de Flask
    Retorna: Template HTML de página de error
    """
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    """
    Manejador de errores 500 - Error interno del servidor
    Parámetros: error - Objeto de error de Flask
    Retorna: Template HTML de página de error
    """
    return render_template('500.html'), 500

if __name__ == '__main__':
    # Configuración para desarrollo
    debug_mode = os.environ.get('FLASK_ENV') == 'development'
    port = int(os.environ.get('PORT', 5000))
    
    print("🚀 Iniciando Viamind Blog...")
    print(f"📡 Servidor corriendo en: http://localhost:{port}")
    print(f"🔧 Modo debug: {debug_mode}")
    
    app.run(
        host='0.0.0.0',
        port=port,
        debug=debug_mode
    ) 