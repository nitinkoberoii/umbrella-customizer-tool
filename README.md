# ☂️ Umbrella Customizer

This is a simple front-end project that allows users to create an instant preview of a customized umbrella. Users can upload their logo and see how it looks on umbrellas of different colors. The entire interface theme changes to match the selected umbrella.

This project is built purely with **HTML, CSS, and vanilla JavaScript**, with no external libraries or frameworks.

---

## 🚀 Live Demo

You can view and test the live project deployed on Vercel:

**[Live Demo](https://umbrella-customizer-tool.vercel.app)**

---

## Features

- **Logo Preview:** Upload a `.png` or `.jpg` logo for an instant preview on the umbrella.
- **Color Picker:** Switch between 3 different umbrella colors (Blue, Pink, and Yellow).
- **Dynamic Theme:** The UI theme (background, button color, and icons) changes dynamically to match the selected umbrella.
- **Loading Animation:** A custom loader provides visual feedback while the umbrella image or logo is being loaded.
- **Responsive Design:** The layout is functional and clean on both desktop and mobile devices.

---

## Design Creation

The design is split into two main columns:

1.  **Preview Area (Left):** This area contains the umbrella image as the main element. The uploaded logo is dynamically placed on top of it. A spinning loader (the umbrella logo) is shown and hidden using JavaScript whenever a new image is loading to provide user feedback.
2.  **Controls Area (Right):** This area holds the text content, the color swatches, and the upload button.

**Theming** is handled efficiently using CSS variables. A single class (e.g., `theme-blue`, `theme-pink`) is applied to the `<body>` tag via JavaScript. The CSS file uses this class to update the values of variables for background color, button color, etc., which instantly changes the entire look of the site.

---

## Tech Stack

- **HTML5:** For the basic structure and content.
- **CSS3:** For all styling, layout (Flexbox), animations, and theming (CSS Variables).
- **Vanilla JavaScript (ES6+):** For all logic, including:
  - Event handling (clicks, file uploads).
  - DOM manipulation (showing/hiding loader, changing images).
  - Applying theme classes to the body.
  - Simulating a load time with `setTimeout`.

---

## How to Use

To run this project on your local machine, follow these simple steps:

1.  **Download the project:**

    - Clone this repository or download the project files as a `.zip`.

2.  **Get the assets:**

    - This project requires image assets (umbrella images, loader icon, etc.) that must be added manually.
    - Download all assets from the [Google Drive Link](https://drive.google.com/drive/folders/1u1LL2C--Dfsst6gHDTRm0LOYQqW0Z1Op).
    - Create a folder named `assets` in the project's root directory.
    - Place all the downloaded image files directly into this `assets` folder.

3.  **Project Structure:**

    - Ensure your final project folder looks like this:

    ```
    /your-project-folder
    |
    |-- /assets
    |   |-- Blue_umbrella.png
    |   |-- Pink_umbrella.png
    |   |-- Yellow_umbrella.png
    |   |-- loader.svg
    |   |-- upload_icon.svg
    |
    |-- index.html
    |-- style.css
    |-- script.js
    |-- README.md
    ```

4.  **Run the project:**
    - You're all set! Just open the `index.html` file in your web browser to see the application.

---

## 🚀 Future Improvements

This project provides a solid foundation, but several features could be added to make it even better:

- **"Remove Logo" Functionality:** Add a small "x" button (like in the video demo) that appears after a logo is uploaded, allowing the user to remove it without reloading the page.
- **Logo Positioning & Sizing:** Implement controls to let the user drag the logo to different positions on the umbrella or use a slider to resize the logo.
- **Support More Colors:** Expand the color palette to include all 8 colors shown in the original demo images.
- **Add Text Customization:** Allow users to type and add text to the umbrella, including font and color choices.
- **Save & Share Preview:** Add a "Download" button that uses HTML Canvas to merge the umbrella and logo images, allowing the user to save their custom preview as a single image file.
- **Enhanced Accessibility:** Improve keyboard navigation for the color swatches and ensure all interactive elements have proper ARIA (Accessible Rich Internet Applications) roles for screen readers.
