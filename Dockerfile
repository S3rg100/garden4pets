# Etapa 1: Construcción de la aplicación Angular
FROM node:18 AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm ci

RUN npm install -g @angular/cli

COPY . .

# Genera la aplicación Angular para producción
RUN npm run build

# Etapa 2: Configuración del servidor Nginx
FROM nginx:stable

# Copia los archivos generados en la etapa de construcción al directorio de Nginx
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/garden4pets/browser .

# Copia un archivo personalizado de configuración de Nginx (opcional)
# Puedes usar esto para redireccionar rutas en una SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 para el contenedor
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
