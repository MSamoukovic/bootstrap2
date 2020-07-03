function goOnNextTab(nav, button) {
    var profileTab = document.getElementById(nav);
    profileTab.classList.remove("disabled")

    tabId = document.getElementById(nav);
    document.getElementById(button).addEventListener("click", tabId.click());
}