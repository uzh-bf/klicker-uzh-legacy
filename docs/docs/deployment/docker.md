---
id: deployment_docker
title: Docker
hide_title: true
---

# Docker

Docker makes the deployment of the Klicker UZH a relatively straight-forward task.

As described in the section on the Klicker [Architecture](architecture/overview.md), a Klicker application is composed of both an instance of `klicker-react` for the frontend service as well as `klicker-api` for the backend service.

## Deployment to Kubernetes

The recommended way of deploying the Klicker UZH to production is backed by a Kubernetes cluster. This allows for easy scaling and resiliency.

## Deployment with Docker Compose

Alternatively to deploying the Klicker UZH to a Kubernetes cluster, the Klicker UZH could also be deployed using Docker Compose. This allows for a deployment to any machine that has a compatible version of Docker installed.
