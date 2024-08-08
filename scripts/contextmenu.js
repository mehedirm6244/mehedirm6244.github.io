/*
  Script for creating custom context menu
  Used on `https://mehedirm6244.github.io/`
  This is a bad practice to override the default context menu but at least it is consistent with
  the overall UI of the website
*/

const commonMenuItems = [
  {
    text: '<i class="fa-solid fa-copy mr-2.5"></i>Copy selection',
    action: () => navigator.clipboard.writeText(window.getSelection().toString()).then(() => destroyContextMenu()),
    drawSeparator: true
  },
  {
    text: '<i class="fa-solid fa-rotate-right mr-2.5"></i>Reload page',
    action: () => location.reload()
  },
  {
    text: '<i class="fa-brands fa-github mr-2.5"></i>Source repository',
    action: () => window.open('https://github.com/mehedirm6244/mehedirm6244.github.io', '_blank')
  }
];

// Utility function to create buttons
function createMenuButton(entry) {
  const button = document.createElement("button");
  button.classList = "px-4 py-1.5 text-sm block w-full text-left rounded hover:bg-white/10";
  button.innerHTML = entry.text;
  button.addEventListener('click', entry.action);

  return button;
}

// Draw the context menu
function constructContextMenu(e) {
  const contextMenu = document.createElement("div");
  contextMenu.id = "context-menu";
  contextMenu.classList = "z-50 bg-bg-400/90 w-56 backdrop-blur-sm shadow-lg border border-white/30 p-2 rounded-lg select-none fixed";
  document.body.appendChild(contextMenu);

  const link = scrapLink(e);
  if (link) {
    const linkMenuEntries = [
      {
        text: '<i class="fa-solid fa-arrow-up-right-from-square mr-2.5"></i>Copy link',
        action: () => navigator.clipboard.writeText(link).then(() => destroyContextMenu())
      },
      {
        text: '<i class="fa fa-plus mr-2.5"></i>Open in new tab',
        action: () => window.open(link, '_blank')
      }
    ];

    linkMenuEntries.forEach(entry => contextMenu.appendChild(createMenuButton(entry)));
    drawSeparator(contextMenu);
  }

  commonMenuItems.forEach(entry => {
    contextMenu.appendChild(createMenuButton(entry));
    if (entry.drawSeparator) {
      drawSeparator(contextMenu);
    }
  });

  positionContextMenu(e, contextMenu);
}

function drawSeparator(menu) {
  const separator = document.createElement("div");
  separator.classList = "border-t border-white/20 mx-6 my-2";
  menu.appendChild(separator);
}

// Hide the context menu
function destroyContextMenu() {
  const contextMenu = document.getElementById('context-menu');
  if (contextMenu) {
    contextMenu.parentNode.removeChild(contextMenu);
  }
}

// Scrap link from event target
function scrapLink(e) {
  let currentElement = e.target;
  while (currentElement) {
    if (currentElement.tagName.toLowerCase() === "a") {
      return currentElement.href;
    }
    currentElement = currentElement.parentElement;
  }
  return null;
}

// Position the context menu
function positionContextMenu(e, contextMenu) {
  const mouseX = e.clientX || e.touches?.[0].clientX;
  const mouseY = e.clientY || e.touches?.[0].clientY;
  const { height: menuHeight, width: menuWidth } = contextMenu.getBoundingClientRect();
  const { innerWidth: width, innerHeight: height } = window;

  contextMenu.style.left = (width - mouseX <= menuWidth) ? `${width - menuWidth - 8}px` : `${mouseX}px`;
  contextMenu.style.top = (height - mouseY <= menuHeight) ? `${mouseY - menuHeight - 8}px` : `${mouseY}px`;
  contextMenu.style.visibility = "visible";
}

// Context menu events
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  destroyContextMenu();
  constructContextMenu(e);
}, { passive: false });

document.addEventListener("click", function(e) {
  const contextMenu = document.getElementById("context-menu");
  if (contextMenu && !contextMenu.contains(e.target)) {
    destroyContextMenu();
  }
});
