window.PersonalSite = {
  bindEvents: function() {
    this.addNavbarListener();
  },

  addNavbarListener: function() {
    $('div.navbar li').on('mouseenter', this.toggleNavOpacity.bind(this));
    $('div.navbar li').on('mouseleave', this.toggleNavOpacity.bind(this));
    $('div.navbar li').on('click', this.beObnoxious.bind(this));
  },

  toggleNavOpacity: function(e) {
    $('section.navbar-container').toggleClass('opaque');
  },

  beObnoxious: function(e) {
    console.log('being obnoxious!');
  },

};

// window.PersonalSite.bindEvents = function() {
//   this.addNavbarListener();
// };
// //i won't even bother using a prototypes here -- app is literally 1 page
//
// window.PersonalSite.addNavbarListener: function() {
//
// }
