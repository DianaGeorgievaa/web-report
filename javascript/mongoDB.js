window.onscroll = function() {
    showAndHideScrollButton()
};

function showAndHideScrollButton() {
    const maxScrollToShowButton = 2000;
    let button = document.getElementById("scroll-button");
    if (document.body.scrollTop > maxScrollToShowButton || document.documentElement.scrollTop > maxScrollToShowButton) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}