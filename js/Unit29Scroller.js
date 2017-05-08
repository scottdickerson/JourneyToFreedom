var pullScreenTimer = null;

function scrollLeft() {
    var scrollposition = $('#scrolly').scrollLeft();
    $('#scrolly').animate( { scrollLeft: '-=250' }, 500);
}

function scrollRight() {
    var scrollposition = $('#scrolly').scrollLeft();
    $('#scrolly').animate( { scrollLeft: '+=250' }, 500);
}

function scrollCenter() {

    //Hide the pullScreen if visible
    if ($('#pullScreen').is(":visible")) {
        window.togglePull();
    } else {
        //Clear any pullScreen timer that might be running
        resetPullScreenTimer(10000);
    }

    $('#scrolly').animate( { scrollLeft: '950' }, 500);
    $('.scrollers').show();

}

function togglePull() {
    $('#pullScreen').toggle();
    $('#blackOverlay').toggle();

    if ($('#pullScreen').is(":visible")) {
        //if have just shown the pull screen it should hide again in 5 seconds
        resetPullScreenTimer(5000);
    } else {
        //if I have just hidden the pull screen it should show again in 30 seconds
        resetPullScreenTimer(10000);
    }
}

function resetPullScreenTimer(timeout) {
    //Need to also stop any pull screen timer we might have
    if (pullScreenTimer) {
        clearTimeout(pullScreenTimer);
    }

    pullScreenTimer = setTimeout(window.togglePull, timeout);
}


window.onbeforeunload = function (e) {
    var scrollposition = $("#scrolly").scrollLeft();
    // Put the object into storage
    localStorage.setItem('scrollposition', scrollposition);

    console.info("scrollposition: "+scrollposition);
};
window.onload = function (e) {
    // Retrieve the object from storage
    var scrollposition = localStorage.getItem('scrollposition');
    if (scrollposition) {
        console.info("scrolling back to position: "+scrollposition);
        $("#scrolly").scrollLeft(scrollposition);
    }
};

