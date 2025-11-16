variable "hcloud_token" {
  description = "Hetzner Cloud API token"
  type        = string
  sensitive   = true
}

variable "cluster_name" {
  description = "Name of the Kubernetes cluster"
  type        = string
  default     = "kobecloud-prod"
}

variable "node_count" {
  description = "Number of worker nodes"
  type        = number
  default     = 3
}

variable "node_type" {
  description = "Hetzner Cloud server type"
  type        = string
  default     = "cx21"  # 2 vCPU, 4GB RAM
}

variable "location" {
  description = "Hetzner Cloud location"
  type        = string
  default     = "nbg1"  # Nuremberg
}

variable "kubeconfig_path" {
  description = "Path to kubeconfig file"
  type        = string
  default     = "~/.kube/config"
}

variable "domain" {
  description = "Domain name for the application"
  type        = string
  default     = "kobecloud.pl"
}

variable "environment" {
  description = "Environment name (production, staging, development)"
  type        = string
  default     = "production"
}

variable "monitoring_enabled" {
  description = "Enable Prometheus/Grafana monitoring stack"
  type        = bool
  default     = true
}

variable "argocd_enabled" {
  description = "Enable ArgoCD for GitOps"
  type        = bool
  default     = true
}
