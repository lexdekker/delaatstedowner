var downer = downer || {};

(function(){
	var $banner = $('.c-banner');
	var $bannerHeight = $banner.height();
	var $buttonReadMore = $('.c-readmore .e-button.v-read');
	var $buttonGoOn = $('.c-readmore .e-button.v-go');
	var $newsletterModal = $('#newsletterModal');
	var durationScrollAnimation = 700;

	downer.controller = {
		init: function(){
      downer.interaction.init();
			downer.newsletter.init();
		}
	}

  downer.interaction = {
    init: function() {
			this.scrollPsyButtons();
      this.handleButtonReadMore();
			this.handleButtonGoOn();
    },
		showButtonReadMore: function () {
			$buttonReadMore.css("display", "none");
			$buttonGoOn.css("display", "block");
		},
		showButtonGoOn: function () {
			$buttonReadMore.css("display", "block");
			$buttonGoOn.css("display", "none");
		},
    handleButtonReadMore: function() {
			$buttonReadMore.click(function(event) {
			    event.preventDefault();
			    $('html, body').animate({ scrollTop: $bannerHeight }, durationScrollAnimation, 'swing',function() {
						downer.interaction.showButtonReadMore();
					});
			});
    },
		handleButtonGoOn: function() {
			$buttonGoOn.click(function(event) {
					event.preventDefault();
					$('html, body').animate({ scrollTop: 0 }, durationScrollAnimation, 'swing',function() {
						downer.interaction.showButtonGoOn();
					});
			});
		},
		scrollPsyButtons: function () {
			$(window).scroll(function (event) {
			    var scroll = $(window).scrollTop();
					// -1 to prevent a bug with the scroll down animation --> handleButtonReadMore()
					if (scroll > $bannerHeight - 1) {
						downer.interaction.showButtonReadMore();
					} else {
						downer.interaction.showButtonGoOn();
					}
			});
		},
  }

	downer.newsletter = {
		init: function() {
			this.showNewsletterModal();
		},
		showNewsletterModal: function () {
			setTimeout(function() {
		    $newsletterModal.modal();
			}, 10000);
		}
	}
})();

downer.controller.init();
