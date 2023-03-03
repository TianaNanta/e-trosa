package controllers

import (
	"github.com/TianaNanta/e-trosa/backend-go/database"
	"github.com/TianaNanta/e-trosa/backend-go/models"
	"github.com/gofiber/fiber/v2"
)

// get all trosa for the connected user_owner
func GetTrosaOwner(c *fiber.Ctx) error {
	// get trosa by user id
	var trosa []models.Trosa
	id, err := GetUserID(c)
	if err != nil {
		return err
	}
	database.Database.Db.Where("owner_id = ?", id).Find(&trosa)
	return c.JSON(trosa)
}

// get all trosa for the connected user_indept
func GetTrosaInDept(c *fiber.Ctx) error {
	// get trosa by user id
	var trosa []models.Trosa
	id, err := GetUserID(c)
	if err != nil {
		return err
	}
	database.Database.Db.Where("in_dept_id = ?", id).Find(&trosa)
	return c.JSON(trosa)
}

// add trosa
func AddTrosa(c *fiber.Ctx) error {
	// new trosa
	trosa := new(models.Trosa)
	if err := c.BodyParser(trosa); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Review your input", "data": err})
	}

	// database
	db := database.Database.Db

	// get user id from cookie
	id, er := GetUserID(c)
	if er != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Unauthorized",
		})
	}

	// set owner refer
	trosa.OwnerID = id

	// check if the user in dept exist
	var user models.User
	if er := db.Find(&user, trosa.InDeptID).Error; er != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "UserInDept not found",
		})
	}

	// check if the indeptID exist in the user
	if user.ID != uint(trosa.InDeptID) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "UserInDept not found",
		})
	}

	// check if the user in dept is the same as the owner
	if trosa.InDeptID == trosa.OwnerID {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "UserInDept cannot be the same as the owner",
		})
	}

	// create trosaOwn and trosaDept if there is no error for the two
	if eror := db.Create(&trosa).Error; eror != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Error on create trosa", "data": eror})
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Trosa created",
		"data":    trosa,
	})
}

// get all trosa total amount for the connected user_owner
func GetMoney(c *fiber.Ctx) error {
	// get trosa by user id
	var trosa []models.Trosa
	id, err := GetUserID(c)
	if err != nil {
		return err
	}
	database.Database.Db.Where("owner_id = ?", id).Find(&trosa)

	// get total amount
	var t models.Trosa
	t.Amount = 0

	for _, v := range trosa {
		t.Amount += v.Amount
	}

	return c.JSON(t.Amount)
}

// get all trosa total amount for the connected user_indept
func GetDept(c *fiber.Ctx) error {
	// get trosa by user id
	var trosa []models.Trosa
	id, err := GetUserID(c)
	if err != nil {
		return err
	}
	database.Database.Db.Where("in_dept_id = ?", id).Find(&trosa)

	// get total amount
	var t models.Trosa
	t.Amount = 0

	for _, v := range trosa {
		t.Amount += v.Amount
	}

	return c.JSON(t.Amount)
}

// if the user is the owner, he can delete the trosa
func DeleteTrosa(c *fiber.Ctx) error {
	// get trosa by id
	var trosa models.Trosa
	id, err := GetUserID(c)
	if err != nil {
		return err
	}
	database.Database.Db.Where("id = ?", c.Params("id")).Find(&trosa)

	// check if the trosa exist
	if trosa.ID == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Trosa not found",
		})
	}

	// check if the user is the owner
	if trosa.OwnerID != id {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Unauthorized",
		})
	}

	// delete trosa
	database.Database.Db.Delete(&trosa)

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Trosa deleted",
		"data":    trosa,
	})
}

// if the user is the owner, he can update the trosa amount
func UpdateTrosaAmount(c *fiber.Ctx) error {
	type TrosaAmount struct {
		AmountPaid int `json:"amount_paid"`
	}
	var trosaAmount TrosaAmount
	if err := c.BodyParser(&trosaAmount); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Review your input", "data": err})
	}

	// get trosa by id
	var trosa models.Trosa
	id, err := GetUserID(c)
	if err != nil {
		return err
	}
	database.Database.Db.Where("id = ?", c.Params("id")).Find(&trosa)

	// check if the trosa exist
	if trosa.ID == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Trosa not found",
		})
	}

	// check if the user is the owner
	if trosa.OwnerID != id {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Unauthorized",
		})
	}

	// update trosa amount
	database.Database.Db.Model(&trosa).Update("amount", trosa.Amount-trosaAmount.AmountPaid)

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Trosa updated",
		"data":    trosa,
	})
}

// get all given user_id trosa for the connected user_owner
func GetTrosaOfTheUserID(c *fiber.Ctx) error {
	// get trosa by user id
	var trosa []models.Trosa
	id, err := GetUserID(c)
	if err != nil {
		return err
	}
	// in_dept_id is the user_id
	user_id := c.Params("id")

	// check if the user exist
	var user models.User
	database.Database.Db.Where("id = ?", user_id).Find(&user)
	if user.ID == 0 {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	database.Database.Db.Where("owner_id = ? AND in_dept_id = ?", id, user_id).Find(&trosa)

	// get total amount
	var t models.Trosa
	t.Amount = 0

	for _, v := range trosa {
		t.Amount += v.Amount
	}

	return c.JSON(t.Amount)
}

// calculate the amount
func Money(c *fiber.Ctx) error {
	// get trosa by user id
	var trosa []models.Trosa
	id, err := GetUserID(c)
	if err != nil {
		return err
	}
	database.Database.Db.Where("owner_id = ?", id).Find(&trosa)

	// get total amount
	var t models.Trosa
	t.Amount = 0

	for _, v := range trosa {
		t.Amount += v.Amount
	}

	// get trosa by user id
	var trosa2 []models.Trosa
	database.Database.Db.Where("in_dept_id = ?", id).Find(&trosa2)

	// get total amount
	var t2 models.Trosa
	t2.Amount = 0

	for _, v := range trosa2 {
		t2.Amount += v.Amount
	}

	// if t.Amount > t2.Amount, return my money is t.Amount - t2.Amount
	if t.Amount >= t2.Amount {
		amount := t.Amount - t2.Amount
		return c.JSON(fiber.Map{
			"status":  "success",
			"message": "My money",
			"data":    amount,
		})
	} else {
		amount := t2.Amount - t.Amount
		return c.JSON(fiber.Map{
			"status":  "success",
			"message": "My dept",
			"data":    amount,
		})
	}
}
