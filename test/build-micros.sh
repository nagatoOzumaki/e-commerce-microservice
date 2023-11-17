docker build -t mclient:1 -f mclientui/Dockerfile  mclientui/
docker build -t mgateway:1 -f gateway/Dockerfile  gateway/
docker build -t mproduct:1 -f mproducts/Dockerfile  mproducts/
docker build -t morder:1 -f mcommandes/Dockerfile  mcommandes/
docker build -t mpayment:1 -f mpayment/Dockerfile  mpayment/
docker build -t memail:1 -f memailing/Dockerfile  memailing/

