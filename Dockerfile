FROM nikolaik/python-nodejs:python3.8-nodejs13-alpine as yarn_install
WORKDIR /usr/src/app
RUN yarn global add @angular/cli
COPY ["package.json", "package.json"]
RUN yarn

FROM yarn_install as angular_build
COPY ["src", "src"]
COPY ["e2e", "e2e"]
COPY ["angular.json", "browserslist", "tsconfig.json", "tsconfig.app.json", "tsconfig.spec.json", "tslint.json", "./"]
RUN ng build --build-optimizer --aot

FROM nginx:alpine as appclient_final
COPY --from=angular_build /usr/src/app/dist/corona-virus /usr/share/nginx/html
COPY ["./nginx-custom.conf", "/etc/nginx/conf.d/default.conf"]