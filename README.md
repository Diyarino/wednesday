# 🍻 Happy Wednesdays Club - Stammtisch Dashboard

Welcome to the **Happy Wednesdays Club** repository! This project is a custom-built, lightweight web dashboard designed to organize, track, and manage our weekly "Stammtisch" (regular get-together) activities. 

## ✨ Features

* **📅 Interactive Calendar & History:** Keep track of every Wednesday. Log whether the meetup took place, who attended, who paid the bill, and any specific notes (or reasons for cancellation).
* **📊 Attendance Statistics:** A visual dashboard using Chart.js that displays an overview of attendance and payment history for the core members (Manuel, Niklas, David, and Diyar).
* **🎮 "Catch the Döner" Mini-Game:** A built-in HTML5 canvas game to pass the time. Catch the falling kebabs to increase your score, complete with a top 5 high-score leaderboard!
* **🎟️ Task & Ticket System:** A dedicated kanban-style ticket system (`tickets.html`) to organize upcoming Stammtisch trips (Stammtischfahrten), events, or group tasks. Features priority levels, assignees, and status tracking.

## 🛠️ Tech Stack

This project is built to be fast, serverless, and easy to host as a static site:
* **Frontend:** HTML5, Vanilla JavaScript, CSS
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN for rapid development)
* **Charts:** [Chart.js](https://www.chartjs.org/) (via CDN)
* **Backend / Database:** 
  * Google Apps Script & Google Sheets (for tracking calendar entries and high scores).
  * Web Storage API / `localStorage` (currently handling the Ticket System).

## 🚀 Getting Started

Since this is a static website relying on CDNs and a Google Apps Script endpoint, there is no complex build process or Node.js environment required.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/happy-wednesdays.git](https://github.com/yourusername/happy-wednesdays.git)
   ```

2. **Open the project:**
Simply open `index.html` in your preferred web browser to view the main dashboard.
3. **Navigate:**
Use the header button to switch between the main dashboard (`index.html`) and the task management system (`tickets.html`).

## 📁 File Structure

* `index.html`: The main dashboard containing the calendar, stats chart, history table, and the mini-game.
* `tickets.html`: The standalone task management interface.
* `IMG-20260219-WA0012.png`: The custom player avatar asset used in the mini-game. *(Make sure this file is uploaded to your repo!)*

## 🔧 Future Improvements (Roadmap)

* [ ] Connect the `tickets.html` local storage data to the Google Apps Script backend for cross-device syncing.
* [ ] Add automated deployment via GitHub Actions to host the project directly on GitHub Pages.
* [ ] Implement mobile swipe gestures for the calendar navigation.

---

*Created for the Happy Wednesdays Club. Made by Dr.-Ing. Diyar Altinses.*
