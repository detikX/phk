if ($(".company-timeline-year").length) {
    $(".timeline-date .date").html(function (i, html) {
        var chars = $.trim(html).split("");
        return "<span>" + chars.join("</span><span>") + "</span>";
    });
}

window.onscroll = (e) => {
    $(".company-timeline-block").each(function (event) {
        var $this = $(this);
        // console.log($this);
        var tar_off =
            $(".company-timeline-list").height() +
            parseInt($(".company-timeline-list").css("top")) -
            $(".company-timeline-year").height();
        var this_off = $(this).offset().top - tar_off;
        var win_scroll = $(window).scrollTop();

        // console.log('thisoff', this_off);
        // console.log('win_scroll', win_scroll);
        if (
            win_scroll > this_off &&
            win_scroll < this_off + $(".company-timeline-year").height()
        ) {

            $this.addClass("active").siblings().removeClass('active');
            var curr_index = $this.index();
            // console.log(curr_index);
            $(".timeline-date")
                .eq(curr_index)
                .addClass("animate")
                .siblings()
                .removeClass("animate");
        }


    });
};