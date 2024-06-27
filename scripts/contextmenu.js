/*
  For contextmenu
  Add this script to any page for brand new useless custom
  context menu which looks cool at least
*/

const commonMenuEntry = [
  {
    text: '<i class="fa fa-arrow-left mr-2"></i>Previous webpage',
    action: function() { window.history.go(-1); }
  },
  {
    text: '<i class="fa-solid fa-rotate-right mr-2"></i>Reload page',
    action: function() { location.reload() },
    drawSeperator: true
  },
  {
    text: '<i class="fa-solid fa-copy mr-2"></i>Copy selection',
    action: function() {
      document.execCommand("copy");
      contextMenu.style.visibility = "hidden";
    },
    drawSeperator: true
  },
  {
    text: '<i class="fa-brands fa-github mr-2"></i>Source repository',
    action: function() {
      window.open('https://github.com/mehedirm6244/mehedirm6244.github.io', '_blank');
    }
  }
];

// Draw the context menu
function constructContextMenu(e) {
  const contextMenu = document.createElement("div");
  contextMenu.id = "context-menu";
  contextMenu.classList = "z-50 bg-bg-400/90 w-52 backdrop-blur-sm shadow border \
                           border-white/30 p-2 rounded-lg select-none";
  document.body.appendChild(contextMenu);

  // Stuff to do when right clicked on a potential link
  var link = scrapLink(e);
  if (!(link === null)) {
    // Open link in new tab
    var newTabBtn = document.createElement("button");
    newTabBtn.classList = "px-4 py-1.5 text-sm block w-full text-left rounded \
                           hover:text-blue hover:bg-blue/10";
    newTabBtn.innerHTML = '<i class="fa fa-plus mr-2"></i>Open in new tab';
    newTabBtn.addEventListener('click', function() { window.open(link, '_blank'); });
    contextMenu.appendChild(newTabBtn);

    // Copy link address to clipboard if supported
    if (navigator.clipboard) {
      var copyLinkBtn = document.createElement("button");
      copyLinkBtn.classList = "px-4 py-1.5 text-sm block w-full text-left \
                               rounded hover:text-blue hover:bg-blue/10";
      copyLinkBtn.innerHTML = '<i class="fa fa-link mr-2"></i>Copy link';
      copyLinkBtn.addEventListener('click', function() {
        navigator.clipboard.write([
          new ClipboardItem({
            'text/plain': new Blob([link], { type: 'text/plain' })
          })
        ]);
        contextMenu.style.visibility = "hidden";
      });
      contextMenu.appendChild(copyLinkBtn);
    }

    // Draw seperator
    var seperator = document.createElement("div");
    seperator.classList = "border-t border-white/30 m-2";
    contextMenu.appendChild(seperator);
  }

  // Common menu entries
  commonMenuEntry.forEach(function(entry) {
    var button = document.createElement("button");
    button.classList = "px-4 py-1.5 text-sm block w-full text-left rounded \
                        hover:text-blue hover:bg-blue/10";
    button.innerHTML = entry.text;
    if (entry.action) {
      button.addEventListener('click', entry.action);
    }
    contextMenu.appendChild(button);

    if (entry.drawSeperator === true) {
      var seperator = document.createElement("div");
      seperator.classList = "border-t border-white/30 m-2";
      contextMenu.appendChild(seperator);
    }
  });
}

// deconstruct context menu
function deconstructContextMenu() {
  var contextMenu = document.getElementById('context-menu');
  if (!(contextMenu === null)) {
    contextMenu.parentNode.removeChild(contextMenu);
  }
}

// Check if a button or an anchor is valid
function scrapLink(e) {
  const targetElement = event.target;
  let currentElement = targetElement;

  // Sorry
  while (currentElement) {
    if (currentElement.tagName.toLowerCase() === "a") {
      return currentElement.href;
    }
    currentElement = currentElement.parentElement;
  }

  return null;
}

// Context menu events
// Inspired from https://dev.to/shantanu_jana/custom-right-click-context-menu-in-javascript-4112
let contextMenu = document.getElementById("context-menu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  // deconstruct any previously drawn context menu
  deconstructContextMenu();
  // Draw context menu again to check if it's hovering a link or smth
  constructContextMenu(e);
  contextMenu = document.getElementById('context-menu');

  let mouseX = e.clientX || e.touches[0].clientX;
  let mouseY = e.clientY || e.touches[0].clientY;
  let menuHeight = contextMenu.getBoundingClientRect().height;
  let menuWidth = contextMenu.getBoundingClientRect().width;
  let width = window.innerWidth;
  let height = window.innerHeight;

  if (width - mouseX <= 208) {
    contextMenu.style.left = width - menuWidth - 8 + "px";
    contextMenu.style.top = mouseY + "px";
  } else {
    contextMenu.style.left = mouseX + "px";
    contextMenu.style.top = mouseY + "px";
  }
  if (height - mouseY <= menuHeight) {
    contextMenu.style.top = mouseY - menuHeight - 8 + "px";
  }
  contextMenu.style.visibility = "visible";
  },
{ passive: false });

document.addEventListener("click", function (e) {
  if (!contextMenu.contains(e.target)) {
    deconstructContextMenu();
  }
});
