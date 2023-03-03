package controllers

import (
	"errors"
	"net/mail"
	"time"

	"github.com/TianaNanta/e-trosa/backend-go/config"
	"github.com/TianaNanta/e-trosa/backend-go/database"
	"github.com/TianaNanta/e-trosa/backend-go/models"

	"gorm.io/gorm"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
)

// check password hash
func CheckPasswordHash(password string, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

// get user by email
func getUserByEmail(email string) (*models.User, error) {
	var user models.User
	if err := database.Database.Db.Where("email = ?", email).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, err
	}
	return &user, nil
}

// get user by username
func getUserByUsername(username string) (*models.User, error) {
	var user models.User
	if err := database.Database.Db.Where("username = ?", username).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, err
	}
	return &user, nil
}

// email validation
func valid(email string) bool {
	_, err := mail.ParseAddress(email)
	return err == nil
}

// login get user and password
func Login(c *fiber.Ctx) error {
	type LoginInput struct {
		Identity string `json:"identity"`
		Password string `json:"password"`
	}
	type UserData struct {
		ID       uint   `json:"id"`
		Username string `json:"username"`
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	input := new(LoginInput)
	var ud UserData

	if err := c.BodyParser(&input); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "error", "message": "Error on login request", "data": err})
	}

	identity := input.Identity
	pass := input.Password

	// check if email or username
	if valid(identity) {
		// get user by email
		user, err := getUserByEmail(identity)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Error on login request", "data": err})
		}
		if user == nil {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "Invalid email", "data": nil})
		}
		ud = UserData{
			ID:       user.ID,
			Username: user.Username,
			Email:    user.Email,
			Password: user.Password,
		}
	} else {
		// get user by username
		user, err := getUserByUsername(identity)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Error on login request", "data": err})
		}
		if user == nil {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "Invalid username", "data": nil})
		}
		ud = UserData{
			ID:       user.ID,
			Username: user.Username,
			Email:    user.Email,
			Password: user.Password,
		}
	}

	if !CheckPasswordHash(pass, ud.Password) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "Invalid password", "data": nil})
	}

	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)
	claims["username"] = ud.Username
	claims["user_id"] = ud.ID
	claims["exp"] = time.Now().Add(time.Hour).Unix()

	t, err := token.SignedString([]byte(config.Config("JWT_SECRET")))
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	// make cookie
	// cookie := new(fiber.Cookie)
	cookie := &fiber.Cookie{
		Name:     "jwt",
		Value:    t,
		Expires:  time.Now().Add(time.Hour),
		HTTPOnly: true,
	}
	c.Cookie(cookie)

	return c.JSON(fiber.Map{"status": "success", "message": "Success login"})
}

// logout to delete cookie
func Logout(c *fiber.Ctx) error {
	cookie := &fiber.Cookie{
		Name:     "jwt",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}
	c.Cookie(cookie)
	return c.JSON(fiber.Map{"status": "success", "message": "Success logout"})
}
