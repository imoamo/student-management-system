# 🌐 Student Management System

Welcome to the **Student Management System**! This application is designed to help manage student data efficiently, including filtering, viewing, and uploading student records. The application is built with React using Vite and integrates with an API for data storage and retrieval.

## ✨ Features

- **View Students**: Display a list of students with their details.
- **Filter Students**: Filter the student list by class, roll number, and name.
- **QR Code Generation**: Generate and display QR codes for each student.
- **Upload Excel Files**: Upload an Excel file to add multiple student records at once.

## 📸 Screenshots

## 📸 Screenshot 1
![Screenshot (312)](https://github.com/user-attachments/assets/303a901d-b0bd-47c5-ac5f-e47c5ec21383)

## 📸 Screenshot 2
![Screenshot (313)](https://github.com/user-attachments/assets/923ffd18-4117-4fbc-8e1e-214618ed0812)


## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

- **Node.js**
- **npm** (Node Package Manager)

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/student-management-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd student-management-system
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see the application in action.

## 🌐 Deployment

To deploy the application, follow the steps for your preferred deployment platform (e.g., Vercel, Netlify, Heroku). Ensure that your API endpoint is correctly set up and accessible.

## 📡 API Integration

The application integrates with an API to fetch and upload student data. The backend API is deployed on Render and is accessible at [https://firebase-excel.onrender.com](https://firebase-excel.onrender.com).

### Fetch Students

**Endpoint**: `GET /students`

### Upload Students

**Endpoint**: `POST /upload`

**Sample Response for Upload Endpoint**:

The API returns a detailed error message if the upload fails due to duplicate data or other issues. Ensure your API is configured to handle and return specific error messages.

## 🛠️ Technologies Used

- **React**
- **Vite**
- **Axios**
- **QRCode.react**
- **CSS** (Flexbox and Grid)

## 👥 Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.


Feel free to update the content with your specific details where necessary, such as your GitHub username and any other relevant information.
