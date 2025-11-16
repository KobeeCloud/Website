output "cluster_endpoint" {
  description = "Kubernetes cluster endpoint"
  value       = "Configure after cluster creation"
}

output "argocd_url" {
  description = "ArgoCD web UI URL"
  value       = var.argocd_enabled ? "https://argocd.${var.domain}" : "Not enabled"
}

output "grafana_url" {
  description = "Grafana web UI URL"
  value       = var.monitoring_enabled ? "https://grafana.${var.domain}" : "Not enabled"
}

output "application_url" {
  description = "Application URL"
  value       = "https://${var.domain}"
}

output "next_steps" {
  description = "Next steps after infrastructure creation"
  value       = <<-EOT
    Infrastructure created successfully!

    Next steps:
    1. Configure kubectl: export KUBECONFIG=./kubeconfig
    2. Verify cluster: kubectl get nodes
    3. Deploy ArgoCD: kubectl apply -k gitops/argocd/
    4. Access ArgoCD: kubectl port-forward svc/argocd-server -n argocd 8080:443
    5. Get ArgoCD password: kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
    6. Create Application in ArgoCD pointing to gitops/apps/

    Monitoring:
    - Grafana: https://grafana.${var.domain}
    - Prometheus: https://prometheus.${var.domain}

    Documentation: https://github.com/ConceptSamchodyZUSA/Website/blob/main/README.md
  EOT
}
