<<<<<<< HEAD
# React Form Validation App

A simple and responsive **React Form Validation Application** that demonstrates how to validate user input using React Hooks, regular expressions (Regex), and client-side validation techniques.

## 🚀 Features

- ✅ Full Name Validation
- ✅ Email Validation using Regex
- ✅ Password Validation
- ✅ Confirm Password Validation
- ✅ Password Strength Rules
- ✅ Duplicate Email Check
- ✅ Toast Notifications
- ✅ Responsive UI with Tailwind CSS
- ✅ User List Display

---

## 📸 Preview

> Registration Form with validation and success notification.

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- React Hooks (`useState`)
- Tailwind CSS
- React Toastify

---

## 📂 Project Structure

```
src/
│
├── components/
│   └── User.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📋 Form Validation Rules

### Full Name

- Required
- Only alphabets and spaces allowed
- Minimum 3 characters

### Email

- Required
- Must be a valid email format

Example:

```
john@gmail.com
```

### Password

Password must contain:

- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character

Example:

```
Abc@1234
```

### Confirm Password

- Required
- Must match the Password field

---

## ✅ Regex Used

### Name

```javascript
/^[A-Za-z ]{3,40}$/
```

### Email

```javascript
/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
```

### Password

```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+])[A-Za-z\d@$!%*?&#^()_+]{8,}$/
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/react-form-validation.git
```

Go to project folder

```bash
cd react-form-validation
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

or (Create React App)

```bash
npm start
```

---

## 📦 Dependencies

```json
{
  "react": "^19",
  "react-dom": "^19",
  "react-toastify": "^11",
  "tailwindcss": "^4"
}
```

---

## 🎯 Validation Flow

1. User enters all details.
2. Form validates each input.
3. Displays validation errors if any.
4. Prevents invalid submission.
5. Adds user to the list on successful validation.
6. Displays a success toast notification.
7. Clears the form after successful submission.

---

## 📷 Future Improvements

- Show/Hide Password
- Password Strength Meter
- Live Validation
- Profile Picture Upload
- Phone Number Validation
- Date of Birth Validation
- Local Storage Integration
- Backend Integration (Node.js & Express)
- MongoDB Database
- JWT Authentication

---

## 🎓 Learning Outcomes

This project helps understand:

- React Forms
- Controlled Components
- useState Hook
- Form Validation
- Regular Expressions (Regex)
- Event Handling
- Conditional Rendering
- State Management
- React Toastify
- Tailwind CSS Styling

---

## 👨‍💻 Author

**Abhishek Sharma**

## 📄 License

This project is open source and available under the **MIT License**.

---

### ⭐ If you found this project helpful, consider giving it a star on GitHub!# React + Vite
