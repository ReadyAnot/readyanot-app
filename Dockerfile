FROM node:12-alpine AS base
WORKDIR /base
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build
RUN apk update && apk add jq
RUN sh get-env.sh

FROM node:12-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package.json /build/package-lock.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
COPY --from=build /build/.env ./.env
RUN npm install next

EXPOSE 3000
CMD npm run start