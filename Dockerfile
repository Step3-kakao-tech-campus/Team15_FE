# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16 AS build
WORKDIR /usr/src/app
COPY krampoline/package*.json ./
RUN npm -g install pnpm
RUN pnpm install
COPY krampoline/ ./
RUN pnpm run build

# Run stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]