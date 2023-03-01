package main

import (
	"net/http"

	"github.com/TianaNanta/e-trosa/backend-go/initialize"
	"github.com/gin-gonic/gin"
)

func init() {
	// Load .env file
	initialize.LoadEnvVariables()
	initialize.ConnectToDB()
}

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}
