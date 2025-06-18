# CI Demo Node.js

A demonstration of a complete CI/CD pipeline for a simple Node.js Express application using GitHub Actions, Docker, and Docker Hub.

---

## Table of Contents

* [Project Overview](#project-overview)
* [Prerequisites](#prerequisites)
* [Setup & Installation](#setup--installation)
* [Running Locally](#running-locally)
* [Dockerization](#dockerization)
* [Continuous Integration (CI)](#continuous-integration-ci)
* [Continuous Deployment (CD)](#continuous-deployment-cd)
* [Testing](#testing)
* [Managing Secrets](#managing-secrets)
* [Extending the Project](#extending-the-project)
* [Contributing](#contributing)
* [License](#license)

---

## Project Overview

This repository contains:

* A basic Express server (`index.js`) responding with JSON on `GET /`.
* A Jest + Supertest test suite (`index.test.js`).
* A Dockerfile for containerizing the app.
* GitHub Actions workflows for:

  * **CI**: building and running tests on each push and PR.
  * **CD**: building and pushing Docker images to Docker Hub on successful CI.

## Prerequisites

* Git installed locally.
* Node.js (v14+) and npm.
* Docker Desktop.
* A Docker Hub account.
* A GitHub repository with repo-level [Secrets](#managing-secrets) configured.

## Setup & Installation

1. **Clone** this repo locally:

   ```bash
   git clone https://github.com/<your-username>/ci-demo-node.git
   cd ci-demo-node
   ```

2. **Install** dependencies:

   ```bash
   npm ci
   ```

## Running Locally

Start the server:

```bash
npm start
```

Then visit [http://localhost:3000](http://localhost:3000) to see:

```json
{ "message": "Hello, CI/CD World!" }
```

## Dockerization

1. **Build** the image:

   ```bash
   ```

docker build -t <dockerhub-user>/ci-demo\:latest .

````

2. **Run** the container:
   ```bash
docker run --rm -d -p 3000:3000 --name ci-demo-test <dockerhub-user>/ci-demo:latest
````

3. **Test**:

   ```bash
   ```

curl [http://localhost:3000](http://localhost:3000)

````

4. **Push** to Docker Hub:
   ```bash
docker push <dockerhub-user>/ci-demo:latest
````

## Continuous Integration (CI)

Workflow file: `.github/workflows/ci.yml`

* **Triggers**: `push` & `pull_request` on `main`
* **Jobs**:

  * Checkout code
  * Set up Node.js 16
  * Install deps (`npm ci`)
  * Run tests (`npm test`)

## Continuous Deployment (CD)

Workflow file: `.github/workflows/cd.yml`

* **Trigger**: runs on completion of the CI workflow (`workflow_run`)
* **Steps**:

  1. Checkout code
  2. Set up QEMU & Buildx (optional for multi-arch)
  3. Docker login (uses GitHub Secrets)
  4. Build and push image tagged `latest` and commit SHA

## Testing

Run tests locally:

```bash
npm test
```

Coverage report (optional):

```bash
jest --coverage
```

## Managing Secrets

In your GitHub repo, add these Secrets under **Settings → Secrets and variables → Actions**:

* `DOCKERHUB_USERNAME`: your Docker Hub username
* `DOCKERHUB_TOKEN`: a Docker Hub access token (not your account password)

## Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push: `git push origin feature/my-feature`
5. Open a PR against `main`.

## License

This project is open source, under the MIT License. See [LICENSE](LICENSE) for details.
