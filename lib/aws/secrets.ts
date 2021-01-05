import AWS from 'aws-sdk'

export enum Secret {
  Postgres = 'prod/ReadyAnot/PostgreSQL',
}

export type PostgresSecretType = {
  username: string
  password: string
  engine: string
  host: string
  port: number
  dbInstanceIdentifier: string
}

const client = new AWS.SecretsManager({ region: 'ap-southeast-1' })

const getAwsSecret = async (secretName: Secret) => {
  try {
    const result = await client
      .getSecretValue({ SecretId: secretName })
      .promise()
    if (result.SecretString) {
      const secret = JSON.parse(result.SecretString)
      return secret
    }
  } catch (err) {
    console.error(`Error fetching AWS secret [${secretName}]: ${err.code}`)
    process.exit(1)
  }
}

export default getAwsSecret
