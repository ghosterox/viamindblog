"""
API principal para Vercel - Viamind Blog
Este archivo es el punto de entrada para el despliegue en Vercel
"""

from app import app

# Exportar la aplicación para Vercel
app.debug = False 