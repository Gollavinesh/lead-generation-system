# Lead Generation System

A simple lead generation system with a Node.js backend, HTML/JS frontend, and n8n workflow integration.

## Features
- **Frontend:** HTML, CSS, and JavaScript form for lead capture
- **Backend:** Node.js (Express) API to receive and forward leads
- **n8n Integration:** For workflow automation (e.g., storing leads, sending emails)

---

## Folder Structure
```
Lead Generation System/
  backend/        # Node.js Express backend
  frontend/       # HTML/JS/CSS frontend
  n8n-workflow.json # n8n workflow export
  README.md       # This file
```

---

## Backend Setup (Node.js)
1. Open a terminal and navigate to the backend folder:
   ```powershell
   cd "backend"
   npm install
   node server.js
   ```
2. The backend will run on [http://localhost:5000](http://localhost:5000)

---

## Frontend Setup (HTML/JS)
1. Open a new terminal and navigate to the frontend folder:
   ```powershell
   cd "../frontend"
   ```
2. Start a static server (choose one):
   - With Python:
     ```powershell
     python -m http.server 8080
     ```
   - With live-server (if installed):
     ```powershell
     live-server
     ```
3. Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## n8n Workflow Integration
1. Import `n8n-workflow.json` into your n8n instance.
2. Update the webhook URL in `backend/server.js` to match your n8n webhook endpoint.
3. Make sure n8n is running and accessible.

---

## GitHub Setup
1. [Create a new public repository on GitHub](https://github.com/new)
2. In your project root, run:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```
   Replace `your-username` and `your-repo-name` with your GitHub info.

---

## License
MIT
