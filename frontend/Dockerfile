FROM node:20 as build
WORKDIR /frontend
COPY package*.json /app/
RUN npm install

COPY . /core/
RUN npm run build

# Production enviroment
FROM nginx:alpine
COPY --from=build /frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["ngnix", "-9", "deamon off;"]