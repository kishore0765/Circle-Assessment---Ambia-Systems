
# Circle-Assessment

A small React + Vite project featuring a circle click interaction assessment. The app has a simple landing page with a `Start` button, then renders a pattern of circles that change state when clicked and reset once all are clicked.

## Features

- React app built with Vite
- React Router navigation between home and assessment pages
- Clickable circle layout
- Active state highlight for selected circles
- Automatic reset animation once all circles are clicked

## Tech Stack

- React 19
- Vite
- React Router DOM
- ESLint

## Project Structure

- `src/App.jsx` — app router and routes
- `src/Home.jsx` — home screen with start button
- `src/Assessment.jsx` — circle interaction assessment
- `src/styles.css` — page and circle styles
- `index.html` — app entry HTML
- `package.json` — dependencies and scripts
- `vite.config.js` — Vite configuration

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/kishore0765/Circle-Assessment---Ambia-Systems
   cd Circle-Assessment
   ```

2. Install dependencies
   ```bash
   npm install
   ```

## Run Locally

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — create a production build
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build locally

## How It Works

- `Home.jsx` shows a `Start` button
- Clicking `Start` navigates to `/assessment`
- `Assessment.jsx` renders 9 circle elements
- Circles toggle active state on click
- Once all circles are active, they reset in reverse order with a timed animation

## Notes

- The center circle is rendered behind the other circles using CSS `z-index`
- Active circles are styled with a cyan fill and border

