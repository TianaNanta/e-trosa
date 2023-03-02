package controllers

import (
	"net/http"

	"github.com/TianaNanta/e-trosa/backend-go/initialize"
	"github.com/TianaNanta/e-trosa/backend-go/models"
	"github.com/gofiber/fiber/v2"
)

type User struct {
	ID       uint   `json:"id"`
	Username string `json:"username"`
}

// create response user
func CreateResponseUser(userModel models.User) User {
	return User{
		ID:       userModel.ID,
		Username: userModel.Username,
	}
}

// get all users
func GetAllUsers(c *fiber.Ctx) error {
	var users []models.User
	initialize.Database.Db.Find(&users)

	var responseUsers []User
	for _, user := range users {
		responseUsers = append(responseUsers, CreateResponseUser(user))
	}

	return c.JSON(responseUsers)
}

// get user by id
func GetUser(c *fiber.Ctx) error {
	id := c.Params("id")
	var user models.User
	err := initialize.Database.Db.Find(&user, id).Error
	if err != nil {
		return c.Status(http.StatusNotFound).JSON(fiber.Map{
			"message": "User not found",
		})
	}
	responseUser := CreateResponseUser(user)

	return c.JSON(responseUser)
}
