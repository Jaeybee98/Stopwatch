# Beginner Project: Functional Stopwatch App

This project is a simple, yet robust, stopwatch application built using fundamental web technologies: HTML, CSS, and JavaScript. It is designed as a beginner assignment to demonstrate proficiency in basic DOM manipulation, styling, and JavaScript timer logic.

## Features

The application meets all core requirements and includes several bonus features:

### Core Functionality
* **Time Display:** Shows elapsed time in the format **HH:MM:SS.mmm** (Hours, Minutes, Seconds, Milliseconds).
* **Start Button:** Begins the timer countdown. Includes logic to prevent multiple timers from starting simultaneously.
* **Stop Button:** Pauses the timer, preserving the elapsed time.
* **Reset Button:** Stops the timer and resets the display and internal time count back to `00:00:00.000`.

### Bonus Functionality
* **Milliseconds:** The timer tracks and displays time down to the millisecond.
* **Lap Button:** Records the current time as a split time and displays it in a separate list. New lap times are prepended (added to the top) of the list.
* **Responsive Design:** The layout adjusts using Flexbox to ensure optimal viewing and usability on both desktop and mobile devices.

## Project Structure

The project is organized into three separate files for clean code separation:

1.  **`index.html`**: Contains the basic page structure and links to the external stylesheet and script.
2.  **`style.css`**: Defines all the visual presentation, including the centered layout, digital clock styling, dark theme, and button hover effects.
3.  **`index.js`**: Contains all the application logic, including the time formatting function, `setInterval`/`clearInterval` handling, and event listeners for the buttons.

## How to Run

1.  Ensure all three files (`index.html`, `style.css`, and `index.js`) are saved in the **same directory** on your computer.
2.  Open **`index.html`** in any web browser (Chrome, Firefox, Edge, etc.).
3.  The stopwatch should load instantly and be ready for use.
