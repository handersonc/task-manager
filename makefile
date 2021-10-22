
docker-build:
	docker-compose build

docker-up:
	docker-compose up -d

docker-shell:
	docker exec -it api bash