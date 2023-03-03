package main

import (
	"log"

	"github.com/TianaNanta/e-trosa/backend-go/database"
	"github.com/TianaNanta/e-trosa/backend-go/models"
)

func init() {
	database.ConnectDB()
}

func main() {
	db := database.Database.Db
	log.Println("Running migration")
	db.AutoMigrate(
		&models.User{},
		&models.Trosa{},
	)
}
