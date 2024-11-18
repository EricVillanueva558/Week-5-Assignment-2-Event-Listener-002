// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it



// Select the balloon element
const balloon = document.getElementById("balloon");
// Set the initial size of the balloon
let balloonSize = 100; // Initial size in percentage

// Function to update balloon size
function updateBalloonSize(change) {
    // Adjust size
    balloonSize += change;
    // Apply the new size
    balloon.style.fontSize = balloonSize + "%";

    // Check if the balloon "explodes"
    if (balloonSize > 300) {
        balloon.textContent = "💥"; // Replace with explosion emoji
        document.removeEventListener("keydown", handleBalloonKeydown); // Remove event listener
    } else if (balloonSize < 30) {
        balloonSize = 30; // Prevent shrinking below 30%
    }
}

// Event handler for keydown
function handleBalloonKeydown(event) {
    if (event.key === "ArrowUp") {
        updateBalloonSize(10); // Inflate
        event.preventDefault(); // Prevent scrolling
    } else if (event.key === "ArrowDown") {
        updateBalloonSize(-10); // Deflate
        event.preventDefault(); // Prevent scrolling
    }
}

// Add event listener for keyboard input
document.addEventListener("keydown", handleBalloonKeydown);


// Select all tab links and tab content sections
const tabs = document.querySelectorAll("#tabbed-layout ul li a");
const tabContents = document.querySelectorAll("#tabbed-contents > div");

// Function to activate a specific tab
function activateTab(tabIndex) {
    // Loop through all tabs and hide content
    tabContents.forEach((content, index) => {
        if (index === tabIndex) {
            content.style.display = "block"; // Show active tab content
        } else {
            content.style.display = "none"; // Hide inactive content
        }
    });
}

// Add event listeners to tab links
tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        activateTab(index); // Activate the clicked tab
    });
});

// Initialize the first tab as active
activateTab(0);
