// console.log("Hello, Tech Ed Week 2!");

// Images
// Srcset

const images = [
  {
    Image:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText:
      "Beautiful view overlooking the city of Fujiyoshida with Mount Fuji in the background.",
    srcset:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=480, https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1526374073174-7661a8028eb4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Red temple, surrounded by mountains, trees, and a waterfall.",
    srcset:
      "https://images.unsplash.com/photo-1526374073174-7661a8028eb4?w=480, https://images.unsplash.com/photo-1526374073174-7661a8028eb4?w=800",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1555084624-2d207284de21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText:
      "Jizo statues, often found in rows or groups at temples and cemeteries in Japan.",
    srcset:
      "https://images.unsplash.com/photo-1555084624-2d207284de21?w=480, https://images.unsplash.com/photo-1555084624-2d207284de21?w=800",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "floating torii gate of the Itsukushima Shrine in Japan.",
    srcset:
      "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=480, https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=800",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1551241090-67de81d3541c?q=80&w=1209&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText:
      "Japanese dry garden, also known as a Zen garden, with carefully arranged rocks and raked sand.",
    srcset:
      "https://images.unsplash.com/photo-1551241090-67de81d3541c?w=480, https://images.unsplash.com/photo-1551241090-67de81d3541c?w=800",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText:
      "Storefront of Fujiden, a Japanese restaurant specializing in Okonomiyaki and Monjayaki.",
    srcset:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=480, https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800",
  },
];

// console.log(images); // check in the terminal if images show up

// Thumbnail images

function createThumbnails() {
  const thumbnailContainer = document.getElementById("thumbnail-container");
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.src = images[i].Image;
    img.alt = images[i].altText;
    img.srcset = images[i].srcset;
    img.className = "thumbnail";
    img.addEventListener("click", function () {
      createLargeImagesHandler(i);
      // console.log(img); // Checking to see if it is pulling the right image info
    });
    thumbnailContainer.appendChild(img);
  }
}

createThumbnails();

// Large images

function createLargeImagesHandler(i) {
  const largeImagecontainer = document.getElementById("large-image-container");
  largeImagecontainer.innerHTML = "";
  const img = document.createElement("img");
  img.src = images[i].Image;
  img.alt = images[i].altText;
  img.srcset = images[i].srcset;
  img.classList.add("largeimage");
  // img.className = "largeimage"; // Tried giving it a class name and still didnt work

  largeImagecontainer.appendChild(img);
}

// When the page loads it will display the first image in the array as a large image

function largeImageOnVisit() {
  const largeImagecontainer = document.querySelector("#large-image-container");
  const img = document.createElement("img");
  img.src = images[0].Image;
  img.alt = images[0].altText;
  largeImagecontainer.appendChild(img);
}

largeImageOnVisit();

// Navigation arrow keys
// This was a pain to find out how to do and get working
// So many articles have been ready just for this little bit of code

let currentIndex = 0;

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    createLargeImagesHandler(currentIndex);
  } else if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    createLargeImagesHandler(currentIndex);
  }
});

// Next and previous buttons

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  createLargeImagesHandler(currentIndex);
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  createLargeImagesHandler(currentIndex);
});

//================================================================

// This event will detect when a phone is in portrait mode and prompt the user to turn their phone to landscape.
// I wanted to used this if i could have made all 3 view points different (desk top, Mobile (landscape & portrait))
// It does work

// window.addEventListener("orientationchange", function () {
//   if (window.screen.orientation.type.startsWith("portrait")) {
//     alert(
//       "Please rotate your device to landscape mode for the best viewing experience."
//     );
//   } else {
//   }
// });
