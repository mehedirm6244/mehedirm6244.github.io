const blogCards = document.querySelectorAll('.blog-card');

blogCards.forEach(card => {
  const link = card.getAttribute("link");
  const coverImageSrc = card.getAttribute("cover-image");
  const title = card.getAttribute("title");
  const description = card.getAttribute("description");
  const tags = card.getAttribute("tags");
  const tagsArray = tags.split(',');
  const lang = card.getAttribute("language");
  
  card.classList += " bg-bg-300 border border-white/30 rounded-lg w-[380px] md:w-96 \
                      overflow-hidden hover:cursor-pointer";

  const parentAnchor = document.createElement("a");
  parentAnchor.href = link;

  const coverImage = document.createElement("div");
  coverImage.classList = "bg-cover";
  coverImage.style.backgroundImage = `url(${coverImageSrc})`;

  const coverImageWrapper = document.createElement("div");
  coverImageWrapper.classList = "p-6 md:p-8 h-full w-full bg-bg-500/90";

  const p_title = document.createElement("p");
  const p_description = document.createElement("p");
  p_title.classList = "text-xl md:text-2xl font-semibold mb-1 md:mb-2";
  p_description.classList = "overflow-auto h-12 md:h-14";
  p_title.innerHTML = title;
  p_description.innerHTML = description;

  coverImageWrapper.appendChild(p_title);
  coverImageWrapper.appendChild(p_description);

  let tagsDiv = document.createElement("div");
  tagsDiv.classList = "space-x-1 space-y-1 mt-4";
  tagsArray.forEach(function(tag) {
    let currentTag = document.createElement("button");
    currentTag.classList = "bg-white/10 px-3 py-1.5 rounded-full text-sm backdrop-blur-sm hover:pointer-default";
    currentTag.innerHTML = tag;
    tagsDiv.appendChild(currentTag);
  });
  coverImageWrapper.appendChild(tagsDiv);

  coverImage.appendChild(coverImageWrapper);
  parentAnchor.appendChild(coverImage);
  card.appendChild(parentAnchor);
});
