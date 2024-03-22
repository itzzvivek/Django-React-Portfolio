FROM node:20 as build
WORKDIR /frontend
COPY package*.json /frontend/
RUN npm install

COPY . /frontend/
RUN npm run build

# Production enviroment
FROM nginx:alpine
COPY --from=build /frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

