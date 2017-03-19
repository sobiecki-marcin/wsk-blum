import $ from 'jquery';

/**
 * Opens menu and adds white background to header when menu is opened
 */
$(function(){
  $('.navbar-toggler').click(function () {
    $('.navbar').toggleClass('navbar--white');
    $('.collapse').toggleClass('in');
  });
});

/**
 * Create the sticky / scroll header
 *
 * @method create
 * @param {String} [selector] The DOM selector of the header
 */
function create(selector) {
  const $el = $(selector);


  $(document).scroll(() => {
    const didScroll = $(document).scrollTop() > 0;

    if (didScroll) {
      $el.addClass('navbar--scroll');
    } else {
      $el.removeClass('navbar--scroll');
    }
  });
}

const Header = Object.freeze({
  create,
});

export default Header;
