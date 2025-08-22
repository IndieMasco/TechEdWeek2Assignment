console.log("Hello, Tech Ed Week 2!");

// I need to store my images data in an array of objects

const images = [
  {
    Image:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText:
      "Beautiful view over looking the city of Fujiyoshida with mount fuji in the background",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1526374073174-7661a8028eb4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Red temple surounded by moutains, trees and a waterfall",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1555084624-2d207284de21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText:
      "Jizo statues, often found in rows or groups at temples and cemeteries in Japan.",
  },
];

// console.log(images); // check in the terminal if images show up

// I need to create my thumbnail images

function createThumbnails() {
  const thumbnailContainer = document.getElementById("thumbnail-container");
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.src = images[i].Image;
    img.alt = images[i].altText;
    img.className = "thumbnail";
    img.addEventListener("click", function () {
      createLargeImagesHandler(i);
      // console.log(img);
    });
    thumbnailContainer.appendChild(img);
  }
}

createThumbnails();

// I need to create my large images
// this task is the event handler for the thumbnail events

function createLargeImagesHandler(i) {
  const largeImagecontainer = document.getElementById("large-image-container");
  largeImagecontainer.innerHTML = "";
  const img = document.createElement("img");
  img.src = images[i].Image;
  img.alt = images[i].altText;
  img.classList.add("largeimage");

  largeImagecontainer.appendChild(img);
}
