package models

import (
	"gorm.io/gorm"
)

type Trosa struct {
	gorm.Model
	Amount   int    `json:"amount"`
	OwnerID  int    `json:"owner_id" gorm:"not null; index; references:ID"`
	InDeptID int    `json:"in_dept_id" gorm:"not null; index; references:ID"`
	Note     string `json:"note"`
}
