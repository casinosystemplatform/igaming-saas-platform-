FROM node:18 as build
RUN npm run build

FROM nginx
COPY dist /usr/share/nginx/html
