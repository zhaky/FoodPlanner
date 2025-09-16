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
        { id: "button-menu_dashboard", icon: "Icons/dashboard.png", onclick: () => { window.location.href = "index.htm"; changeActiveMenuButton("button-menu_dashboard"); } },
        { id: "button-menu_navigation", icon: "Icons/navigation.png", onclick: openNavigation },
        { id: "button-menu_toolMenu", icon: "Icons/subMenu-Open.png", onclick: openToolMenu }
    ];

    // Add each button to the main menu
    menuButtons.forEach(menuButton => {
        const button = document.createElement("a");
        button.className = `button ${menuButton.id === "button-menu_dashboard" ? "button-active" : ""}`;
        button.id = menuButton.id;
        button.innerHTML = `<img class="button-icon" src="${menuButton.icon}" alt="">`;
        button.href = "#";
        button.onclick = menuButton.onclick;
        mainMenu.appendChild(button);
    });

}

function changeActiveMenuButton(newActiveButtonId) {
    const currentActiveButton = document.getElementsByClassName("button button-active")[0];
    const newActiveButton = document.getElementById(newActiveButtonId);
    
    if (!currentActiveButton) { // No active button yet
        newActiveButton.classList.add("button-active");
    }
    else if (currentActiveButton.id === newActiveButtonId) { // Clicked the active button
        currentActiveButton.classList.remove("button-active");
    } else { // Switch active button
        console.log("CurrentActiveButton: ", currentActiveButton.id);
        currentActiveButton.classList.remove("button-active");
        newActiveButton.classList.add("button-active");
    }

}

function closeMenu() {
    const subMenu = document.getElementById("subMenu");
    if (subMenu.className) {
        subMenu.innerHTML = "";
        subMenu.className = "";
    }
}

function openToolMenu() {

    changeActiveMenuButton("button-menu_toolMenu");

    // Get name of site, so we know which tool menu to open
    let siteName = window.location.pathname.split("/").pop().toLowerCase();
    siteName = siteName.replace(".htm", "");
    console.log("siteName: " + siteName);

    // Get the subMenu container
    const subMenu = document.getElementById("subMenu");

    // Clear existing tool menu content. If already open, close it.
    if (subMenu.className === "subMenu level3 toolMenu") {
        closeMenu();
        return;
    } else {
        closeMenu();
    }

    // Set class for toolMenu, so we know the type of menu
    subMenu.className = "subMenu level3 toolMenu";

    // Define buttons based on the current page
    let buttons = [];

    switch (siteName) {
        case "index":
            buttons = [
                { icon: "Icons/feedback.png" },
                { icon: "Icons/news.png" },
                { icon: "Icons/help.png" }
            ];
            break;
        case "plan":
            buttons = [
                { icon: "Icons/add.png" },
                { icon: "Icons/edit.png" },
                { icon: "Icons/sort.png" }
            ];
            break;
        case "recipes":
            buttons = [
                { icon: "Icons/add.png" },
                { icon: "Icons/edit.png" },
                { icon: "Icons/sort.png" }
            ];
            break;
        case "storage":
            buttons = [
                { icon: "Icons/add.png" },
                { icon: "Icons/edit.png" },
                { icon: "Icons/shop.png" },
                { icon: "Icons/sort.png" }
            ];
            break;
        case "settings":
            buttons = [
                { icon: "Icons/config.png" },
                { icon: "Icons/account.png" },
                { icon: "Icons/exit.png" }
            ];
            break;
        default:
            console.warn("No tool menu defined for this page.");
            return;
    }

    // Add buttons to the tool menu
    buttons.forEach(toolMenuButton => {
        const button = document.createElement("a");
        button.className = "button button-menu button-inactive";
        button.innerHTML = `<img class="button-icon" src="${toolMenuButton.icon}" alt="">`;
        button.onclick = toolMenuButton.action;
        subMenu.appendChild(button);
    });

}

function openNavigation() {

    changeActiveMenuButton("button-menu_navigation");

    // If subMenu is already open on navigation, close it and stop, else clear it and continue.
    const subMenu = document.getElementById("subMenu");
    if (subMenu.className === "subMenu level3 navigationMenu") {
        closeMenu();
        return;
    } else {
        closeMenu();
    }

    subMenu.className = "subMenu level3 navigationMenu";
    
    const navigationMenuButton = [
        { id: "button-menu_settings", icon: "Icons/settings.png", href: "settings.htm" },
        { id: "button-menu_storage", icon: "Icons/storage.png", href: "storage.htm" },
        { id: "button-menu_recipes", icon: "Icons/recipes.png", href: "recipes.htm" },
        { id: "button-menu_plan", icon: "Icons/plan.png", href: "plan.htm" }
    ];

    
    // Add navigation buttons to the navigationMenu
    navigationMenuButton.forEach(navButton => {
        const button = document.createElement("a");
        button.className = "button";
        button.id = navButton.id;
        button.innerHTML = `<img class="button-icon" src="${navButton.icon}" alt="">`;
        button.href = navButton.href;
        subMenu.appendChild(button);
    });

}

// Initialize the main menu on page load

addMainMenu();