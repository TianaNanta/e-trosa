package database

import (
	"github.com/TianaNanta/e-trosa/backend-go/config"
	"github.com/TianaNanta/e-trosa/backend-go/models"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// Connect with database
func ConnectDB() {
	var err error
	DB, err = gorm.Open(sqlite.Open(config.Config("DB_NAME")+".db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema
	DB.AutoMigrate(
		&models.Trosa{},
		&models.User{},
	)
}
