package router

import (
	"github.com/TianaNanta/e-trosa/backend-go/controllers"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

// SetupRoutes func
func SetupRoutes(app *fiber.App) {
	api := app.Group("/api", logger.New())
	api.Get("/", controllers.Hello)

	user := api.Group("/users")
	trosa := api.Group("/trosa")

	// User routes
	user.Get("/", controllers.GetAllUsers)
	user.Get("/:id<int>", controllers.GetUser)
	user.Get("/me", controllers.GetMe)

	user.Post("/", controllers.SignUp)
	user.Post("/login", controllers.Login)
	user.Post("/logout", controllers.Logout)

	user.Patch("/me/update", controllers.UpdateUser)

	user.Delete("/me/delete", controllers.DeleteUser)

	// Trosa routes
	trosa.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Trosa")
	})
	trosa.Get("/mymoney", controllers.GetMoney)
	trosa.Get("/mydept", controllers.GetDept)
	trosa.Get("/history/mymoney", controllers.GetTrosaOwner)
	trosa.Get("/history/mydept", controllers.GetTrosaInDept)

	trosa.Post("/add", controllers.AddTrosa)

	// Protected routes
	// trosa.Use(middleware.Protected())
	// trosa.Get("/me", controllers.Me)
}
