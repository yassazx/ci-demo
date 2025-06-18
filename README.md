# ci-demo

A simple Node.js Express application demonstrating a full CI/CD pipeline using GitHub Actions and Docker Hub.

---

## Table of Contents

* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)

  * [Clone & Install](#clone--install)
  * [Run Locally](#run-locally)
* [Testing](#testing)
* [Docker](#docker)

  * [Build & Run Locally](#build--run-locally)
  * [Push to Docker Hub](#push-to-docker-hub)
* [CI with GitHub Actions](#ci-with-github-actions)
* [CD with GitHub Actions → Docker Hub](#cd-with-github-actions--docker-hub)

---

## Overview

This repo holds a minimal Express server:

* Responds to `GET /` with JSON `{ message: 'Hello, CI/CD World!' }`.
* Includes a Jest/Supertest suite to verify the endpoint.
* Contains a Dockerfile for containerization.
* Defines two GitHub Actions workflows:

  * **CI** (`.github/workflows/ci.yml`): runs lint/install/tests on every push/PR to `main`.
  * **CD** (`.github/workflows/cd.yml`): builds & pushes a Docker image to Docker Hub on successful CI runs.

---

## Prerequisites

* [Node.js v14+](https://nodejs.org/) & npm
* [Git](https://git-scm.com/)
* Docker Desktop (for local container builds)
* A GitHub account with this repo forked or cloned
* A Docker Hub account with a repository named `ci-demo`

---

## Getting Started

### Clone & Install

```bash
git clone https://github.com/ilyassazetd/ci-demo.git
cd ci-demo
npm install
```

### Run Locally

```bash
npm start
# → Server listens on http://localhost:3000
```

---

## Testing

Run the test suite with:

```bash
npm test
```

You should see Jest report a passing test for the `/` endpoint.

---

## Docker

### Build & Run Locally

1. **Build the image**

   ```bash
   ```

docker build -t ilyassazetd/ci-demo\:latest .

````

2. **Run a container**  
   ```bash
docker run --rm -d -p 3000:3000 --name ci-demo-test ilyassazetd/ci-demo:latest
````

3. **Verify**

   ```bash
   ```

curl [http://localhost:3000](http://localhost:3000)

# → { "message": "Hello, CI/CD World!" }

````

4. **Cleanup**  
   ```bash
docker stop ci-demo-test
````

### Push to Docker Hub

```bash
docker login               # enter Docker Hub username & access token
docker push ilyassazetd/ci-demo:latest
```

---

## CI with GitHub Actions

The **CI** workflow is defined in `.github/workflows/ci.yml`. It:

1. Triggers on `push` and `pull_request` to `main`.
2. Checks out code, sets up Node.js v16.
3. Installs dependencies via `npm ci`.
4. Runs `npm test` (Jest + Supertest).

*Merges to `main` are gated on passing this workflow.*

---

## CD with GitHub Actions → Docker Hub

The **CD** workflow is defined in `.github/workflows/cd.yml`. It:

1. Listens for the `CI` workflow to complete successfully.
2. Checks out code, sets up Docker Buildx.
3. Logs in to Docker Hub using `DOCKERHUB_USERNAME` & `DOCKERHUB_TOKEN` (repo secrets).
4. Builds and pushes two image tags:

   * `ilyassazetd/ci-demo:latest`
   * `ilyassazetd/ci-demo:${GITHUB_SHA}`

Make sure you’ve added these two secrets in your GitHub repo settings before pushing.

---

With this setup, every change pushed to `main` automatically runs tests and, on success, produces a fresh Docker image on Docker Hub. Enjoy your automated CI/CD!
