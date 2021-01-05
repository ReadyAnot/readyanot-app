#!/usr/bin/env bash

APP_NAME="readyanot-app"
AWS_ECR_URL="363599773651.dkr.ecr.ap-southeast-1.amazonaws.com/readyanot-app"

set -e
docker build -t $APP_NAME .
docker tag $APP_NAME $AWS_ECR_URL/$APP_NAME
docker push $AWS_ECR_URL/$APP_NAME
