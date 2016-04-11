// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// $('#first').click(function () {
//   $('#bigimage').attr('src', 'img/1.jpg')
// })

// $('#second').click(function () {
//   $('#bigimage').attr('src', 'img/2.jpg')
// })

// $('#third').click(function () {
//   $('#bigimage').attr('src', 'img/3.jpg')
// })

// $('#fourth').click(function () {
//   $('#bigimage').attr('src', 'img/4.jpg')
// })


//.mouseover jQuery

// $('#first').mouseover(function () {
//   $('#bigimage').attr('src', 'img/1.jpg')
// })

// $('#second').mouseover(function () {
//   $('#bigimage').attr('src', 'img/2.jpg')
// })

// $('#third').mouseover(function () {
//   $('#bigimage').attr('src', 'img/3.jpg')
// })

// $('#fourth').mouseover(function () {
//   $('#bigimage').attr('src', 'img/4.jpg')
// })


//$(this)

$('.thumb').click(function() {
  
  var newSrc = $(this).attr('src');
  $('#bigimage').attr('src', newSrc);
})