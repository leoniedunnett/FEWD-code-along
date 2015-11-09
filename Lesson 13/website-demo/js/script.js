function toggleMobileNav(){
    $('nav, .mobile-nav').toggleClass('open');
  }

$(document).ready(function(){
  $('.mobile-nav').click(toggleMobileNav);
});