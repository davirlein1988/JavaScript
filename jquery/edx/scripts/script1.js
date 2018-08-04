$(function() {
  $('#section-button').click(function() {
    resetHtml();
    $('section').addClass('.darken');
    displayHtml();
  });

  $('#nav-button').click(function() {
    resetHtml();
    $('nav').addClass('.darken');
    displayHtml();
  });

  $('#first-button').click(function() {
    resetHtml();
    $('.first').addClass('.darken');
    displayHtml();
  });

  $('#second-button').click(function() {
    resetHtml();
    $('.second').addClass('.darken');
    displayHtml();
  });

  $('#div-second-button').click(function() {
    resetHtml();
    $('div.second').addClass('.darken');
    displayHtml();
  })

  $('#span-second-button').click(function() {
    resetHtml();
    $('span.second').addClass('.darken');
    displayHtml();
  })

  $('#navdivdescendent-button').click(function() {
    resetHtml();
    $('nav div').addClass('.darken');
    displayHtml();
  });

  $('#navdivdirect-button').click(function() {
    resetHtml();
    $('nav > div').addClass('.darken');
    displayHtml();
  });

  $('#attribute-equality-button').click(function() {
    resetHtml();
    $('[data-bind="demo"]').addClass('.darken');
    displayHtml();
  });

  $('#attribute-starts-button').click(function() {
    resetHtml();
    $('[data-bind^="another"]').addClass('.darken');
    displayHtml();
  });

  $('#attribute-contains-button').click(function() {
    resetHtml();
    $('[data-bind*="demo"]').addClass('.darken');
    displayHtml();
  });
});