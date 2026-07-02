# 🚀 Google Keep DevOps Project

A production-style React + Docker + Kubernetes + Helm + GitHub Actions + Terraform project demonstrating an end-to-end DevOps workflow.

---

## 📋 Table of Contents
* [⭐ Project Overview](#-project-overview)
* [📌 Project Objectives](#-project-objectives)
* [🏗️ Complete Project Architecture](#️-complete-project-architecture)
* [🛠️ Tech Stack](#️-tech-stack)
* [📂 Project Structure](#-project-structure)
* [✨ Features](#-features)
* [⚙️ Installation & Setup Guide](#️-installation--setup-guide)
* [🐳 Docker Workflow](#-docker-workflow)
* [☸️ Kubernetes Deployment & Orchestration](#️-kubernetes-deployment--orchestration)
* [⛵ Helm Package Management](#-helm-package-management)
* [🔄 GitHub Actions (CI Pipeline)](#-github-actions-ci-pipeline)
* [🌍 Terraform (Infrastructure as Code)](#-terraform-infrastructure-as-code)
* [❗ Troubleshooting & Real-World Fixes](#-troubleshooting--real-world-fixes)
* [📈 Future Improvements](#-future-improvements)
* [💼 Interview & Portfolio Highlights](#-interview--portfolio-highlights)
* [📷 Screenshots](#-screenshots)
* [👨‍💻 Author](#-author)

---

## ⭐ Project Overview

This repository contains a **Google Keep Clone** built with React and enhanced with modern production-grade DevOps practices. 

The goal of this project is not only to build a React application but also to demonstrate how a real-world enterprise application transitions seamlessly from development to production using industry-standard DevOps tools.

---

## 📌 Project Objectives

The purpose of this repository is to implement and master:
* **DevOps Fundamentals & Best Practices**
* **CI/CD Automation Concepts**
* **Docker Containerization & Image Optimization**
* **Kubernetes Orchestration, Scaling, and High Availability**
* **Helm Charts Package Management**
* **Infrastructure as Code (IaC) using Terraform**
* **Zero-Downtime Rolling Updates & Instant Rollbacks**

---

## 🏗️ Complete Project Architecture

### 🚀 DevOps Workflow
Developer ──> Git Commit ──> GitHub Repo ──> GitHub Actions (CI)
│
▼
Kubernetes <── Helm Release <── Docker Hub <── Docker Image Build
│
Running Production Application

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React |
| **Runtime** | Node.js |
| **Package Manager** | npm |
| **Version Control** | Git & GitHub |
| **Containerization** | Docker |
| **Image Registry** | Docker Hub |
| **CI Automation** | GitHub Actions |
| **Orchestration** | Kubernetes |
| **Package Manager** | Helm |
| **Infrastructure as Code** | Terraform |
| **Future Cloud Target** | Microsoft Azure (AKS) |

---

## 📂 Project Structure


Google_keep/
├── .github/
│   └── workflows/
│       └── react-ci.yml       # GitHub Actions CI Workflow
├── google-keep-chart/         # Custom Helm Chart
│   ├── Chart.yaml
│   ├── values.yaml
│   └── templates/
├── terraform-demo/            # Infrastructure as Code Files
│   ├── main.tf
│   └── terraform.tfstate
├── public/
├── src/
├── Dockerfile                 # Multi-stage build configurations
├── package.json
├── deployment.yaml            # K8s Deployment Manifest
├── service.yaml               # K8s Service Manifest
└── README.md

Features
✅ React Google Keep Application - 

✅ Dockerized Application - Portable deployment artifacts.

✅ Automated GitHub Actions CI Pipeline - Automated builds on code push.

✅ Kubernetes Manifests - Production-ready scaling and self-healing.

✅ Zero-Downtime Rolling Updates - Safe upgrades without breaking uptime.

✅ Instant Rollback Support - Safe rollbacks if bugs escape to cluster.

✅ Helm Charts Integration - Templatized cloud-native packaging.

✅ Terraform State Management - Basic foundational setup for IaC environments.

Installation & Setup Guide
1️⃣ Clone the Repository
Bash
git clone [https://github.com/RamneeshMaurya/Google_keep.git](https://github.com/RamneeshMaurya/Google_keep.git)
cd Google_keep

Install Dependencies
Bash
npm install
3️⃣ Run the Application Locally
Bash
npm start
The application will start locally at: http://localhost:3000

🐳 Docker Workflow
Build Docker Image
Bash
docker build -t ramneeshmaurya/google-keep-app:v1 .
Verify Local Images
Bash
docker images
Run Containerized App Locally
Bash
docker run -d -p 3000:3000 ramneeshmaurya/google-keep-app:v1
Docker Management Commands
Bash
docker ps                       # View running containers
docker stop <container-id>      # Stop running container
docker rm <container-id>        # Remove container
Image Distribution (Docker Hub)
Bash
docker login
docker push ramneeshmaurya/google-keep-app:v1
docker push ramneeshmaurya/google-keep-app:v2
☸️ Kubernetes Deployment & Orchestration
Deploy Core Components
Bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
Inspection Commands
Bash
kubectl get deployments
kubectl get pods -w             # Watch pods change state in real-time
kubectl get svc                 # Fetch assigned IP/Ports
kubectl describe deployment google-keep
kubectl logs <pod-name>
📈 Manual Scaling
Scale up instances dynamically to handle traffic surges:

Bash
kubectl scale deployment google-keep --replicas=5
kubectl get pods
🔄 Zero-Downtime Rolling Update
Deploying version 2 smoothly without bringing the app down:

Bash
kubectl set image deployment/google-keep google-keep=ramneeshmaurya/google-keep-app:v2
kubectl rollout status deployment/google-keep
⏪ Instant Rollback
Instantly return to previous safe version if deployment breaks:

Bash
kubectl rollout undo deployment/google-keep
kubectl rollout history deployment/google-keep
⛵ Helm Package Management
Manage applications uniformly via Kubernetes Helm releases.

Bash
helm install google-keep ./google-keep-chart   # Install Chart
helm upgrade google-keep ./google-keep-chart   # Upgrade Chart Configuration
helm list                                      # View active releases
helm status google-keep                        # Detailed installation status
helm uninstall google-keep                     # Completely purge components
🔄 GitHub Actions (CI Pipeline)
Every code change pushed to the main branch undergoes automated rigorous validations:

Source Code Checkout via Git GitHub Actions Runners.

Node.js Environment Injection & dependency validations.

React Project Compilation tests (npm run build).

Docker Image Creation tagged natively.

Docker Hub Authentication & secure registry push.

🔐 Repository Secrets Used
Ensure the following variables are configured under repository settings:

DOCKER_USERNAME - Docker Hub account identity.

DOCKER_PASSWORD - Secure personal access token (PAT).

🌍 Terraform (Infrastructure as Code)
Used to manage system configurations declarative style:

Bash
cd terraform-demo
terraform init      # Initialize plugins
terraform plan      # Preview environment additions
terraform apply     # Provision infrastructure blocks
terraform destroy   # Tear down environment cleanly
👨‍💻 Author
Ramneesh Maurya

Role: Aspiring DevOps Engineer | Azure Enthusiast | Kubernetes Learner | Terraform Learner

GitHub Profile: @RamneeshMaurya
