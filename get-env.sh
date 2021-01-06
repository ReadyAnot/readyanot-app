#!/usr/bin/env bash

ReadyAnotPg=$(aws secretsmanager get-secret-value --secret-id $"prod/ReadyAnot/PostgreSQL" | jq -r ".SecretString")

username=$(jq ".username" <<< $ReadyAnotPg | tr -d \")
password=$(jq ".password" <<< $ReadyAnotPg | tr -d \")
host=$(jq ".host" <<< $ReadyAnotPg | tr -d \")
port=$(jq ".port" <<< $ReadyAnotPg | tr -d \")

rm -rf .env.development.local
rm -rf .env.production.local

echo DATABASE_URL=\"postgresql://$username:$password@$host:$port/readyanot-dev?schema=public\" >> .env.development.local
echo DATABASE_URL=\"postgresql://$username:$password@$host:$port/readyanot-prod?schema=public\" >> .env.production.local
