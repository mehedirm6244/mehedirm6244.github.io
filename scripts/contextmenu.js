/*
  For contextmenu
  Add this script to any page for brand new useless custom
  context menu which looks cool at least
*/

const commonMenuEntry = [
  {
    text: '<i class="fa-solid fa-copy mr-2"></i>Copy',
    action: function() { document.execCommand("copy"); contextMenu.style.visibility = "hidden"; }
  },
  {
    text: '<i class="fa-solid fa-rotate-right mr-2"></i>Reload',
    action: function() { location.reload() },
    drawLineAfter: true
  },
  {
    text: '<i class="fa fa-code mr-2"></i>View source',
    link: 'view-source:' + window.location.href
  },
  {
    text: '<i class="fa-brands fa-github mr-2"></i>Source repository',
    link: 'https://github.com/mehedirm6244/mehedirm6244.github.io'
  }
];

// These will show depending on where you've right-clicked
// i.e. If you click on a link, it'll show some extra entries
const personalizedMenuEntry = [
  {
    text: '<i class="fa fa-plus mr-2"></i>Open link in new tab',
    showOnLink: true
  }
];

// Draw the context menu
function drawContextMenu(e) {
  const contextMenu = document.createElement("div");
  contextMenu.id = "context-menu";
  contextMenu.classList = "z-50 bg-bg-400/90 w-52 backdrop-blur-sm shadow border border-white/30 p-2 rounded-lg select-none";
  document.body.appendChild(contextMenu);

  personalizedMenuEntry.forEach(function(entry) {
    var drawLine = false;
    if (entry.showOnLink && e.target.tagName.toLowerCase() === "a" && e.target.href) {
      drawLine = true;
      console.log("Nice");
      var button = document.createElement("button");
      button.classList = "px-4 py-1.5 text-sm block w-full text-left rounded hover:text-blue hover:bg-blue/10";
      button.innerHTML = entry.text;
      button.addEventListener('click', function() { window.open(e.target.href, '_blank'); });
      contextMenu.appendChild(button);
    }

    if (drawLine) {
      var line = document.createElement("div");
      line.classList = "border-t border-white/30 m-2";
      contextMenu.appendChild(line);
    }
  });

  commonMenuEntry.forEach(function(entry) {
    var button = document.createElement("button");
    button.classList = "px-4 py-1.5 text-sm block w-full text-left rounded hover:text-blue hover:bg-blue/10";
    button.innerHTML = entry.text;
    if (entry.action) {
      button.addEventListener('click', entry.action);
    } else if (entry.link) {
      button.addEventListener('click', function() { window.open(entry.link, '_blank'); });
    }
    contextMenu.appendChild(button);

    if (entry.drawLineAfter === true) {
      var line = document.createElement("div");
      line.classList = "border-t border-white/30 m-2";
      contextMenu.appendChild(line);
    }
  });
}

// Destroy context menu
function destroyContextMenu() {
  var contextMenu = document.getElementById('context-menu');
  if (!(contextMenu === null)) {
    contextMenu.parentNode.removeChild(contextMenu);
  }
}

// Context menu events
// Inspired from https://dev.to/shantanu_jana/custom-right-click-context-menu-in-javascript-4112
let events = ["contextmenu"];
let contextMenu = document.getElementById("context-menu");

events.forEach((eventType) => {
  document.addEventListener(
    eventType,
    (e) => {
      e.preventDefault();
      // Destroy any previously drawn context menu
      destroyContextMenu();
      // Draw context menu again to check if it's hovering a link or smth
      drawContextMenu(e);
      contextMenu = document.getElementById('context-menu');
      let mouseX = e.clientX || e.touches[0].clientX;
      let mouseY = e.clientY || e.touches[0].clientY;
      let menuHeight = contextMenu.getBoundingClientRect().height;
      let menuWidth = contextMenu.getBoundingClientRect().width;
      let width = window.innerWidth;
      let height = window.innerHeight;
      if (width - mouseX <= 192) {
        contextMenu.style.left = width - menuWidth + "px";
        contextMenu.style.top = mouseY + "px";
      } else {
        contextMenu.style.left = mouseX + "px";
        contextMenu.style.top = mouseY + "px";
      }
      if (height - mouseY <= 192) {
        contextMenu.style.top = mouseY - menuHeight + "px";
      }
      contextMenu.style.visibility = "visible";
    },
    { passive: false }
  );
});


document.addEventListener("click", function (e) {
  if (!contextMenu.contains(e.target)) {
    destroyContextMenu();
  }
});