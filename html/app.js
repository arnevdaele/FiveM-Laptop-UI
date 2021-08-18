Laptop = {}

$(document).on('keydown', function() {
    switch(event.keyCode) {
        case 27:
            Laptop.Close();
            break;

    }
});

$(document).ready(function(){
    window.addEventListener('message', function(event){
        var action = event.data.action;
        switch(action) {
            case "openLaptop":
                Laptop.Open(event.data);
                break;
            case "closeLaptop":
                Laptop.Close();
                break;
        }
    });
});

// MEOS
Laptop.Open = function(data) {
    $(".laptop").fadeIn(1000);
    $("#iframeLocation").html("");
    console.log(data.pagetitle);
    // SET CONTENT
    $("#tabTitle").html(data.pagetitle);
    $("#pageUrl").html(data.pageurl);

    // SET IFRAME VIEW
    var iframeView = '<iframe src=' + data.iframe + ' style="border:none;height:72vh;width:120vh;"></iframe>';
    $("#iframeLocation").append(iframeView);

    setTimeout(() => {
        $(".iframe").fadeIn(1000);
    }, 1000);
        
}

Laptop.Close = function(data) {
    $(".laptop").fadeOut(500);
    $(".iframe").fadeOut(500);
    $.post('http://laptop/closeLaptop');
}

$(document).on('click', '#closelaptop', function(e) {
    e.preventDefault();
    Laptop.Close()
});

window.onload = function(e) {
    $(".laptop").hide();
    $(".iframe").hide();
}