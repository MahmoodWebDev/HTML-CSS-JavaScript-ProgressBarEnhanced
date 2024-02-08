# Year Progress Bar 📅

A simple yet elegant progress bar to visualize the passing of the year based on the current date.

## Features 🌟

- **Dynamic Progress Bar**: Updates in real-time as you select a date.
- **Responsive Design**: Works on screens of all sizes.
- **Easy to Use**: Just pick a date, and the progress bar adjusts automatically.

## How It Works 🛠️

The progress bar fills up as the year progresses. Select any date, and the bar will show you how much of the year has passed in percentage.

## Setup 📦

1. Clone this repository to your local machine.
2. Open `index.html` in your browser to view the project.
3. Select a date from the date picker to see the progress bar in action.

## Code Explanation 📝

The JavaScript file contains the logic for updating the progress bar:

- `DOMContentLoaded`: Waits until the HTML document is fully loaded before running the script.
- `getElementById`: Finds elements in the HTML document using their `id` attribute.
- `addEventListener`: Listens for certain events, like a date change.
- `new Date`: Creates a new date object from the selected input.
- `getFullYear()`: Retrieves the year from the selected date.
- `toFixed(2)`: Formats the progress value to have two decimal places.

When you change the date:

1. It calculates the start and end of the selected year.
2. It determines how much of the year has passed from the selected date.
3. It updates the progress bar's width and the text to reflect this percentage.

## Technologies Used 💻

- HTML
- CSS
- JavaScript

## Contributions 🤝

Contributions, issues, and feature requests are welcome!

## Support 💖

Give a ⭐️ if you like this project!

## License 📄

This project is open-source and available under the [MIT License](LICENSE).

### Made with ❤️ by [Mahmood.io](https://mahmood.io)
