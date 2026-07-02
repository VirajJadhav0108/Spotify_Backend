# 🎵 Spotify Backend Clone

A scalable RESTful backend inspired by Spotify, built using **Node.js**, **Express.js**, and **MongoDB**. The project implements user authentication using JWT, music and album management, and secure APIs following MVC architecture.

---

## 🚀 Features

- 🔐 User Authentication
  - User Registration
  - User Login
  - Secure Logout
  - JWT Authentication
  - Password Hashing using bcrypt

- 🎵 Music Management
  - Upload Music
  - Retrieve Songs
  - Update Song Details
  - Delete Songs

- 💿 Album Management
  - Create Albums
  - Associate Songs with Albums
  - Fetch Album Details

- 🛡 Protected Routes
  - JWT Middleware
  - Authorization for authenticated users

- 📂 File Storage Support
  - Upload audio files
  - Store metadata in MongoDB

---

## 🏗 Project Structure

```
Spotify-Backend/
│
├── src/
│   ├── controller/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── music.model.js
│   │   └── album.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   │
│   ├── services/
│   │   └── storage.service.js
│   │
│   └── app.js
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcrypt | Password Encryption |
| dotenv | Environment Variables |

---

## ⚙ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/spotify-backend.git

cd spotify-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### 4. Run the server

```bash
npm run dev
```

or

```bash
node server.js
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user |
| POST | `/auth/logout` | Logout user |

---

### Music

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/music` | Upload a song |
| GET | `/music` | Get all songs |
| GET | `/music/:id` | Get song by ID |
| PUT | `/music/:id` | Update song |
| DELETE | `/music/:id` | Delete song |

---

## 🔐 Authentication

Protected routes require a valid JWT token.

Example:

```
Authorization: Bearer <your_jwt_token>
```

---

## 📸 Screenshots

You can add Postman screenshots or API responses here.

Example:

```
/screenshots

├── register.png
├── login.png
├── upload-song.png
```

---

## 📈 Future Improvements

- Playlist Management
- Like Songs
- Recently Played
- Search Functionality
- Artist Profiles
- Streaming Support
- Swagger API Documentation
- Unit Testing with Jest
- Docker Support

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Viraj Jadhav**

- B.Tech Civil Engineering (Minor in Machine Learning & Data Science)
- Indian Institute of Technology Bombay

GitHub: https://github.com/your-username

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
