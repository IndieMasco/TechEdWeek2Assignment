Thank you for your submission, Sam!

What a beautiful gallery!!! This is a very tricky assignment in places (especially for 2 weeks into the course!) and you’ve succeeded in implementing all of the core aspects that we were looking for, as well as stretch goals!!
You’ve clearly been working hard to absorb the course material over the last 2 weeks and it has definitely paid off!
Let’s check out some of your implementations!

# HTML:

Your HTML layout and choice of elements is generally very good. Nicely done!
You’re following some best practices and definitely showing confidence in creating the scaffolding for your CSS styling and Javascript interactivity! There a few areas still worth looking at to tighten up our best practices though!

- Landmarks -> Wrap the main UI in <main> and stick to <nav> for page browsing and image browsing controls.

- Live updates -> I would add aria-live="polite" to #large-image-container so screen readers announce image changes.

- Control linkage -> Try giving the Next/Prev aria-controls="large-image-container".


# CSS:

Some great styling on display this week! Nicely done!!! I especially like the contrast of the grey background with your cool images and the positioning of your controls is spot on! You’ve also had a really great go at implementing some of the accessibility and responsiveness strategies we covered last week too! Well done for creating your media query and having it pop the thumbnail container to the bottom of the screen for mobile users!

Some things to consider:

- Centering thumbnails (desktop) -> position: fixed; width:20%; right:40% is "brittle". For centering, try using left:50%; transform: translateX(-50%); with a fixed/max width.

- Global img rule -> img { width:100vw; height:100vh; } is pretty heavy duty for ALL images! Limit to the large image only, e.g. #large-image-container img { width:100vw; height:100vh; object-fit:contain; }.

- Mobile overlap -> Bottom-fixed thumbnail bar can cover content. Maybe add bottom spacing for the large image on small screens (e.g., #large-image-container { padding-bottom: 110px; } in the mobile media query).

- Buttons positioning -> top:100px may collide on varied screens. My strategy would be vertical centering: top:50%; transform: translateY(-50%); and add a z-index so they sit above the image/thumbnails.

- Focus visibility-> Add :focus-visible styles for buttons and thumbnails for keyboard users. How does this help?

- Scrolling affordance -> even though overflow-x: scroll on thumbnails is fine as is, what if you tried using gap and reducing .thumbnail height on small screens (e.g., 80–100px) for better fit?

# Javascript:

You’ve clearly made excellent progress in turning last weeks JS learning outcomes into practical implementations! Absolutely fantastic work, Sam! I love that you're already pushing yourself to experiment with different implementation strategies and being comfortable that they don't always work straight away! I can’t wait to see what amazing Javascript goodness you have in store for us in your future assignments!!

Some things to consider:

- Index sync "bug" -> Clicking a thumbnail shows the image but doesn’t update the value of currentIndex. In the click handler, you can set currentIndex = i; before calling createLargeImagesHandler(i).

- Invalid srcset -> Your strings lack width descriptors and sizes. Correct syntax is:

 img.srcset = "…w=480 480w, …w=800 800w"; img.sizes = "100vw";

- ARIA updates -> When the image changes, we should update:

    - #large-image-container text (caption) so aria-live="polite" announces it.

    - Thumbnails’ aria-current (set on active, remove from others).

    - Optionally, you could move focus to the large image with img.focus() (make it focusable via using  tabindex="-1").

- Performance niceties -> Try adding loading="lazy" to thumbnails and decoding="async" to all created images. How does this affect performance?

# Reflection:

Thank you for submitting a great reflection! As always, your reflection is an essential resource for me to be able to give you some specific feedback on your conceptual understanding! Keep it up!!!

From your reflection:

#### Checking whether srcset works:

- In Chrome DevTools -> Network (disable cache), emulate a small device, reload, and see which image URL actually downloads.

- In Elements, select the `<img>` and look for the “Current source” / “Rendered size”.

- Make sure each has a width descriptor (e.g., 480w, 800w) and you provide a matching sizes (e.g., sizes="100vw" or the actual rendered width). Without sizes, browsers may pick the wrong one!

#### Three distinct layouts (desktop / mobile portrait / mobile landscape):

- Go mobile-first, then layer some mutually exclusive queries:

    - Base = mobile portrait

    - @media (orientation: landscape) and (max-width: 900px) { … } (mobile landscape)

    - @media (min-width: 900px) { … } (desktop)

- This avoids desktop rules hitting phones in landscape. If a rule must target only one mode, include both orientation and a specific width bounding.

#### General JS sanity tips (for the “undefined” moments):

- Log early, log often -> after working out the index, before calling the render function.

- Keep render "pure" -> one function that renders from the index, all inputs go through it.

- If a click on a thumbnail sets the image, also set currentIndex = i; so Next/Prev will stay in sync.

# Deployment:

Well done for fully deploying your assignment with Github pages!
We’ll be looking at new ways for deploying our projects in the near future and your successful deployments are going to prepare you for what’s next!

Your gallery site is really well-built and includes all of the core goals that we were looking to see as well as stretch goals!! Outstanding skills on display, well done!!!
All core requires and extras means a nice big 4 for you!!! We’re super pleased with the progress you’ve made in only 2 short weeks, imagine what you’re going to be capable of by the end of the course!!!

~Joe

PS: Your git commit messages are GREAT and 44 commits makes my heart happy. SKILZZZZZZ!