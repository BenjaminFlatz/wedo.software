# syntax=docker/dockerfile:1

FROM node:20-alpine AS build

WORKDIR /app

# Build-time configuration for the frontend bundle. Every variable read via
# import.meta.env at build time must be declared here AND in the Railway
# IaC file's env: {} block for this service (see .railway/railway.ts).
ARG VITE_CHATWOOT_BASE_URL=https://chatwoot.wedo-software.com
ARG VITE_CHATWOOT_WEBSITE_TOKEN=JnugYLngRwnCRdc3oW2G76t2
ENV VITE_CHATWOOT_BASE_URL=$VITE_CHATWOOT_BASE_URL \
    VITE_CHATWOOT_WEBSITE_TOKEN=$VITE_CHATWOOT_WEBSITE_TOKEN

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# nginx does not read Railway's injected $PORT variable, so the port is
# fixed and must be declared explicitly (not auto-detected) in the IaC file.
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
