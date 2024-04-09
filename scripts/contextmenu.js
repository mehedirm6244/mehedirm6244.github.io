/*
  For contextmenu
  Add this script to any page for brand new useless custom
  context menu which looks cool at least
*/

const menuData = [
  {
    text: '<i class="fa-solid fa-copy mr-2"></i>Copy',
    action: function() { document.execCommand("copy") }
  },
  {
    text: '<i class="fa-solid fa-rotate-right mr-2"></i>Reload',
    action: function() { location.reload() },
    drawLineAfter: true
  },
  {
    text: '<i class="fa-brands fa-github mr-2"></i>View source',
    link: 'https://github.com/mehedirm6244/mehedirm6244.github.io'
  }
];

// Draw the context menu
function drawContextMenu() {
  const contextMenu = document.createElement("div");
  contextMenu.id = "context-menu";
  contextMenu.classList = "z-50 bg-bg-400/90 w-52 backdrop-blur-sm shadow border border-white/30 p-2 rounded-lg select-none";
  document.body.appendChild(contextMenu);

  menuData.forEach(function(entry) {
    var button = document.createElement("button");
    button.classList = "px-4 py-1.5 text-sm block w-full text-left rounded hover:text-blue hover:bg-blue/10";
    button.innerHTML = entry.text;
    if (entry.action) {
      button.addEventListener('click', entry.action);
    } else if (entry.link) {
      button.addEventListener('click', function() { window.location.href = entry.link; });
    }
    contextMenu.appendChild(button);

    if (entry.drawLineAfter === true) {
      var line = document.createElement("div");
      line.classList = "border-t border-white/30 m-2";
      contextMenu.appendChild(line);
    }
  });
}

drawContextMenu();

// Context menu events
// Thanks to https://dev.to/shantanu_jana/custom-right-click-context-menu-in-javascript-4112
let events = ["contextmenu"];
let contextMenu = document.getElementById("context-menu");

events.forEach((eventType) => {
  document.addEventListener(
    eventType,
    (e) => {
      e.preventDefault();
      let mouseX = e.clientX || e.touches[0].clientX;
      let mouseY = e.clientY || e.touches[0].clientY;
      let menuHeight = contextMenu.getBoundingClientRect().height;
      let menuWidth = contextMenu.getBoundingClientRect().width;
      let width = window.innerWidth;
      let height = window.innerHeight;
      if (width - mouseX <= 192) {
        contextMenu.style.left = width - menuWidth + "px";
        contextMenu.style.top = mouseY + "px";
        if (height - mouseY <= 192) {
          contextMenu.style.top = mouseY - menuHeight + "px";
        }
      }
      else {
        contextMenu.style.left = mouseX + "px";
        contextMenu.style.top = mouseY + "px";
        if (height - mouseY <= 192) {
          contextMenu.style.top = mouseY - menuHeight + "px";
        }
      }
      contextMenu.style.visibility = "visible";
    },
    { passive: false }
  );
});


document.addEventListener("click", function (e) {
  if (!contextMenu.contains(e.target)) {
    contextMenu.style.visibility = "hidden";
  }
});