from node:9.11.1-alpine
maintainer juliana.crivelli@usp.br

add . /projeto
workdir /projeto
run npm install

expose 3000
cmd ["npm", "start"]