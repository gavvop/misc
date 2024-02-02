# K8s

### verify that the pod exists

<code>kubectl get pod \<podname\> -n \<namespace\></code>

### spawn a shell into the pod

<code>kubectl exec --stdin --tty \<podname> -n \<namespace\> -- /bin/sh</code>

