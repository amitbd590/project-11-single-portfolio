// Menu bar sticky .....
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//    portfolio slider ---------

var forNew = $('.portfolio');
forNew.owlCarousel();
// Go to the next item
$('.owl-prev-1').click(function () {
  forNew.trigger('next.owl.carousel', [500]);
})
// Go to the previous item
$('.owl-next-1').click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  forNew.trigger('prev.owl.carousel', [500]);
});


var blog = $(".blog");
blog.owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  autoplay: true,
  items: 3,

});


$('.owl-prev').click(function () {
  blog.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-next').click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  blog.trigger('prev.owl.carousel', [300])
});


// overlay It's Me ----------

var myVar = document.querySelector('.login-btn');

myVar.addEventListener('click', function add() {
  myClass = document.querySelector('#myBtn');
  myClass.classList.add('active');
});

var myVar = document.querySelector('.remove_btn');

myVar.addEventListener('click', function remove() {
  MyRemoveClass = document.querySelector('#myBtn');
  MyRemoveClass.classList.remove('active');
})



// onePageNav ------------

// try {

//   $('#nav').onePageNav({
//     currentClass: 'current',
//     changeHash: false,
//     scrollSpeed: 1000,
//     scrollThreshold: 0.5,
//     filter: '',
//     easing: 'swing',
//     begin: function () {
//       //I get fired when the animation is starting
//     },
//     end: function () {
//       //I get fired when the animation is ending
//     },
//     scrollChange: function ($currentListItem) {
//       //I get fired when you enter a section and I pass the list item of the section
//     }
//   });

// } catch (error) {
//   console.log(error);

// }



// Contact Form -------

var contact_open = document.querySelector('.btn-contact');
contact_open.addEventListener('click', function () {
  my_contact = document.querySelector('#contact_file_popUp');
  my_contact.classList.add('active')
});

var contact_remove = document.querySelector('.remove_btn_2');
contact_remove.addEventListener('click', function () {
  my_contact = document.querySelector('#contact_file_popUp');
  my_contact.classList.remove('active')
});
var contact_remove_2 = document.querySelector('#contact_file_popUp');
contact_remove_2.addEventListener('click', function () {
  my_contact = document.querySelector('#contact_file_popUp');
  my_contact.classList.remove('active')
});




