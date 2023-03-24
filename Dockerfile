FROM node:18-alpine As build

WORKDIR /work

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build-dev

FROM nginx:latest

WORKDIR /usr/share/nginx

COPY --from=build /work/dist ./html

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]


##docker build . -t 232038870714.dkr.ecr.ap-northeast-2.amazonaws.com/logisteq/aloa/lmd/dev/admin-frontend
##docker push 232038870714.dkr.ecr.ap-northeast-2.amazonaws.com/logisteq/aloa/lmd/dev/admin-frontend:latest 