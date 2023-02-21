FROM node:18-alpine

WORKDIR /opt/app

COPY node_modules/ node_modules/
COPY dist/ dist/

EXPOSE 80
EXPOSE 3071

CMD ["node", "dist/main.js"]
