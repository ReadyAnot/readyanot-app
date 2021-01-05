#!/usr/bin/env bash

ReadyAnotPg=$(aws secretsmanager get-secret-value --secret-id $"prod/ReadyAnot/PostgreSQL" | jq -r ".SecretString")

username=$(jq ".username" <<< $ReadyAnotPg | tr -d \")
password=$(jq ".password" <<< $ReadyAnotPg | tr -d \")
host=$(jq ".host" <<< $ReadyAnotPg | tr -d \")
port=$(jq ".port" <<< $ReadyAnotPg | tr -d \")

rm -rf .env
echo DATABASE_URL=\"postgresql://$username:$password@$host:$port/postgres?schema=public\" >> .env
