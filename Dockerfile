FROM nginx:1.27-alpine

ARG APP_VERSION=v1

COPY index.html /usr/share/nginx/html/index.html
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js

RUN sed -i "s/__APP_VERSION__/${APP_VERSION}/g" /usr/share/nginx/html/js/app.js

EXPOSE 80
