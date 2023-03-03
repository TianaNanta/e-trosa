package config

import (
	"os"

	"github.com/joho/godotenv"
)

// config func to get env value
func Config(key string) string {
	err := godotenv.Load(".env")
	if err != nil {
		panic("Error loading .env file")
	}
	return os.Getenv(key)
}
