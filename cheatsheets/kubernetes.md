# Kubernetes

## Check that a pod exists

```bash
kubectl get pod <pod-name> -n <namespace>
```

## Open a shell in a pod

```bash
kubectl exec --stdin --tty <pod-name> -n <namespace> -- /bin/sh
```
