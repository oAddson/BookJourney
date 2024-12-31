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

start-d:
	@docker compose -f $(DOCKER_COMPOSE_FILE) stop
	@docker compose -f $(DOCKER_COMPOSE_FILE) up -d
	@echo "🔄 Containers started."

start:
	@docker compose -f $(DOCKER_COMPOSE_FILE) up
	@echo "🔄 Containers started."

logs:
	@docker compose -f $(DOCKER_COMPOSE_FILE) logs -f
	@echo "📜 Logs streaming."

clean:
	@docker compose -f $(DOCKER_COMPOSE_FILE) down --volumes --remove-orphans
	@echo "🧹 Cleaned up containers, volumes, and networks."

shell:
	@docker exec -it $$(docker ps -qf "name=graphql-server") sh
	@echo "🔧 Entered the container shell."

test:
	@yarn test
	@echo "✅ Tests completed."

test-watch:
	@yarn test:watch
	@echo "👀 Running tests in watch mode."

help:
	@echo "🚀 Available commands:"
	@echo "  make build        - Build Docker images."
	@echo "  make clean        - Remove containers, volumes, and networks."
	@echo "  make logs         - Tail the logs of the containers."
	@echo "  make shell        - Enter the shell of the running graphql-server container."
	@echo "  make start        - Start Docker containers."
	@echo "  make start-d 		 - Start Docker containers in detached mode."
	@echo "  make stop         - Stop running Docker containers."
	@echo "  make test         - Run tests with Jest."
	@echo "  make test-watch   - Run tests in watch mode."
	@echo "  make up           - Start Docker containers in detached mode."
