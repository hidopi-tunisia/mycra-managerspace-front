# multistage build 
#1
# Build de l'application angular
FROM node:18.18.0-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . ./

# construction de l'application Angular
RUN npm run build

#2
# Servir l'application angular avec le serveur Nginx
FROM nginx:1.24.0-alpine

COPY --from=build /usr/src/app/dist/vuexy /usr/share/nginx/html

COPY nginx_cnfg.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

#Exécution du serveur web nginx en avant plan
CMD ["nginx", "-g", "daemon off;"]