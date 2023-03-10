package middleware

import (
	"github.com/TianaNanta/e-trosa/backend-go/config"
	"github.com/gofiber/fiber/v2"
	jwtware "github.com/gofiber/jwt/v3"
)

var jwtKey = []byte(config.Config("JWT_SECRET"))

// Auth middleware
func Protected() fiber.Handler {
	return jwtware.New(jwtware.Config{
		SigningKey:   jwtKey,
		ErrorHandler: jwtError,
	})
}

func jwtError(c *fiber.Ctx, err error) error {
	if err.Error() == "Missing or malformed JWT" {
		return c.Status(401).JSON(fiber.Map{
			"message": "Missing or malformed JWT",
		})
	}
	return c.Status(500).JSON(fiber.Map{
		"message": "Invalid or expired JWT",
	})
}
