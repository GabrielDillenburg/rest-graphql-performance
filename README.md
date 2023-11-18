# Comparative Analysis of REST and GraphQL in Microservices: Performance and Scalability

This project is dedicated to a comparative study of REST and GraphQL architectures in microservices, focusing on evaluating their performance and scalability.

## Overview

The aim is to understand how REST and GraphQL perform in a microservices environment, particularly in terms of response time, throughput, CPU load, and memory usage. This project utilizes Docker to run microservices and Gatling for load and stress testing.

## Prerequisites

- Node.js
- Docker
- Docker Compose
- Gatling (for load testing)

## Project Structure

- `microservice-rest/`: A REST-based microservice.
- `microservice-graphql/`: A GraphQL-based microservice.
- `docker-compose.yml`: Docker Compose file to orchestrate the microservices.
- `GatlingScript.scala`: Basic Gatling load test script.

## Getting Started

### Setting up Microservices

1. **REST Microservice:**
   Navigate to `microservice-rest/`, install dependencies with `npm install`, and start the service.

2. **GraphQL Microservice:**
   Navigate to `microservice-graphql/`, install dependencies with `npm install`, and start the service.

### Running with Docker

1. **Build and Run:**
   In the project root directory, run `docker-compose up` to build and start both microservices.

2. **Access Services:**
   - REST API will be available at `http://localhost:3000/`
   - GraphQL API will be available at `http://localhost:4000/`

### Load Testing with Gatling

1. **Configure Gatling:**
   Set up Gatling on your machine and configure `GatlingScript.scala` to point to the correct URLs of your microservices.

2. **Run Tests:**
   Execute the Gatling script to perform load testing on both microservices.

## Usage

This setup is designed for performance comparison. Use the provided Gatling script to simulate load on the services and compare the performance based on the generated reports.

## Contributing

Contributions to improve the microservices or the testing methodology are welcome. Please feel free to fork the repository and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to all contributors who have helped in building and refining this project.
- Special thanks to the developers of Node.js, Docker, and Gatling for providing the tools and technologies used in this project.
