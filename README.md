# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

# My Optimi App

This is a simple React app with a **navbar** and a **search bar** component. The search bar allows users to filter groups and projects. Let's dive into the details:

## Components

### 1. Navbar

The **navbar** component provides navigation and houses the search bar.

### 2. SearchBar

The **search bar** component has the following features:

1. **Filtering**:
   - Users can type a search query into the text input field.
   - The search query matches any string in both group and project names.
   - Case sensitivity is ignored for group and project names.
   - If the user clears the search query, all groups and projects are rendered.
   - Even if the query doesn't match the project name, if a group matches the search query, its parent project should be visible.
   - After a search/filter, the first item (group or project) is highlighted.
   - The matching part of the search query in the group/project name is highlighted with a yellow color (similar to Google search).

2. **Keyboard Navigation**:
   - **Up/Down arrows** navigate through the list, moving the highlighting to the active item.
   - Pressing **Enter/Return** should take the user to the link of the active element.

## Getting Started

1. Clone this repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.

