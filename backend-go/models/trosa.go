package models

import (
	"gorm.io/gorm"
)

type Trosa struct {
	gorm.Model
	Amount      int    `json:"amount"`
	Note        string `json:"note"`
	OwnerRefer  int    `json:"user_id"`
	Owner       User   `json:"owner" gorm:"foreignKey:OwnerRefer"`
	InDeptRefer int    `json:"in_dept_id"`
	InDept      User   `json:"in_dept" gorm:"foreignKey:InDeptRefer"`
}
