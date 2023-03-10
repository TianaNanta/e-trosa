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
		AppName:       "E-Trosa",
		BodyLimit:     1024 * 1024 * 50,
	})
	app.Use(cors.New())
	app.Static("/", "./static/public")

	router.SetupRoutes(app)

	// 404 handler
	app.Use(func(c *fiber.Ctx) error {
		c.Status(fiber.StatusNotFound)
		return c.SendFile("./static/private/404.html")
	})

	log.Fatal(app.Listen(":" + config.Config("PORT")))
}
