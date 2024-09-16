import dotenv from "dotenv"

dotenv.config()

const requiredEnvs = ["MONGO_URI", "JWT_SECRET", "JWT_LIFETIME", "NODE_ENV"]

const missingEnvs = requiredEnvs.filter(env => !process.env[env])

if (missingEnvs.length > 0) {
    const errorMsg = `The following env variables are missing: ${missingEnvs.join(", ")}`

    throw new Error(errorMsg)
}

export default {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_LIFETIME: process.env.JWT_LIFETIME,
    NODE_ENV: process.env.NODE_ENV
}