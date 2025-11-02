document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Element Selection ---
  const swatches = document.querySelectorAll(".color-swatches .swatch");
  const umbrellaImage = document.getElementById("umbrella-image");
  const logoPreview = document.getElementById("logo-preview");
  const fileInput = document.getElementById("logo-upload");
  const uploadButton = document.getElementById("upload-button");
  const uploadIcon = document.getElementById("upload-icon");
  const uploadText = document.getElementById("upload-text");
  const loader = document.getElementById("loader");
  const body = document.body;

  // --- Data ---
  const umbrellaImages = {
    blue: "assets/Blue_umbrella.png",
    pink: "assets/Pink_umbrella.png",
    yellow: "assets/Yellow_umbrella.png",
  };

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
  let currentLogoUrl = null;

  // *** THIS IS THE CHANGED VALUE ***
  // Reduced the delay from 2000ms to 800ms (0.8 seconds)
  const LOADER_DELAY = 500;

  // --- Functions ---

  /**
   * Changes the overall theme of the page.
   * @param {string} color - The selected color ('blue', 'pink', or 'yellow').
   */
  function changeTheme(color) {
    body.className = `theme-${color}`;
    swatches.forEach((swatch) => {
      swatch.classList.remove("active");
      if (swatch.dataset.color === color) {
        swatch.classList.add("active");
      }
    });
  }

  /**
   * Changes the main umbrella image, showing a loader during the process.
   * @param {string} color - The selected color ('blue', 'pink', or 'yellow').
   */
  function changeUmbrella(color) {
    // Show loader, hide umbrella and logo
    loader.classList.remove("hidden");
    umbrellaImage.style.opacity = "0";
    logoPreview.style.opacity = "0";

    // Preload the new image in the background
    const tempImage = new Image();
    tempImage.src = umbrellaImages[color];

    // We wait for the image to load *and* for our artificial delay to finish.

    let imageLoaded = false;
    let timerDone = false;

    // This function will run when both are complete
    function showNewUmbrella() {
      if (imageLoaded && timerDone) {
        umbrellaImage.src = tempImage.src;
        loader.classList.add("hidden");
        umbrellaImage.style.opacity = "1";
        if (currentLogoUrl) {
          logoPreview.style.opacity = "1";
        }
      }
    }

    // 1. Set the timer
    setTimeout(() => {
      timerDone = true;
      showNewUmbrella();
    }, LOADER_DELAY);

    // 2. Set the image loader
    tempImage.onload = () => {
      imageLoaded = true;
      showNewUmbrella();
    };
  }

  /**
   * Handles the file input 'change' event.
   * @param {Event} event - The file input event.
   */
  function handleLogoUpload(event) {
    const file = event.target.files[0];

    if (!file) return; // User cancelled

    if (file.size > MAX_FILE_SIZE) {
      alert("File is too large! Max size is 5MB.");
      fileInput.value = null; // Reset the file input
      return;
    }

    // Show loader, hide umbrella and logo
    loader.classList.remove("hidden");
    umbrellaImage.style.opacity = "0";
    logoPreview.style.opacity = "0";

    if (currentLogoUrl) {
      URL.revokeObjectURL(currentLogoUrl);
    }

    currentLogoUrl = URL.createObjectURL(file);

    // We add an artificial delay just like in the video
    setTimeout(() => {
      // Update the logo preview
      logoPreview.src = currentLogoUrl;
      logoPreview.classList.remove("hidden");

      // Hide loader and show everything again
      loader.classList.add("hidden");
      umbrellaImage.style.opacity = "1";
      logoPreview.style.opacity = "1";

      // Update the upload button's UI
      updateUploadButtonUI(file.name);
    }, LOADER_DELAY);
  }

  /**
   * Updates the upload button to show the filename.
   * @param {string} fileName - The name of the uploaded file.
   */
  function updateUploadButtonUI(fileName) {
    uploadIcon.classList.add("hidden");
    uploadText.textContent = fileName.toUpperCase();
  }

  // --- Event Listeners ---

  // Add click listeners to all clickable swatches
  swatches.forEach((swatch) => {
    if (!swatch.disabled) {
      swatch.addEventListener("click", () => {
        const color = swatch.dataset.color;
        changeTheme(color);
        changeUmbrella(color);
      });
    }
  });

  // Add change listener to the file input
  fileInput.addEventListener("change", handleLogoUpload);
});
