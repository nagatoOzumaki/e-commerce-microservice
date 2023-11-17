echo "client..."
kubectl apply -f client
echo "emailing..."
kubectl apply -f emailing
echo "gateway..."
kubectl apply -f gateway
echo "mongodb..."
kubectl apply -f mongodb
echo "order..."
kubectl apply -f order
echo "payment..."
kubectl apply -f payment
echo "product..."
kubectl apply -f product
echo "rabbitmq..."
kubectl apply -f rabbitmq
echo "mongodb..."
kubectl apply -f mongodb
echo "rabbitmq..."
kubectl apply -f rabbitmq

