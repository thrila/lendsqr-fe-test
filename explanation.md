# Project Steps Documentation

## Overview
This project is a **Next.js application** that includes a **dashboard** and a **login page**.  
The work focused on pixel-perfect design, interactivity, robust validation, modal handling, and responsive layout.

---

## Steps Taken

### 1. Design Implementation
- Imported provided mockups into the workflow.
- Inspected mockups in detail and translated styles into **Next.js components**.
- Ensured pixel-perfect matching between UI and mockups.

### 2. Component Development
- Broke down the UI into **reusable components** (e.g., buttons, forms, modals).
- Verified component interactivity (hover states, button clicks, form toggles).
- Applied SCSS modules for scoped styling.

### 3. Login Form & Validation
- Built the login form using **React Hook Form**.
- Integrated **Zod** with the resolver to strictly validate input data.
  - Guarantees input matches expected types.
  - Prevents injection of unexpected fields.
- Wrapped form submission logic in `try/catch` blocks to handle runtime errors gracefully.

### 4. Dashboard
- Implemented the dashboard UI directly from mockups (pixel-perfect).
- Built a **filter form** for dashboard data and validated it with **Zod**.
- Used **mock data** to populate dashboard tables and charts for testing.
- Made the dashboard **responsive** for different screen sizes.

### 5. Portals & Popups
- Implemented **portals** for rendering form “bubbles” (modal-style overlays).
- Created a **popup component** (via portal) to display user details when selected.
- Used an overlay + modal pattern for consistent UX across forms and detail views.

---

## Notes
- Pixel perfection was achieved by aligning with mockups directly in the browser dev tools.
- Zod + resolver provided a type-safe validation layer for both login and filter forms.
- Mock data enabled development of dashboard features without needing a live backend.
- Responsiveness was prioritized to ensure usability across devices.
- Portals allowed clean separation of modal logic from the main component tree.
- Toastify to display submitted data

---

## Next Steps
- Replace mock data with **API integration**.
- Connect login form to authentication flow and persist **session state**.
- Add role-based access in the dashboard.
- Expand popup detail views into **editable user management** modals.
