# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16 AS build
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install --global pnpm
RUN corepack enable
ENV VITE_API_URL=""
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# Run stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY ./borrow-me /usr/src/app
COPY --from=build /usr/src/app/dist ./frontend
RUN npm install --global pnpm
RUN corepack enable
RUN pnpm install --frozen-lockfile
ENV JWT_SECRET_KEY="eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9asfathoht066923h623lk6h263326lk236216og213i6go"
ENV JWT_LOCAL_PATH = "krampoline.com"
RUN pnpm run build
RUN pnpm run seed:run
EXPOSE 3000
CMD ["pnpm", "run", "start:prod"]