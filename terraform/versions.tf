terraform {
  required_version = ">= 1.6"

  required_providers {
    hcloud = {
      source  = "hetznercloud/hcloud"
      version = "~> 1.45"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.24"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.12"
    }
  }

  # Backend configuration - uncomment and configure for production
  # backend "s3" {
  #   bucket  = "kobecloud-terraform-state"
  #   key     = "production/terraform.tfstate"
  #   region  = "eu-central-1"
  #   encrypt = true
  # }
}

provider "hcloud" {
  token = var.hcloud_token
}

provider "kubernetes" {
  config_path = var.kubeconfig_path
}

provider "helm" {
  kubernetes {
    config_path = var.kubeconfig_path
  }
}
