interface DatabaseConfig {
    host: string
    port: string
    name: string
    username: string
    password: string
}

export interface AppConfig {
    port: 8080,
    dbConfig: DatabaseConfig
}
