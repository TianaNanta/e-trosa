package initialize

import (
	"log"
	"os"

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
	dsn := os.Getenv("DB_URL")
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to database")
	}

	log.Println("Connected to database")
	db.Logger = logger.Default.LogMode(logger.Info)
	log.Println("Running migrations")

	// TODO: Run migrations
	Database = DbInstance{Db: db}
}
