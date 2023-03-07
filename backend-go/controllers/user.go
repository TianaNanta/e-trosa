package controllers

import (
	"github.com/TianaNanta/e-trosa/backend-go/database"
	"github.com/TianaNanta/e-trosa/backend-go/models"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	ID       uint   `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

// response user
func CreateResponseUser(user models.User) User {
	return User{
		ID:       user.ID,
		Username: user.Username,
		Email:    user.Email,
	}
}

// hash password func
func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

// valid user
func validUser(id int, password string) bool {
	var user models.User
	database.Database.Db.Find(&user, id)
	if user.Username == "" {
		return false
	}
	if !CheckPasswordHash(password, user.Password) {
		return false
	}
	return true
}

// get me
func GetMe(c *fiber.Ctx) error {
	// get user id from token
	id := GetUserID(c)

	// get user by id
	var user models.User
	database.Database.Db.Find(&user, id)
	responseUser := CreateResponseUser(user)

	return c.JSON(responseUser)
}

// get user by id
func GetUser(c *fiber.Ctx) error {
	id := c.Params("id")
	var user models.User
	err := database.Database.Db.Find(&user, id).Error
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "User not found",
		})
	}
	responseUser := CreateResponseUser(user)

	return c.JSON(responseUser)
}

// get all users
func GetAllUsers(c *fiber.Ctx) error {
	var users []models.User
	database.Database.Db.Find(&users)
	var responseUsers []User
	for _, user := range users {
		responseUsers = append(responseUsers, CreateResponseUser(user))
	}

	return c.JSON(responseUsers)
}

// SignUp new user
func SignUp(c *fiber.Ctx) error {
	type NewUser struct {
		Username string `json:"username"`
		Email    string `json:"email"`
	}

	db := database.Database.Db
	user := new(models.User)
	if err := c.BodyParser(user); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Review your input", "data": err})
	}

	hash, err := hashPassword(user.Password)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Couldn't hash password", "data": err})

	}

	user.Password = hash
	if err := db.Create(&user).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Couldn't create user", "data": err})
	}

	newUser := NewUser{
		Username: user.Username,
		Email:    user.Email,
	}

	return c.JSON(fiber.Map{"status": "success", "message": "Created user", "data": newUser})
}

// update user
func UpdateUser(c *fiber.Ctx) error {
	type UpdateUserInput struct {
		OldPassword string `json:"old_password"`
		NewPassword string `json:"new_password"`
		ConfirmPass string `json:"confirm_pass"`
	}
	var uui UpdateUserInput
	if err := c.BodyParser(&uui); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Review your input", "data": err})
	}

	// get user id from token
	id := GetUserID(c)

	db := database.Database.Db
	var user models.User

	db.First(&user, id)

	// check old password
	if !validUser(id, uui.OldPassword) {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Invalid old password", "data": nil})
	}

	// check new password and confirm password
	if uui.NewPassword != uui.ConfirmPass {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "New password and confirm password not match", "data": nil})
	}

	db.Save(&user)

	responseUser := CreateResponseUser(user)

	return c.JSON(fiber.Map{"status": "success", "message": "User successfully updated", "data": responseUser})
}

// delete user
func DeleteUser(c *fiber.Ctx) error {
	type PasswordInput struct {
		Password string `json:"password"`
	}
	var pi PasswordInput
	if err := c.BodyParser(&pi); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Review your input", "data": err})
	}

	// get user id from token
	id := GetUserID(c)

	if !validUser(id, pi.Password) {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Invalid password", "data": nil})
	}

	db := database.Database.Db
	var user models.User

	db.First(&user, id)
	db.Delete(&user)

	return c.JSON(fiber.Map{"status": "success", "message": "User successfully deleted", "data": nil})
}

// get username by id
func GetUsernameByID(id int) string {
	var user models.User
	database.Database.Db.Find(&user, id)
	return user.Username
}
