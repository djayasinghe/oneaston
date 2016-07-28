$("body").fitVids();
Template.menu.onRendered(function () {
    $('#wrapper').scroll(function (e) {
        return $('.navbar, .right-menu-bt')[$(this).scrollTop() > 0 ? "addClass" : "removeClass"]("small");
    });
    $(".right-menu-bt").click(function(){
    $(".right-menu-bg").css("right", "0");
});
});
Template.menu.events({
    'click .open-right-menu': function() {
        $(".right-menu-bg").css("right", "0");
        $(".hide-body").show();
       // $(".right-menu-bg").css("right", "0");
    },
    'click .hide-body': function() {
        $(".right-menu-bg").css("right", "-300px");
        $(".hide-body").hide();
       // $(".right-menu-bg").css("right", "0");
    },
    'click .close-right-menu': function(){
        $(".right-menu-bg").css("right", "-300px");
        $(".hide-body").hide();
    }
}); 