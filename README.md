# 📚 React Bookmark Landing Page

A **responsive landing page** built with **React + TypeScript**,
inspired by the Frontend Mentor challenge.\
It follows an **Atomic Design architecture**, uses **CSS Modules**, and
includes testing with **Vitest + Testing Library**.

------------------------------------------------------------------------

## 🚀 Features

-   **React + Vite + TypeScript**
-   **Atomic Design structure** (Atoms → Molecules → Organisms →
    Templates → Pages)
-   **CSS Modules** for scoped styling
-   **Fully responsive** (Mobile, Tablet, Desktop)
-   **Unit testing** with Vitest & Testing Library
-   **Semantic and accessible HTML**
-   **Pixel-perfect implementation** based on the design specification

------------------------------------------------------------------------

## 🧱 Project Structure

```text
src/
 ├── assets/               # Images and icons
 ├── components/
 │    ├── atoms/           # Small UI elements (buttons, inputs…)
 │    ├── molecules/       # Combinations of atoms
 │    ├── organisms/       # Full sections (Header, Hero, Tabs…)
 │ 
 ├── styles/
 │    ├── variables.css    # Global variables (colors, fonts, breakpoints)
 │    └── global.css       # Reset + base styles
 ├── tests/                # Unit tests
 ├── main.tsx
 └── App.tsx


------------------------------------------------------------------------

## 🖥️ Technologies Used

-   React 18\
-   TypeScript\
-   Vite\
-   CSS Modules\
-   Vitest\
-   Testing Library\
-   ESLint

------------------------------------------------------------------------

## 🧪 Testing

The project uses:

-   `vitest`
-   `@testing-library/react`
-   `@testing-library/jest-dom`

Run tests using:

``` bash
npm run test
```

------------------------------------------------------------------------

## 📦 Installation

1.  Clone the repository:

``` bash
git clone https://github.com/your-user/your-repo.git
```

2.  Navigate to the project folder:

``` bash
cd project-name
```

3.  Install dependencies:

``` bash
npm install
```

4.  Start the development server:

``` bash
npm run dev
```

------------------------------------------------------------------------

## 📱 Responsive Breakpoints

Defined inside `variables.css`:

``` css
--bp-tablet: 768px;
--bp-desktop: 1200px;
```

------------------------------------------------------------------------

## 🏗️ Project Status

✔ Header\
✔ Hero\
✔ Features / Tabs\
✔ Extensions\
✔ FAQ\
✔ Subscribe\
✔ Footer\
✔ Full Responsive Layout\
✔ Basic Testing\
⬜ Advanced Testing\
⬜ Optional animations\
⬜ Accessibility improvements

------------------------------------------------------------------------

## 📄 License

This project is for educational purposes.\
Feel free to fork it, modify it, and learn from it!
