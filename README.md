# Reflection

For Week 2's assignment, we were asked to build an accessible image gallery using HTML, CSS, and JavaScript. We had to make sure that the gallery was functional, inclusive, and displayed correctly across various platforms while also meeting the set goals. Honestly, I felt a little overwhelmed with this week's task at first because of the heavy focus on JavaScript. I had to go back and review Figma and my classwork a few times to refresh my memory on how certain elements work. Once everything started to click, it all fell into place, and I realized my initial feelings of being overwhelmed were for nothing. Despite the struggle, I genuinely enjoyed this assignment and am happy that I managed to complete all the main goals.

# Requirements

- 🎯 Implement responsive design methods to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px). ✅
- 🎯 Implement at least one meaningful media query so that there is a noticeable change between mobile and desktop view (an example is to change where the ‘thumbnail bar’ is positioned). ✅
- 🎯 Ensure all images have appropriate alt text attributes for accessibility. ✅
- 🎯 Correctly use event handlers to switch images based on user interactions. ✅

# Stretch Requirements

- 🏹 Use ‘srcset’ to specify which image will be used based on the size of the screen for optimal viewing experience. ✅ I think this is working. I don't really know how I would check it properly, but when I copy the image address on the thumbnail and paste it into a Google search, it shows the edited URL.

# requirements that I wasnt able to achieve (**YET**)

- 🏹 Add ARIA elements to improve accessibility, such as aria-label, aria-live, and other relevant attributes.
- 🏹 Implement key bindings for buttons to enhance navigation, such as using arrow keys to switch between images.

# Errors or Bugs I Encountered

- At first, when I tried running my JS code bit by bit to see if it was working, I kept getting errors with the createLargeImagesHandler function. The error kept saying it was undefined. It took me a while to figure it out with Google and talking with Will, but the error turned out to be that I was missing an "i" within the code.
- I don't know if it's an error or a bug, but the only way I can target the image size for the large image is by targeting it in CSS with img. I've tried other ways, but none of them worked.

# What went really well and what could have gone better?

- For one of my main goals, I had to implement at least one meaningful media query so that there is a noticeable change between mobile and desktop views. I managed to do that: on the desktop view, the thumbnail bar is at the top, and on mobile in portrait mode, the thumbnail is at the bottom. I also wanted to change it for when you put it in landscape, but when I started doing that, it affected the desktop view. Would there be a way to have all three views be different and not affect each other?

# External sources

Info

- My own repo - https://github.com/IndieMasco/TechEdSoftwareDeveloper021
- Tech Ed repo - https://github.com/Tech-Educators/software-dev-021
- FigJam - https://www.figma.com/board/JjN2Zgtoynrau06MjWJs6q/SD021?node-id=0-1&p=f&t=V1WCGcrmVKnoxJDr-0
- MDN - https://developer.mozilla.org/en-US/
- W3School - https://www.w3schools.com/

# Feedback Request

If there is anything you think I could do better or improve on, I'd be happy to listen and learn from what you have to say.
