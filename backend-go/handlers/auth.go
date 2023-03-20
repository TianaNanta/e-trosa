package handlers

import (
	"fmt"
	"strconv"
	"time"

	"github.com/TianaNanta/e-trosa/backend-go/config"
	"github.com/TianaNanta/e-trosa/backend-go/database"
	"github.com/TianaNanta/e-trosa/backend-go/models"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
)

var jwtKey = []byte(config.Config("JWT_SECRET"))

// Check password hash
func CheckPasswordHash(password string, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

// LoginUser route logins a user in the app
func Login(c *fiber.Ctx) error {
	// input
	// identity := c.FormValue("identity")
	// password := c.FormValue("password")
	type inputLogin struct {
		Identity string `json:"identity"`
		Password string `json:"password"`
	}
	var input inputLogin

	// check if identity is email or username
	if err := c.BodyParser(&input); err != nil {
		return c.JSON(fiber.Map{"error": true, "general": "Invalid Credentials."})
	}

	// find user
	var u models.User
	if err := database.DB.Where("username = ?", input.Identity).First(&u).Error; err != nil {
		if err := database.DB.Where("email = ?", input.Identity).First(&u).Error; err != nil {
			return c.JSON(fiber.Map{"error": true, "general": "Invalid Credentials."})
		}
	}

	// Check if password is correct
	if !CheckPasswordHash(input.Password, u.Password) {
		return c.JSON(fiber.Map{"error": true, "general": "Invalid Credentials."})
	}

	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)
	claims["username"] = u.Username
	claims["user_id"] = u.ID
	claims["exp"] = time.Now().Add(time.Minute * 30).Unix()

	t, err := token.SignedString(jwtKey)
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.JSON(fiber.Map{"status": "success", "message": "Success login", "token": t})
}

// get user id from token
func GetUserID(c *fiber.Ctx) int {
	token := c.Locals("user").(*jwt.Token)
	claims := token.Claims.(jwt.MapClaims)
	user_id := fmt.Sprintf("%v", claims["user_id"])
	id, _ := strconv.Atoi(user_id)
	return id
}

// get username from token
func GetUserName(c *fiber.Ctx) string {
	token := c.Locals("user").(*jwt.Token)
	claims := token.Claims.(jwt.MapClaims)
	username := fmt.Sprintf("%v", claims["username"])
	return username
}
