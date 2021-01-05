#!/usr/bin/env bash

APP_NAME="readyanot-app"
AWS_ECR_URL="363599773651.dkr.ecr.ap-southeast-1.amazonaws.com"

set -e

# docker build -t $APP_NAME .
docker tag $APP_NAME $AWS_ECR_URL/$APP_NAME
docker login -u AWS -p $(aws ecr get-login-password --region ap-southeast-1) $AWS_ECR_URL
docker push $AWS_ECR_URL/$APP_NAME
