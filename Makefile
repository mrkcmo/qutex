.PHONY: build
build:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml build

.PHONY: up
up:
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d
	yarn --cwd services/bot start:dev-bot

.PHONY: deploy $(VERSION)
deploy:
	./bin/deploy_stack.sh $(VERSION)

.PHONY: logs
logs:
	docker compose logs -f bot

.PHONY: down
down:
	docker compose down

.PHONY: test
test:
	export QUTEX_TESTING=true && \
	yarn --cwd services/bot test --verbose && \
	unset QUTEX_TESTING

.PHONY: lint
lint:
	yarn --cwd services/bot lint
	yarn --cwd services/ui 
	docker run -it -v $(PWD):/apps alpine/flake8
	