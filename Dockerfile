FROM node:14.0.0-alpine

WORKDIR /opt/app

COPY node_modules/ node_modules/
COPY dist/ dist/

EXPOSE 4100
CMD ["node", "dist/main.js"]
