# Assignment 7 - Balloon and Tabbed Layout Interaction

This repository contains an HTML, CSS, and JavaScript project to create:
1. A page with a balloon emoji (`🎈`) that inflates and deflates with the arrow keys. If it inflates beyond a certain size, it explodes and changes into the `💥` emoji.
2. A tabbed layout that switches content between tabs upon clicking the corresponding tab links.

## Files
- **index.html**: The HTML structure of the webpage.
- **style.css**: Contains the styling for the webpage.
- **script.js**: Contains the JavaScript logic for the balloon behavior and tab switching functionality.

## Features
1. **Balloon Interaction**:
   - Press the up arrow (`ArrowUp`) to inflate the balloon by 10%.
   - Press the down arrow (`ArrowDown`) to deflate the balloon by 10%.
   - If the balloon exceeds a predefined size, it "explodes" and is replaced by the `💥` emoji. The event handler is disabled after the explosion.

2. **Tabbed Layout**:
   - Displays the first tab's content by default.
   - Clicking a tab link displays the corresponding content and hides the others.
   - Uses `display: none` and `display: block` for toggling visibility.
   - Prevents the default behavior of tab links.

## How to Use
1. Open `index.html` in a web browser to see the project in action.
2. Use the up and down arrow keys to interact with the balloon.
3. Click on tab links to switch between content.

## Notes
- No additional libraries or frameworks are required. The project is written in vanilla HTML, CSS, and JavaScript.
