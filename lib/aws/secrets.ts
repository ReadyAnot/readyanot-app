import AWS from 'aws-sdk'

export enum Secret {
  Postgres = 'prod/ReadyAnot/PostgreSQL',
}

const client = new AWS.SecretsManager({ region: 'ap-southeast-1' })

const getAwsSecret = async (secretName: string) => {
  try {
    const result = await client
      .getSecretValue({ SecretId: secretName })
      .promise()
    if (result.SecretString) {
    }
  } catch (err) {
    console.error(`Error fetching AWS secret [${secretName}]: ${err.code}`)
    process.exit(1)
  }
}

export default getAwsSecret
