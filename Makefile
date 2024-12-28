# Variables
DOCKER_COMPOSE_FILE = docker-compose.yml

# Commands
build:
	@docker compose -f $(DOCKER_COMPOSE_FILE) build
	@echo "🚧 Build complete."

up:
	@docker compose -f $(DOCKER_COMPOSE_FILE) up -d
	@echo "⬆️  Containers are up and running."

stop:
	@docker compose -f $(DOCKER_COMPOSE_FILE) stop
	@echo "🛑 Containers stopped."

start:
	@docker compose -f $(DOCKER_COMPOSE_FILE) stop
	@docker compose -f $(DOCKER_COMPOSE_FILE) up -d
	@echo "🔄 Containers started."

logs:
	@docker compose -f $(DOCKER_COMPOSE_FILE) logs -f
	@echo "📜 Logs streaming."

clean:
	@docker compose -f $(DOCKER_COMPOSE_FILE) down --volumes --remove-orphans
	@echo "🧹 Cleaned up containers, volumes, and networks."

help:
	@echo "🚀 Available commands:"
	@echo "  make build      - Build Docker images."
	@echo "  make up         - Start Docker containers in detached mode."
	@echo "  make stop       - Stop running Docker containers."
	@echo "  make start      - Start Docker containers."
	@echo "  make logs       - Tail the logs of the containers."
	@echo "  make clean      - Remove containers, volumes, and networks."
