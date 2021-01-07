const getEnv = (key: string, required: boolean = true): string => {
  const value = process.env[key]
  if (!value && required) {
    console.error('Required environment variable HOSTNAME is not set')
    process.exit(1)
  }
  return value
}

export default getEnv
