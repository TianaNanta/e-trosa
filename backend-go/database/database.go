package database

import (
	"fmt"
	"log"

	"github.com/TianaNanta/e-trosa/backend-go/config"
	"github.com/TianaNanta/e-trosa/backend-go/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// Db instance
type DbInstance struct {
	Db *gorm.DB
}

// DbInstance instance
var Database DbInstance

// Connect to database
func ConnectDB() {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", config.Config("DB_USER"), config.Config("DB_PASSWORD"), config.Config("DB_HOST"), config.Config("DB_PORT"), config.Config("DB_NAME"))
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to database")
	}

	log.Println("Connected to database")
	db.Logger = logger.Default.LogMode(logger.Info)

	// check if the database table exists
	// if not, create it
	log.Println("Checking database table")

	if !db.Migrator().HasTable(&models.User{}) {
		log.Println("Creating user table")
		db.Migrator().CreateTable(&models.User{})
	}
	if !db.Migrator().HasTable(&models.Trosa{}) {
		log.Println("Creating trosa table")
		db.Migrator().CreateTable(&models.Trosa{})
	}

	Database = DbInstance{Db: db}
}
