## Actionable Docker

1. Installing docker from docker's main website
2. check if docker is running by simply running docker in terminal
3. Some commands
   1. docker ps -> lists all running containers
   2. docker run {image} -> use to run docker images
      1. docker run -p {host_port}:{container_port} {image} -> use to map host machine port to container machine port
      2. docker run -d {image} -> use to run docker image in background
   3. docker kill {container_id or container_name} -> use to shutdown/kill container instance
