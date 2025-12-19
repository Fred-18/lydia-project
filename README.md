# Lydia Front-End Technical Test

## 🧾 Overview

This project is a front-end technical test for **Lydia**.  
The goal is to build a **Single Page Application (SPA)** that allows users to search through a list of transactions by their **label**.

The application is built with **React (Next.js)** and focuses on:

- clean architecture
- good UX
- clear separation of concerns
- readable and maintainable code

---

## 🎯 Features

- 🔍 Search transactions by label
- ⚡ Real-time filtering while typing
- 🔤 Case-insensitive search
- 🚫 Graceful handling of “No results found”
- ✏️ User can always edit the search (no blocking state)
- 🎨 Simple, clean, and readable UI

---

## 🛠️ Tech Stack

- **React** (Next.js – App Router)
- **TypeScript**
- **CSS**
- **JSON** as a mock data source

---

## 🧠 Architecture & Design Choices

### 1️⃣ Separation of concerns

- **UI components** handle rendering only  
  (e.g. `SearchBar`)
- **Business logic** is extracted into a custom hook  
  (`useFilteredTransactions`)
- The page component (`Home`) orchestrates data and UI

This keeps components simple and improves readability.

---

### 2️⃣ Custom Hook (`useFilteredTransactions`)

A custom hook is used to:

- manage the search state
- compute filtered transactions
- keep the page component lightweight

> The hook returns data only and does not handle UI decisions.

---

### 3️⃣ UX decisions

- The search input is always visible
- “No results found” is treated as a **normal user state**, not an error
- No exceptions are thrown for empty results
- Feedback is immediate and non-blocking

---

### 4️⃣ TypeScript usage

- A `Transaction` type defines the data contract
- JSON data is explicitly typed to ensure consistency
- Types reflect real data rather than forcing the data to match the type

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install

Run the project locally

npm run dev


The app will be available at:
👉 http://localhost:3000

📦 Project Structure (simplified)
src/
 ├─ app/
 │   ├─ page.tsx
 │   ├─ transaction.json
 │   ├─ hook/
 │   │   └─ useFilteredTransactions.ts
 │   ├─ components/
 │   │   └─ SearchBar.tsx
 │   └─ types/
 │       └─ transaction.ts
```
