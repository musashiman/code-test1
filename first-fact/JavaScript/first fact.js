jQuery(function($){
  $(".big-bg").bgSwitcher({
    images:["images/main-bg1.jpg","images/main-bg2.jpg","images/main-bg3.png"],
    interval:5000,
    loop:true,
    shuffle:true,
    effect:"blind",
    duration:500,
    easing:"swing"
  });
} );