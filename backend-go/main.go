package main

import (
	"log"
	"os"

	"github.com/TianaNanta/e-trosa/backend-go/controllers"
	"github.com/TianaNanta/e-trosa/backend-go/initialize"
	"github.com/gofiber/fiber/v2"
)

func init() {
	initialize.LoadEnvVariables()
	initialize.ConnectDB()
}

func main() {
	app := fiber.New(fiber.Config{
		CaseSensitive: true,
		AppName:       "Trosa",
	})
	api := app.Group("/api")
	user := api.Group("/users")
	trosa := api.Group("/trosa")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	// User routes
	user.Get("/", controllers.GetAllUsers)
	user.Get("/:id", controllers.GetUser)

	user.Post("/", controllers.SignUp)

	// Trosa routes
	trosa.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Trosa")
	})

	log.Fatal(app.Listen(":" + os.Getenv("PORT")))
}
