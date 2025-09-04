# 📚 AI-Powered Live Q&A Agent

This is a student project that uses **LangChain**, **Google Gemini**, and **SerpAPI** to create a live Q&A assistant. It can answer user questions using both AI and live Google search results.

---

## 💡 What It Does

This tool:

- Uses **Google Gemini (via LangChain)** to understand and respond to questions.
- Uses **SerpAPI** to search Google in real-time when needed.
- Combines both using LangChain’s **agent**, which decides how to handle each question.

For example, if you ask **“today tech news”**, the agent will:
1. Search Google using SerpAPI,
2. Summarize results using Gemini,
3. Return a clean, easy-to-read response.

---

## 🛠️ Tech Stack

- [LangChain JS](https://js.langchain.com/)
- [Google Generative AI (Gemini)](https://ai.google.dev/)
- [SerpAPI](https://serpapi.com/)
- Node.js
- `dotenv` (for environment variables)

---

## 📁 Project Structure

```bash
project/
│
├── agent.js         # Main source code
├── .env             # API keys go here
├── package.json     # Project metadata and dependencies
└── README.md        # This file
