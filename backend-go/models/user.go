package models

import "time"

type User struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Username  string    `json:"username" gorm:"uniqueIndex ; not null"`
	Email     string    `json:"email" gorm:"uniqueIndex"`
	Password  string    `json:"password"`
	Avatar    string    `json:"avatar"`
	CreatedAt time.Time `json:"created_at"`
	TrosaOwn  []Trosa   `json:"trosa_own" gorm:"foreignKey:Owner"`
	TrosaDept []Trosa   `json:"trosa_dept" gorm:"foreignKey:InDept"`
}
