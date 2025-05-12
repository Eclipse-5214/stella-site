// Function to copy command to clipboard and show feedback
function copyCommand(command, event) {
    navigator.clipboard.writeText(command).then(() => {
        const button = event.target.closest(".copy-button");
        if (button) {
            const originalIcon = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                button.innerHTML = originalIcon;
            }, 1000);
        }
    });
}

// Function to toggle alternative installation popup
function toggleAltInstall() {
    const altInstall = document.querySelector(".alt-install");
    altInstall.classList.toggle("active");
}

// Function to close alternative installation popup
function closeAltInstall() {
    const altInstall = document.querySelector(".alt-install");
    altInstall.classList.remove("active");
}

// Event listener to close alt install popup when clicking outside
if (document.querySelector(".alt-install")) {
    document.addEventListener("click", function (event) {
        const altInstall = document.querySelector(".alt-install");
        const toggleButton = document.querySelector(".toggle-button");
        const closeButton = document.querySelector(".close-button");

        if (altInstall.classList.contains("active") && !altInstall.contains(event.target) && !toggleButton.contains(event.target) && !closeButton.contains(event.target)) {
            altInstall.classList.remove("active");
        }
    });
}

// Function to show feature popup with content
function showFeaturePopup(title, description, event) {
    const popup = document.querySelector(".feature-popup");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const popupEmoji = document.getElementById("popup-emoji");

    // Set emoji based on feature category
    if (title.includes("BLC") || title.includes("Route") || title.includes("Secret") || title.includes("Terminal") || title.includes("Crypt") || title.includes("Death")) {
        popupEmoji.textContent = "💀";
    } else if (title.includes("Map") || title.includes("Layout") || title.includes("Boss") || title.includes("Score") || title.includes("Room") || title.includes("Party")) {
        popupEmoji.textContent = "🗺️";
    } else {
        popupEmoji.textContent = "✨";
    }

    popupTitle.textContent = title;
    popupDescription.textContent = description;

    // Find and update parent feature section
    const featureSection = event.target.closest(".feature-section");
    if (featureSection) {
        featureSection.classList.add("popup-active");
        featureSection.appendChild(popup);
        void popup.offsetWidth;
        popup.classList.add("active");
    }
}

// Function to close feature popup
function closeFeaturePopup() {
    const popup = document.querySelector(".feature-popup");
    const activeSection = document.querySelector(".feature-section.popup-active");

    popup.classList.remove("active");

    if (activeSection) {
        activeSection.classList.remove("popup-active");
    }

    // Move popup back after transition
    setTimeout(() => {
        if (!popup.classList.contains("active")) {
            document.querySelector(".features-box").appendChild(popup);
        }
    }, 300);
}

// Event listener to close feature popup when clicking outside
if (document.querySelector(".feature-popup")) {
    document.addEventListener("click", function (event) {
        const popup = document.querySelector(".feature-popup");
        const closeButton = document.querySelector(".close-popup");

        if (popup.classList.contains("active") && !popup.contains(event.target) && !event.target.closest("li")) {
            closeFeaturePopup();
        }
    });
}
