# GlucoSense AI-Powered Diabetes Detection for Early Intervention (Infosys Internship 2025)

GlucoSense is a web application designed for **diabetes risk prediction**, utilizing an **XGBoost machine learning model** served by a **Flask API backend**, and a **React Vite frontend** styled with **Tailwind CSS**.

---

## 🚀 Features

- ✅ **Diabetes Risk Prediction** using an XGBoost machine learning model
- ✅ **React Vite Frontend** for a modern and fast UI experience
- ✅ **Flask API** for handling ML model inference requests
- ✅ **Tailwind CSS** for clean and responsive UI styling
- ✅ **Seamless API Integration** between the frontend and backend

---

## 📂 Project Structure

```
GlucoSense/
│── backend/
│   │── venv/
│   │── app.py
│   │── README.md
│   │── XGBoost_Diabetes_Model.joblib
│
│── frontend/
│   │── node_modules/
│   │── public/
│   │   │── favicon.ico
│   │   │── placeholder.svg
│   │   │── robots.txt
│   │── src/
│   │   │── components/
│   │   │── hooks/
│   │   │── lib/
│   │   │── pages/
│   │   │── App.css
│   │   │── App.tsx
│   │   │── index.css
│   │   │── main.tsx
│   │   │── vite-env.d.ts
│   │── .gitignore
│   │── bun.lockb
│   │── components.json
│   │── eslint.config.js
│   │── index.html
│   │── package.json
│   │── package-lock.json
│   │── postcss.config.js
│   │── README.md
│   │── tailwind.config.ts
│   │── tsconfig.app.json
│   │── tsconfig.json
```

---

## 🛠 Installation & Setup

Follow the instructions below to set up both the frontend and backend.

### 🖥 Frontend Setup (React + Vite)

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173/` (default Vite port). Any changes made to the frontend code will automatically reflect in the browser.

---

### 🖥 Backend Setup (Flask API)

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Ensure that the **XGBoost model file** (`XGBoost_Diabetes_Model.joblib`) is present in the backend directory. If you have a different model, make sure to update the code accordingly.
3. Create a virtual environment:
   ```sh
   python -m venv venv
   ```
4. Activate the virtual environment:
   - On Windows:
     ```sh
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```sh
     source venv/bin/activate
     ```
5. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
   *(Alternatively, you can install individual dependencies manually:)*
   ```sh
   pip install flask flask-cors pandas scikit-learn joblib numpy
   ```
6. Run the Flask API:
   ```sh
   python app.py
   ```
   The API will be available at `http://localhost:5000`.

---

## 🔧 Troubleshooting

- If `npm run dev` fails, try deleting `node_modules` and `package-lock.json`, then reinstall:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```
- If Flask API fails to start, ensure the virtual environment is activated and dependencies are installed correctly.

---

## 📜 License
This project is open-source and available under the MIT License.

---

## 🤝 Contributions
Contributions are welcome! Feel free to fork this repository and submit a pull request.

Happy Coding! 🎉
