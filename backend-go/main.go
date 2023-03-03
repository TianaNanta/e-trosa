package main

import (
	"log"

	"github.com/TianaNanta/e-trosa/backend-go/config"
	"github.com/TianaNanta/e-trosa/backend-go/database"
	"github.com/TianaNanta/e-trosa/backend-go/router"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func init() {
	database.ConnectDB()
}

func main() {
	app := fiber.New(fiber.Config{
		CaseSensitive: true,
		AppName:       "Trosa",
	})
	app.Use(cors.New())

	router.SetupRoutes(app)

	log.Fatal(app.Listen(":" + config.Config("PORT")))
}
