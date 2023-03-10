package models

import (
	"gorm.io/gorm"
)

type Trosa struct {
	gorm.Model
	Amount int    `json:"amount"`
	Owner  string `json:"owner" gorm:"not null; index; references:ID"`
	InDept string `json:"in_dept" gorm:"not null; index; references:ID"`
	Note   string `json:"note"`
}
