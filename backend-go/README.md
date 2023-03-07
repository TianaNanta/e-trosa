
# Backend Ampio

This is the backend of the application Ampio that will be presented on the 2nd Edition of the DevHunt organised by ENI Fianarantsoa.


## API Reference

### Users

#### Login

```http
  POST /api/users/login
```
```json
{
    "identity": "nanta", # username or email
    "password": "password"
}
```

#### SignUp

```http
  POST /api/users/signup
```
```json
{
    "username": "nanta",
    "email": "nanta@example.com",
    "password": "password",
    "avatar": "avatar.png"

}
```

#### Get all users

```http
  GET /api/users
```

#### Get user by id

```http
  GET /api/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of user to fetch |

#### Get current authenticated user

```http
  GET /api/users/me
```

#### Update user password

```http
  PATCH /api/users/update
```
```json
{
    "old_password": "",
    "new_password": "",
    "confirm_pass": ""
}
```

| Auth | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `jwt`      | `bearer` | **Required**. The user's token |

#### Get Avatar

```http
  GET /api/users/:id/avatar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. The id of the user |

#### Delete user
 ```http
   DELETE /api/users/me/delete
 ```

 ```json
 {
     "password": ""     # Required
 }
 ```

### Trosa (all operation here requires authenticated user)

#### List all Trosa
Return all money of the authenticated user
```http
  GET /api/trosa/me/money
```

#### List all dept

```http
  GET /api/trosa/me/dept
```


#### Get money of the user (check if he/she is in dept or not)

```http
  GET /api/trosa/money
```

#### Add new Trosa
```http
  POST /api/trosa/add
```
```json
{
    "amount": 5000
}
```
