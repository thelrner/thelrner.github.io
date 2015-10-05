window.PersonalSite = {
  bindEvents: function() {
    this.addNavbarListeners();
  },

  addNavbarListeners: function() {
    $('div.navbar').on('mouseenter', this.toggleNavOpacity.bind(this));
    $('div.navbar').on('mouseleave', this.toggleNavOpacity.bind(this));
    $('div.navbar a').on('click', this.scroll.bind(this));
  },

  toggleNavOpacity: function(e) {
    $('section.navbar-container').toggleClass('opaque');
  },

  scroll: function(e) {
    e.preventDefault();
    $currentTarget = $(e.currentTarget);
    $(window).scrollTo( $( $currentTarget.attr('href') ), 500);
  },

};
