# Usa la imagen base de Nginx
FROM nginx:alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/share/nginx/html

# Elimina los archivos predeterminados de Nginx
RUN rm -rf ./*

# Copia todos los archivos estáticos al directorio de Nginx
COPY . .

# Expone el puerto 80
EXPOSE 80

# El servidor Nginx se inicia automáticamente al ejecutar el contenedor
CMD ["nginx", "-g", "daemon off;"]
