document.querySelectorAll('.blog-card').forEach(card => {
  const link = card.getAttribute("link");
  const coverImageSrc = card.getAttribute("cover-image");
  const title = card.getAttribute("title");
  const description = card.getAttribute("description");
  const tags = card.getAttribute("tags");
  const lang = card.getAttribute("language");

  // Validate required attributes
  if (!link || !coverImageSrc || !title || !description || !tags) {
    console.warn(`Missing required attributes for blog card:`, card);
    return;
  }

  const tagsArray = tags.split(',');

  card.classList.add("bg-bg-300", "border", "border-white/30", "rounded-lg", "w-[380px]", 
                     "md:w-96", "overflow-hidden", "hover:cursor-pointer");

  const parentAnchor = document.createElement("a");
  parentAnchor.href = link;

  const coverImage = document.createElement("div");
  coverImage.classList.add("bg-cover");
  coverImage.style.backgroundImage = `url(${coverImageSrc})`;

  const coverImageWrapper = document.createElement("div");
  coverImageWrapper.classList.add("p-6", "md:p-8", "h-full", "w-full", "bg-bg-500/90");

  const pTitle = document.createElement("p");
  const pDescription = document.createElement("p");
  pTitle.classList.add("text-xl", "md:text-2xl", "font-semibold", "mb-1", "md:mb-2");
  pDescription.classList.add("overflow-auto", "h-12", "md:h-14");
  pTitle.textContent = title;
  pDescription.textContent = description;

  coverImageWrapper.append(pTitle, pDescription);

  const tagsDiv = document.createElement("div");
  tagsDiv.classList.add("space-x-1", "space-y-1", "mt-4");
  
  tagsArray.forEach(tag => {
    const currentTag = document.createElement("span"); // Changed to span for semantic correctness
    currentTag.classList.add("bg-white/10", "px-3", "py-1.5", "rounded-full", 
                             "text-sm", "backdrop-blur-sm", "hover:pointer-default");
    currentTag.textContent = tag;
    tagsDiv.appendChild(currentTag);
  });

  coverImageWrapper.appendChild(tagsDiv);
  coverImage.appendChild(coverImageWrapper);
  parentAnchor.appendChild(coverImage);
  card.appendChild(parentAnchor);
});
