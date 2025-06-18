\*\*# CI-Demo-Node \*\*#

[![CI](https://github.com/ilyassazetd/ci-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/ilyassazetd/ci-demo/actions/workflows/ci.yml)
[![Docker Image](https://img.shields.io/docker/pulls/ilyassazetd/ci-demo.svg)](https://hub.docker.com/r/ilyassazetd/ci-demo)

A lightweight Express.js application demonstrating a fully automated CI/CD pipeline using GitHub Actions and Docker Hub.

---

## Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Running Locally](#running-locally)
* [Testing](#testing)
* [Docker](#docker)
* [CI/CD Integration](#cicd-integration)
* [Contributing](#contributing)
* [License](#license)

---

## Features

* **Express.js** API with a single endpoint: `/` returns a JSON greeting.
* **Unit tests** with Jest and Supertest.
* **CI workflow**: automated linting, dependency installation, and test execution on each push and pull request.
* **CD workflow**: multi‑stage Docker image build and push to Docker Hub upon successful CI.

---

## Prerequisites

* [Node.js](https://nodejs.org/) (v14 or later)
* [Docker Desktop](https://www.docker.com/products/docker-desktop)
* [Git](https://git-scm.com/)
* GitHub account with repository permissions
* Docker Hub account

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ilyassazetd/ci-demo.git
   cd ci-demo
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

---

## Running Locally

1. Start the application:

   ```bash
   npm start
   ```

2. Open your browser or run:

   ```bash
   curl http://localhost:3000
   ```

Expected response:

```json
{ "message": "Hello, CI/CD World!" }
```

---

## Testing

Run the test suite with:

```bash
npm test
```

All tests should pass, verifying the application response and status codes.

---

## Docker

Build and run the Docker image locally:

1. Build:

   ```bash
   docker build -t ilyassazetd/ci-demo:latest .
   ```

2. Run:

   ```bash
   docker run --rm -d -p 3000:3000 --name ci-demo ilyassazetd/ci-demo:latest
   ```

3. Test:

   ```bash
   curl http://localhost:3000
   ```

4. Stop the container:

   ```bash
   docker stop ci-demo
   ```

Push to Docker Hub:

```bash
docker login
docker push ilyassazetd/ci-demo:latest
```

---

## CI/CD Integration

This project uses **GitHub Actions** to automate builds, tests, and Docker image publishing:

| Workflow | Trigger                       | Purpose                                    |
| -------- | ----------------------------- | ------------------------------------------ |
| **CI**   | push or pull\_request to main | Install dependencies and run tests         |
| **CD**   | successful CI workflow run    | Build and push Docker images to Docker Hub |

Secrets required in GitHub repository settings:

* `DOCKERHUB_USERNAME`: Docker Hub username
* `DOCKERHUB_TOKEN`: Docker Hub access token

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "feat: add your feature"`.
4. Push to your branch: `git push origin feature/your-feature`.
5. Open a pull request against `main`.

Please ensure all tests pass before submitting.

---

## License

This project is licensed under the [MIT License](LICENSE).
