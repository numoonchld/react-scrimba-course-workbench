## About

- react todo app experiment 
- isolated node development environment container image
- workbench for [scrimba.com free course](https://scrimba.com/learn/learnreact)

## Run the App

- `docker-compose up --build`
    - build the image 

- `docker-compose run --rm --service-ports react_dev_env`
    - log in to container shell

- `cd todo-app/ && npm start`
    - starts react development server from the container shell 

- note that the source code is the repository which is mounted as a volume into the container in `docker-compose.yml`
    - use this `docker-compose.yml` as a starting point for much more complex setups involving backend and db containers in parallel