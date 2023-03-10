package router

import (
	"github.com/TianaNanta/e-trosa/backend-go/handlers"
	"github.com/TianaNanta/e-trosa/backend-go/middleware"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

// SetupRoutes func
func SetupRoutes(app *fiber.App) {
	api := app.Group("/api", logger.New())
	api.Get("/", handlers.Hello)

	user := api.Group("/users")
	trosa := api.Group("/trosa")

	// serve static files
	user.Static("/avatar", "./static/public/avatars")

	// User routes
	user.Get("/", handlers.GetAllUsers)
	user.Get("/:id<int>", handlers.GetUser)
	user.Get("/me", middleware.Protected(), handlers.GetMe)

	user.Post("/", handlers.SignUp)
	user.Post("/login", handlers.Login)

	user.Patch("/me/update", middleware.Protected(), handlers.UpdateUser)

	user.Delete("/me/delete", middleware.Protected(), handlers.DeleteUser)

	// Trosa routes
	trosa.Get("/money", middleware.Protected(), handlers.Money)
	trosa.Get("/money/:id<int>", middleware.Protected(), handlers.GetMoneyFromUserID)
	trosa.Get("/me/money", middleware.Protected(), handlers.GetMoney)
	trosa.Get("/me/dept", middleware.Protected(), handlers.GetDept)
	trosa.Get("/me/dept/:user_id<int>", middleware.Protected(), handlers.GetTrosaOfTheUserID)
	trosa.Get("/history/money", middleware.Protected(), handlers.GetTrosaOwner)
	trosa.Get("/history/dept", middleware.Protected(), handlers.GetTrosaInDept)

	trosa.Post("/add", middleware.Protected(), handlers.AddTrosa)

	trosa.Patch("/update/:id<int>", middleware.Protected(), handlers.UpdateTrosaAmount)

	trosa.Delete("/delete/:id<int>", middleware.Protected(), handlers.DeleteTrosa)
}
