# 🧠 AI Multi-Model Image Generator

Generate high-quality, unique images from text prompts using multiple AI models. This project integrates **Next.js App Router**, **Tailwind CSS**, and the **Stability AI** API.

---

## 🚀 Live Demo

👉 [Ai-Tool-explorer]([https://your-vercel-url.vercel.app](https://ai-tools-explorer-ketan-sa5l-6yiplsy0o-ketan-chokkaras-projects.vercel.app/))

---

## 📸 Snapshots

![Homepage](<img width="1552" height="939" alt="Screenshot 2025-08-03 at 6 29 59 PM" src="https://github.com/user-attachments/assets/8e56a949-a8fb-4bcc-bc5b-adf63737f900" />
)
![Select Your Model](<img width="1552" height="939" alt="Screenshot 2025-08-03 at 6 30 30 PM" src="https://github.com/user-attachments/assets/e7637b79-7821-420f-b1e7-7a72984a9d0b" />
)
![enter your prompt](<img width="1552" height="939" alt="Screenshot 2025-08-03 at 6 30 46 PM" src="https://github.com/user-attachments/assets/f2facae6-197a-45c2-8d8a-485b0b473013" />
)
![Generation Example](https://drive.google.com/file/d/1FMcABS_asKqMoSGKizecs2IAY4vY1w-1/view?usp=drive_link)

---

## 📦 Features

- 🔥 AI-powered image generation with text prompts
- ⚙️ Stable Diffusion XL integration via Stability AI
- 🎯 Clean, responsive, and modern UI using Tailwind CSS
- 💾 Download and copy generated images
- 🌐 Deployed on Vercel

---

## 🛠️ Getting Started

### 1. Clone the Repository

git clone https://github.com/yourusername/ai-models-tool.git
cd ai-models-tool

### 2. Install Dependencies

npm install
# or
yarn install

### 3. Configure Environment Variables

Create a .env.local file in the root of your project and add your Stability AI API key:

### 4. Run the Development Server

npm run dev
# or
yarn dev

Visit: http://localhost:3000 to use the application locally.

🧠 Decisions Made

Here are some notable decisions made during the development of this project:

⸻

🧱 Framework: Next.js (App Router)
	•	Chosen for its server-side rendering, routing flexibility, and built-in API routes, making it ideal for full-stack AI applications.
	•	The App Router (introduced in Next 13+) was used to take advantage of modern routing, layouts, and use client capabilities.

⸻

🎨 Styling: Tailwind CSS
	•	Selected for its utility-first approach, allowing for rapid UI development without writing custom CSS.
	•	Ensures consistency, responsiveness, and clean design.

⸻

🔌 Image Generation API: Stability AI
	•	Used the Stable Diffusion XL model for its ability to produce high-quality images from detailed prompts.
	•	Base64 format was used for transferring and rendering generated images quickly.

⸻

💾 Image Handling
	•	Used next/image for optimal image loading, caching, and performance.
	•	Included buttons to download or copy the generated image for user convenience.

⸻

🧪 Error Handling
	•	Frontend handles errors gracefully with informative messages.
	•	Backend checks for missing prompts and missing API keys before proceeding.

⸻

🚀 Deployment: Vercel
	•	Chosen for ease of deployment, seamless GitHub integration, and great support for Next.js apps.
	•	Environment variables configured in the Vercel dashboard to keep secrets secure.

⸻

🧑‍💻 Developer Experience
	•	ESLint and TypeScript used to maintain code quality and catch issues early.
	•	Animations and interactive UI elements added for a better user experience.

 🙌 Closing Note

This project was developed as part of an internship assignment to demonstrate practical skills in full-stack development, AI integration, and UI/UX design. It reflects:
	•	A solid understanding of modern web development with Next.js and Tailwind CSS
	•	Integration of third-party APIs like Stability AI
	•	A focus on performance, design, and user experience

I’m excited about the opportunity to contribute meaningfully to real-world projects and continue growing as a developer.

⸻

Made with passion by Ketan Chokkara 👨‍💻
Feel free to explore, review, and suggest improvements!

⸻


