package router

import (
	"github.com/TianaNanta/e-trosa/backend-go/controllers"
	"github.com/TianaNanta/e-trosa/backend-go/middleware"
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
	user.Get("/me", middleware.Protected(), controllers.GetMe)

	user.Post("/", controllers.SignUp)
	user.Post("/login", controllers.Login)

	user.Patch("/me/update", middleware.Protected(), controllers.UpdateUser)

	user.Delete("/me/delete", middleware.Protected(), controllers.DeleteUser)

	// Trosa routes
	trosa.Get("/money", controllers.Money)
	trosa.Get("/money/:id<int>", controllers.GetMoneyFromUserID)
	trosa.Get("/me/money", controllers.GetMoney)
	trosa.Get("/me/dept", controllers.GetDept)
	trosa.Get("/me/dept/:user_id<int>", controllers.GetTrosaOfTheUserID)
	trosa.Get("/history/money", controllers.GetTrosaOwner)
	trosa.Get("/history/dept", controllers.GetTrosaInDept)

	trosa.Post("/add", controllers.AddTrosa)

	trosa.Patch("/update/:id<int>", controllers.UpdateTrosaAmount)

	trosa.Delete("/delete/:id<int>", controllers.DeleteTrosa)
}
