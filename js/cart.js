function goOnNextTab(nav, button) {
    var profileTab = document.getElementById(nav);
    profileTab.classList.remove("disabled")

    tabId = document.getElementById(nav);
    document.getElementById(button).addEventListener("click", tabId.click());
}

function goOnTab(nav, button) {
    var tabId = document.getElementById(nav);
    document.getElementById(button).addEventListener("click", tabId.click());
}

function disableTab(nav, button) {
    var profileTab = document.getElementById(nav);
    profileTab.classList.add("disabled")
}