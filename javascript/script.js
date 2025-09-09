
// Mobile nav toggle for <=1150px
document.addEventListener('DOMContentLoaded', function(){
  var hamburger = document.getElementById('hamburger');
  var navOptions = document.querySelector('.nav-options');
  var navContact = document.querySelector('.nav-contact');
  var scrollPosition = 0;
  if(!hamburger || !navOptions){ return; }

  function closeMenu(){
    navOptions.classList.remove('active');
    hamburger.classList.remove('active');
    if(navContact){ navContact.classList.remove('active'); }
    document.body.classList.remove('menu-open');
    document.documentElement.classList.remove('menu-open');
    // Restore scroll position
    window.scrollTo(0, scrollPosition);
  }

  function closeOnOutsideClick(e){
    if(!navOptions.contains(e.target) && !hamburger.contains(e.target)){
      closeMenu();
      document.removeEventListener('click', closeOnOutsideClick);
    }
  }

  hamburger.addEventListener('click', function(e){
    e.stopPropagation();
    navOptions.classList.toggle('active');
    hamburger.classList.toggle('active');
    if(navContact){ navContact.classList.toggle('active'); }
    if(navOptions.classList.contains('active')){
      // Save and lock scroll
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      document.body.classList.add('menu-open');
      document.documentElement.classList.add('menu-open');
    }else{
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
      window.scrollTo(0, scrollPosition);
    }
    if(navOptions.classList.contains('active')){
      setTimeout(function(){ document.addEventListener('click', closeOnOutsideClick); }, 0);
    }else{
      document.removeEventListener('click', closeOnOutsideClick);
    }
  });

  // Cleanup on resize back to desktop
  window.addEventListener('resize', function(){
    if(window.innerWidth > 1150){
      closeMenu();
    }
  });
});
