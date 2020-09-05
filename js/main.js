$(window).on("load", function () {
  const wrapper = $(".wrapper header")
  const menu_btn = $(".menu-btn button")

  menu_btn.on("click", function(){
    if ($(this).text() === "menu") {
      $(this).text("close")
      wrapper.addClass("open")
    } else {
      $(this).text("menu")
      wrapper.removeClass("open")
    }
  })
})