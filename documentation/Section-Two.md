# What is docker?
Docker is a powerful platform that facilitates the development, deployment, and scaling of applications within lightweight, portable containers. These containers encapsulate all the dependencies, libraries, and configurations required for an application to run smoothly across different environments, ensuring consistency and reproducibility.

In this section, we will discuss the key concepts and components of Docker, its architecture. We will also explore how to install Docker on different operating systems and use it to build, run, and manage containers.

## Docker Architecture
Docker follows a client-server architecture, where the Docker client communicates with the Docker daemon to build, run, and manage containers. The Docker daemon is responsible for creating and managing containers, images, networks, and volumes. It listens for Docker API requests and performs the requested operations.

The Docker client, on the other hand, is the primary way users interact with Docker. It accepts commands from the user and communicates with the Docker daemon to execute them. The client can run on the same host as the daemon or connect to a remote daemon.

Docker also uses a container runtime, which is responsible for running containers. The default container runtime for Docker is containerd, a high-performance container runtime that is part of the container ecosystem maintained by the CNCF (Cloud Native Computing Foundation).

## Key Concepts and Components
Docker is built on several key concepts and components, including:

* **Images**: Immutable files that contain the application code, runtime, libraries, and dependencies required to run an application. Images are used to create containers.

* **Containers**: Runnable instances of images that encapsulate the application and its dependencies. Containers are lightweight, portable, and isolated from each other.

* **Registries**: Repositories for storing and distributing Docker images. The most popular registry is Docker Hub, a public registry that hosts thousands of images for common applications, libraries, and frameworks.

* **Docker Engine**: A runtime and set of tools for building, running, and managing containers. It includes the Docker daemon, Docker CLI, and other components required to work with containers.

* **Docker Compose**: A tool for defining and running multi-container Docker applications. It uses a YAML file to configure the application's services, networks, and volumes.

* **Docker Swarm**: A native clustering and orchestration tool for Docker. It allows users to create and manage a cluster of Docker nodes, and deploy and scale applications across the cluster.

* **Docker Volume**: A persistent data storage mechanism for containers. Volumes allow data to persist across container restarts and be shared between containers.

## Installing Docker
Docker is available for a wide range of operating systems, including Linux, macOS, and Windows. The installation process varies depending on the operating system, but generally involves downloading the Docker package and running the installation wizard.

[For Linux users](https://docs.docker.com/engine/install/ubuntu/), Docker provides installation scripts that automate the installation process and ensure that the latest version of Docker is installed. These scripts are available for popular Linux distributions such as Ubuntu, Debian, CentOS, and Fedora.

[For macOS and Windows](https://docs.docker.com/desktop/)
 users, Docker provides a desktop application that includes the Docker Engine, Docker CLI, and other tools required to work with containers. The desktop application also includes a graphical user interface for managing containers, images, networks, and volumes.

## Building and Running Containers

Once Docker is installed, users can build and run containers using the Docker CLI. The process involves creating a Dockerfile, which defines the application's environment and dependencies, and using the `docker build` and `docker run` commands to build and run the container.

For example, to build a container from a Dockerfile, users can run the following command, which builds an image named `myapp` from the current directory (`.`).

```bash
docker build -t myapp .
```

To list images, users can run the following command, which displays a list of images, including their repository, tag, image ID, and creation date.
```bash
docker images
```

This command runs a container from the `myapp` image in detached mode (`-d`) and maps port 8080 on the host to port 80 in the container (`-p 8080:80`).

```bash
docker run -d -p 8080:80 myapp
```


## Managing Containers

Docker provides a set of commands for managing containers, including starting, stopping, and removing containers. Users can also inspect container logs, attach to a running container, and execute commands inside a container.

For example, to list all running containers, users can run the following command:

```bash
docker ps
```

This command displays a list of running containers, including their container ID, image, command, and status. Users can also use the `docker stop` and `docker rm` commands to stop and remove containers, respectively.

```bash	
docker stop <container_id>
docker rm <container_id>
```

## Volume and Networking

Docker provides mechanisms for persisting data and networking containers. Volumes allow users to persist data across container restarts and be shared between containers. Docker also provides a range of networking options, including bridge networks, overlay networks, and macvlan networks, to connect containers and enable communication between them.

For example, to create a volume, users can run the following command:

```bash
docker volume create myvolume
```

This command creates a volume named `myvolume`, which can be mounted to containers using the `-v` flag. To attach a volume to a container, users can run the following command:

```bash
docker run -d -v myvolume:/data myapp
```

To create a bridge network, users can run the following command, which creates a bridge network named `mynetwork`, which can be used to connect containers and enable communication between them.

```bash
docker network create --driver bridge mynetwork
```

To remove a volume, users can run the following command, which removes the `myvolume` volume.

```bash
docker volume rm myvolume
```

## Docker compose
Docker Compose is a tool for defining and running multi-container Docker applications. It uses a YAML file to configure the application's services, networks, and volumes, and provides a simple way to define and run complex applications with multiple containers.

For example, to define a multi-container application using Docker Compose, users can create a `docker-compose.yml` file with the following content:

```yaml
version: '3.8'
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
      MYSQL_DATABASE: example
      MYSQL_USER: example
      MYSQL_PASSWORD: example
    ports:
      - "3306:3306"
```

This file defines a web service running an Nginx web server and a db service running a MySQL database. It also specifies the ports to expose and environment variables to set for each service.

To run the multi-container application, users can run the following command, which starts the services defined in the `docker-compose.yml` file.

```bash
docker-compose up
```

To stop and remove the containers, networks, and volumes created by the `docker-compose up` command, users can run the following command:

```bash
docker-compose down
```

To clear all the resources created by the `docker-compose up` command, users can run the following command:

```bash
docker-compose down --volumes
```

To reset the state of the Docker Compose project, users can run the following command, which removes all containers, networks, and volumes created by the `docker-compose up` command:

```bash
docker-compose down --rmi all
```

To investigate more about docker-compose, you can visit the [Samples Folder](./../samples/). There you will find a dockerized application with a `docker-compose.yml` file and a `Dockerfile` for each service (frontend, backend, and database.

## Conclusion
Docker is a powerful platform that simplifies the development, deployment, and scaling of applications using lightweight, portable containers. It provides a consistent and reproducible environment for applications to run across different environments, ensuring that they work as expected in development, testing, and production. By understanding the key concepts and components of Docker, users can leverage its capabilities to build, run, and manage containers effectively.



