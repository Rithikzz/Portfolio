💼 Portfolio V2 — by Rithik S

Hello everyone! 👋
I’m Rithik S, and this is my updated React + Vite portfolio website project — built to showcase my work, creativity, and technical skills.

🧠 Tech Stack Used

⚛️ ReactJS

🎨 Tailwind CSS

✨ AOS (Animate On Scroll)

🔥 Firebase

🎬 Framer Motion

💎 Lucide React Icons

🧩 Material UI

🧠 ShadCN/UI

💫 SweetAlert2

🌀 Swiper JS

🎥 Spline 3D

🌐 Website Link

👉 (Add your deployment link here once it’s live)
Example:
https://rithik-portfolio.netlify.app

⚙️ How to Run the Project

Follow these steps to run the project on your local machine 👇

🧩 Prerequisites

Make sure you have:

Node.js
 installed (v18+ recommended)

🚀 Steps to Run

Clone the project

git clone https://github.com/rithik-s/portfolio-update-2.git


Navigate to the project directory

cd "Portfolio Update 2"


Install dependencies

npm install


or (if you face peer dependency issues):

npm install --legacy-peer-deps


Run the development server

npm run dev


Open in your browser

Check your terminal — a local link (like http://localhost:5173/) will appear.
Open it to view your portfolio.

🏗️ Building for Production

To build a production-ready version:

npm run build


The optimized build will appear inside the dist folder.
You can deploy this folder to any hosting provider like Netlify, Vercel, or Firebase Hosting.

🔥 Firebase Configuration (Optional)

If you plan to connect Firebase (for contact forms, comments, or data):

Go to the Firebase Console
.

Create a new project (or use an existing one).

Enable Firestore Database.

Go to Project Settings → Your Apps → Firebase SDK snippet, and copy the config.

Paste it inside your project’s firebase.js and firebase-comment.js.

Set up Firestore collections as per your app needs.

In Firestore → Rules, temporarily allow read/write (for testing):

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

💡 Notes

If you face issues:

Ensure Node.js is correctly installed.

Check that you’re in the right folder (Portfolio Update 2).

Reinstall dependencies if needed:

rm -rf node_modules package-lock.json && npm install

🧑‍💻 Credits

This portfolio was developed and customized by Rithik S.
If you use this project as a base, please give proper credit 🙏