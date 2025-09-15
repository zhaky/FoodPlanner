function addMainMenu() {

    // Get the main menu container
    const mainMenu = document.getElementById("mainMenu");
    if (!mainMenu) {
        console.error("Main menu container not found.");
        return;
    }

    mainMenu.className = "mainMenu level2";

    // Create menu buttons with their respective IDs and icons
    const menuButtons = [
        { id: "button-menu_dashboard", icon: "Icons/dashboard.png", href: "index.htm" },
        { id: "button-menu_plan", icon: "Icons/plan.png", href: "plan.htm" },
        { id: "button-menu_recipes", icon: "Icons/recipes.png", href: "recipes.htm" },
        { id: "button-menu_storage", icon: "Icons/storage.png", href: "storage.htm" },
        { id: "button-menu_settings", icon: "Icons/settings.png", href: "settings.htm" }
    ];

    // Add each button to the main menu
    menuButtons.forEach(menuButton => {
        const button = document.createElement("a");
        button.className = `button button-menu ${menuButton.id === "button-menu_dashboard" ? "button-active" : ""}`;
        button.id = menuButton.id;
        button.innerHTML = `<img class="button-icon" src="${menuButton.icon}" alt="">`;
        button.onclick = function() {
            window.location.href = menuButton.href;
        };
        mainMenu.appendChild(button);
    });

}

function closeMenu() {
    const subMenu = document.getElementById("subMenu");
    if (subMenu) {
        subMenu.innerHTML = "";
        subMenu.className = "";
    }
}

function openMenu() {
    const siteName = window.location.pathname.split("/").pop();toLowerCase();
    siteName = siteName.replace(".htm", "");

    const subMenu = document.getElementById("subMenu");
    if (!subMenu) {
        console.error("Sub menu container not found.");
        return;
    }

    // Clear existing submenu content
    closeMenu();
    
    const buttons = [];

    switch (siteName) {
        case "index":
            buttons = [
                { icon: "Icons/help.png", action: () => alert("Help clicked") },
                { icon: "Icons/about.png", action: () => alert("About clicked") }
            ];
            break;
        case "plan":
            buttons = [
                { icon: "Icons/add.png", action: () => alert("Add clicked") },
                { icon: "Icons/edit.png", action: () => alert("Edit clicked") },
                { icon: "Icons/sort.png", action: () => alert("Sort clicked") }
            ];
            break;
        case "recipes":
            buttons = [
                { icon: "Icons/add.png", action: () => alert("Add clicked") },
                { icon: "Icons/edit.png", action: () => alert("Edit clicked") },
                { icon: "Icons/sort.png", action: () => alert("Sort clicked") },
                { icon: "Icons/shop.png", action: () => alert("Shop clicked") }
            ];
            break;
        case "storage":
            buttons = [
                { icon: "Icons/add.png", action: () => alert("Add clicked") },
                { icon: "Icons/edit.png", action: () => alert("Edit clicked") },
                { icon: "Icons/sort.png", action: () => alert("Sort clicked") },
                { icon: "Icons/shop.png", action: () => alert("Shop clicked") }
            ];
            break;
        case "settings":
            buttons = [
                { icon: "Icons/help.png", action: () => alert("Help clicked") },
                { icon: "Icons/config.png", action: () => alert("Config clicked") },
                { icon: "Icons/account.png", action: () => alert("Account clicked") },
                { icon: "Icons/exit.png", action: () => alert("Exit clicked") }
            ];
            break;
        default:
            console.warn("No submenu defined for this page.");
            return;
    }

    // Add buttons to the submenu
    buttons.forEach(subMenuButton => {
        const button = document.createElement("a");
        button.className = "button button-menu button-inactive";
        button.innerHTML = `<img class="button-icon" src="${subMenuButton.icon}" alt="">`;
        button.onclick = subMenuButton.action;
        subMenu.appendChild(button);
    });

}

addMainMenu();