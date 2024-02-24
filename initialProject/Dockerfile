FROM ghcr.io/munkkeli/diploi-react-trpc-template

# Install application code
WORKDIR /app
COPY . .

RUN cd /app/ui && npm install && npm run build
RUN cd /app/api && npm install && npm run build
