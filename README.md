# node-express-api-docker

I created a simple api and used docker for deployment purposes.

If you would like to follow along, please:

1. Download Docker.
2. Clone this Repo.
3. Place yourself in the folder.
4. Follow the instructions below to create and image and its container.

## Create Image

Run the command `docker build -t user-service-api:latest .`

## Create Container

Run the command `docker run --name user-api -d -p 3001:3001 user-service-api:latest`
