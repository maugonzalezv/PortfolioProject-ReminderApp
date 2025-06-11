# 🎫 Reminder App – Modern Task & Reminder Manager

A sleek, modern web app for creating, editing, and managing reminders and tasks—built with React and best-in-class frontend practices.

---

## 🚀 Key Features

### ✨ Core Functionality

* 🆕 **Create Reminders**: Add new tickets with title, description & priority level
* ✏️ **Edit Reminders**: Seamlessly update existing tickets
* 🗑️ **Delete Reminders**: Remove tickets you no longer need
* ⭐ **Priority System**: Organize tasks by three priority tiers:

  * 🔴 **High** – Urgent & important
  * 🟡 **Medium** – Important but not urgent
  * 🟢 **Low** – Lower priority
* ↕️ **Dynamic Sorting**: Sort your tickets by priority

  * 🔼 High → Low
  * 🔽 Low → High

### 🎨 User Experience

* ✨ Clean, modern interface
* ✔️ Intuitive forms with validation
* ↩️ Cancel-edit functionality
* 📋 Organized reminder list view
* 📱 Responsive design for all devices

---

## 🛠️ Tech Stack

### 🔧 Frontend Framework & Libraries

* **React 18.3.1** – Core UI library
* **React DOM 18.3.1** – Virtual DOM rendering
* **React Scripts 5.0.1** – Build & dev tooling
* **Create React App** – Zero-config project setup

### 🏗️ Architecture & Patterns

* **React Hooks**

  * `useState` – Component-level state
  * `useReducer` – Complex state management
  * `useEffect` – Lifecycle & side effects
* **Reducer Pattern** – Centralized state logic
* **Functional Components** – Modern React style
* **Props Drilling** – Parent–child communication

### 📊 State Structure

```javascript
// App state shape
{
  tickets: [],                 // All reminder tickets
  editingTicket: null,         // Ticket currently being edited
  sortPreference: "High to Low"// Current sorting order
}
```

### 📁 Project Structure

```
src/
├── components/
│   ├── TicketForm.jsx    # Add/Edit ticket form
│   ├── TicketList.jsx    # Renders list of tickets
│   └── TicketItem.jsx    # Single ticket component
├── reducers/
│   └── ticketReducer.jsx # Main reducer logic
├── utilities/
│   └── sortingUtils.jsx  # Sorting helper functions
├── styles.css            # Global styles
├── App.js                # Root component
└── index.js              # Entry point
```

---

## ⚙️ Developer Tools

* 🛡️ **ESLint** – Code linting & quality
* 🧪 **Jest** – Unit testing
* 📈 **Web Vitals** – Performance metrics
* 🚀 **gh-pages** – GitHub Pages deployment

---

## 📦 Installation & Setup

### Prerequisites

* Node.js ≥ 14
* npm or Yarn

### Getting Started

1. **Clone the repo**

   ```bash
   git clone [REPO_URL]
   cd PortfolioProject-ReminderApp
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Run in development**

   ```bash
   npm start
   ```
4. **Build for production**

   ```bash
   npm run build
   ```

---

## 🎮 How to Use

### 🆕 Create a New Reminder

1. Fill out the form:

   * **Title**
   * **Description**
   * **Priority** (Low, Medium, High)
2. Click **Submit**

### ✏️ Edit an Existing Reminder

1. Click the **Edit** icon on a ticket
2. Form auto-populates with current data
3. Modify fields and click **Submit** or **Cancel**

### ↕️ Sort Your Reminders

* Use the dropdown to choose:

  * **High to Low**
  * **Low to High**

---

## 🏗️ Code Flow

1. **App** – Holds main state & orchestrates components
2. **TicketForm** – Handles creation/editing & validation
3. **Reducer** – Processes actions & updates state
4. **TicketList** – Renders sorted tickets
5. **Utilities** – Sorting logic & helpers

### Reducer Actions

* `ADD_TICKET`    – Add a new reminder
* `UPDATE_TICKET` – Update existing reminder
* `DELETE_TICKET` – Remove reminder
* `SET_EDITING`   – Enter edit mode
* `CLEAR_EDITING` – Exit edit mode
* `SET_SORTING`   – Change sort order

---

## 📝 Available Scripts

* `npm start`   – Development server
* `npm run build` – Production build
* `npm test`    – Run tests
* `npm run eject` – Reveal CRA config (irreversible)

---

## 🌐 Deployment

Easily deploy to GitHub Pages via `gh-pages` package.

---

## 📱 Compatibility

### Browsers

* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Edge (modern)

### Devices

* Desktop
* Tablet
* Mobile

---

## 🔧 Advanced Config

### Environment Variables

* `PUBLIC_URL` – Public URL setting

### Customization

* Tweak `styles.css` for theming
* Extend `sortingUtils.jsx` for more sort options
* Add new reducer cases for extra features



