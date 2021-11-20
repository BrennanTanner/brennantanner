

// create config object: rootMargin and threshold
// are two properties exposed by the interface

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);

let options = {
	rootMargin: '0px 0px 0px 0px',
	threshold: 1.0
 }

let callback = (entries, observer) => {
	entries.forEach(entry => {
	  // Each entry describes an intersection change for one observed
	  // target element:
	  //   entry.boundingClientRect
	  //   entry.intersectionRatio
	  //   entry.intersectionRect
	  entry.isIntersecting
	  //   entry.rootBounds
	  //   entry.target
	  //   entry.time
	});
	
 };
 /*
 if (true == true){
	var xmlns = "http://www.w3.org/2000/svg";
	
	let searchIcon = document.createElement("svg");
	let searchIconG = document.createElement("g");
	let searchIconP1 = document.createElement("path");
	let searchIconC = document.createElement("circle");
	let searchIconP2 = document.createElement("path");
	

	searchIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	searchIcon.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
	searchIcon.setAttribute("aria-hidden", "true");
	searchIcon.setAttribute("role", "img");
	searchIcon.setAttribute("id", "footer-sample-full");
	searchIcon.setAttribute("width", "100");
	searchIcon.setAttribute("height", "100");
	searchIcon.setAttribute("preserveAspectRatio", "xMidYMid meet");
	searchIcon.setAttribute("viewBox", "0 0 24 24");
	searchIcon.setAttribute("class", "iconify iconify--line-md");

	searchIconG.setAttribute("fill", "none");

	searchIconP1.setAttribute("d", "M10.5 13.5L3 21");
	searchIconP1.setAttribute("stroke", "currentColor");
	searchIconP1.setAttribute("stroke-width", "2");
	searchIconP1.setAttribute("stroke-linecap", "round");
	searchIconP1.setAttribute("class", "il-md-length-15 il-md-duration-2 il-md-delay-6");

	searchIconC.setAttribute("cx", "15");
	searchIconC.setAttribute("cy", "9");
	searchIconC.setAttribute("r", "6");
	searchIconC.setAttribute("fill", "currentColor");
	searchIconC.setAttribute("fill-opacity", ".3");
	searchIconC.setAttribute("class", "il-md-fill il-md-duration-0 il-md-delay-6");

	searchIconP2.setAttribute("d", "M10.757 13.243a6 6 0 1 1 8.485-8.486a6 6 0 0 1-8.485 8.486z");
	searchIconP2.setAttribute("stroke", "currentColor");
	searchIconP2.setAttribute("stroke-width", "2");
	searchIconP2.setAttribute("stroke-linecap", "round");
	searchIconP2.setAttribute("class", "il-md-length-40 il-md-duration-5 il-md-delay-0");
	

	let element = document.querySelector("#searchIcon");
	element.appendChild(searchIcon);
	searchIcon.appendChild(searchIconG);
	searchIconG.appendChild(searchIconP1);
	searchIconG.appendChild(searchIconC);
	searchIconG.appendChild(searchIconP2);
};

 let observer = new IntersectionObserver(callback, options);
 
 let target = document.querySelector('#searchIcon');
observer.observe(target);


							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" id="footer-sample-full" width="100" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--line-md"><g fill="none"><path d="M10.5 13.5L3 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-6"></path><circle cx="15" cy="9" r="6" fill="currentColor" fill-opacity=".3" class="il-md-fill il-md-duration-0 il-md-delay-6"></circle><path d="M10.757 13.243a6 6 0 1 1 8.485-8.486a6 6 0 0 1-8.485 8.486z" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-40 il-md-duration-5 il-md-delay-0"></path></g></svg>
*/