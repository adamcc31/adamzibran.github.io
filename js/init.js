(function ($){

    "use strict";
    var NicolasInit     = {
      
        init: function () {
            this.select2();
            this.navBG();
            this.cursorEffects();
            this.mobileMenu();
            this.magnificPopup();
            this.anchorDown();
            this.swiperSlider();
            this.accordion();
            this.totop();
            this.counter();
            this.myCarousel();
            this.interactiveImage();
            this.marqueeAnimation();
            this.scrollAnimation();
            this.dataBgImg();
            this.imgToSvg();
        },
		
		select2: function(){
			$('.my_select_two').select2();
		},
		
		navBG: function(){
			$(window).on('scroll',function(){
				var menu	 		= jQuery('.nicolas_sm_header');
				var WinOffset		= jQuery(window).scrollTop();

				if(WinOffset >= 100){
					menu.addClass('opened');
				}else{
					menu.removeClass('opened');
				}
			});	
		},
		
		cursorEffects: function(){
			var myCursor	= $('.mouse-cursor');
	
			if(myCursor.length){
				if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n, i = 0,
					o = !1;
				window.onmousemove = function (s) {
					o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
				}, $("body").on("mouseenter", "a,.aali_tm_topbar .trigger, .cursor-pointer", function () {
					e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
				}), $("body").on("mouseleave", "a,.aali_tm_topbar .trigger, .cursor-pointer", function () {
					$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
				}), e.style.visibility = "visible", t.style.visibility = "visible"
			}
			}
		},
		
		mobileMenu: function(){
			var hamburger 		= $('.trigger .hamburger');
			var list			= $('.nicolas_sa_mobile_menu .list ul li');
			var mobileMenu		= $('.nicolas_sa_mobile_menu .dropdown');
			var mobileMenuList	= $('.nicolas_sa_mobile_menu .dropdown .dropdown_inner ul li a');

			hamburger.on('click',function(){
				var element 	= $(this);

				if(element.hasClass('is-active')){
					element.removeClass('is-active');
					list.removeClass('opened');
					mobileMenu.slideUp();
				}else{
					element.addClass('is-active');
					list.each(function(i){
						var ele = $(this);
						setTimeout(function(){ele.addClass('opened');},i*50);
					});
					mobileMenu.slideDown();
				}
				return false;
			});

			mobileMenuList.on('click',function(){
				$('.trigger .hamburger').removeClass('is-active');
				mobileMenu.slideUp();
			});	
		},
		
		magnificPopup: function(){
			$('.gallery_zoom').each(function() { // the containers for all your galleries
				$(this).magnificPopup({
					delegate: 'a.zoom', // the selector for gallery item
					type: 'image',
					gallery: {
					  enabled:true
					},
					removalDelay: 300,
					mainClass: 'mfp-fade'
				});

			});
			$('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
				$(this).magnificPopup({
					disableOn: 100,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: true
				});
			});
			$('.soundcloude_link').magnificPopup({
			  type : 'image',
			   gallery: {
				   enabled: true, 
			   },
			});	
		},
		
		anchorDown: function(){
			var topbar		= $('.nicolas_sm_header').outerHeight();
			var mobileMenu	= $('.nicolas_sa_mobile_menu').height();
			var WW			= $(window).width();
			var value		= 0;
			if(WW >= 1040){
				value = topbar;
			}else{
				value = mobileMenu;
			}
			$('.anchor a').on('click',function(){
				if($.attr(this, 'href') !== '#'){
					$('html, body').animate({
						scrollTop: $($.attr(this, 'href')).offset().top-value+2
					}, 800);
				}
				return false;
			});
		},
		
		myLoad: function(){
			var speed	= 500;
			setTimeout(function(){NicolasInit.preloader();},speed);
			setTimeout(function(){$('body').addClass('animate');},speed+2000);	
			setTimeout(function(){NicolasInit.textArrow();});
		},
		
		preloader: function(){
			var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
			var preloader = $('#preloader');

			if (!isMobile) {
				setTimeout(function() {
					preloader.addClass('preloaded');
				}, 800);
				setTimeout(function() {
					preloader.remove();
				}, 2000);

			} else {
				preloader.remove();
			}	
		},

        swiperSlider: function(){
          $('.swiper-section').each(function(){
            var wrapper   = $('.nicolas_sm_portfolio_slider');
            var element 	= $(this);
            var container 	= element.find('.swiper-container');
            var mySwiper 	= new Swiper (container, {
              loop: true,
              slidesPerView: 4,
              spaceBetween: 30,
              loopAdditionalSlides: 1,
              autoplay: {
				delay: 6000,
			},
      
              navigation: {
                nextEl: '.my_next',
                prevEl: '.my_prev',
                },
              
              pagination: {
                el: '.nicolas_sm_swiper_progress',
                type: 'custom', // progressbar
                renderCustom: function (swiper,current,total) {
        
        
                  // progress animation
                  var scale,translateX;
                  var progressDOM	= wrapper.find('.nicolas_sm_swiper_progress');
                  if(progressDOM.hasClass('fill')){
						translateX 	= '0px';
						scale		= parseInt((current/total)*100)/100;
					}else{
						scale 		= parseInt((1/total)*100)/100;
						translateX 	= (current-1) * parseInt((100/total)*100)/100 + 'px';
					}
        
        
                  progressDOM.find('.all span').css({transform:'translate3d('+translateX+',0px,0px) scaleX('+scale+') scaleY(1)'});
					if(current<10){current = '0' + current;}
					if(total<10){total = '0' + total;}
					progressDOM.find('.current').html(current);
					progressDOM.find('.total').html(total);
                }
              },
               breakpoints: {
                 0: {
                   slidesPerView: 1,
                   spaceBetween: 20,
                 },
                 769: {
                   slidesPerView: 2,
                   spaceBetween: 20,
                 },
                 1200: {
                   slidesPerView: 4,
                   spaceBetween: 20,
                 }
               }
            });
          });
        },

        accordion: function(){
          $('.accordion').removeClass('ready');
          $('.accordion.active').each(function(){
            $(this).find('.accordion_content').css({display: 'block'});
          });
          
          var button    = $('.accordion_wrap .accordion_header');
          
          button.on('click',function(){
            var element = $(this);
            var li    = element.closest('.accordion');
            if(li.hasClass('active')){
              li.removeClass('active').find('.accordion_content').slideUp();
            }else{
              li.siblings('.active').removeClass('active').find('.accordion_content').slideUp();
              li.addClass('active').find('.accordion_content').slideDown();
            }
            
            return false;
            
          });
        },

        totop: function(){
          $('.nicolas_sm_totop .nicolas_sm_full_link').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 'slow');
            return false;
          });
        },

        counter: function(){
          $('.sm_counter').removeClass('stop');
  
          $('.sm_counter').each(function() {

          var el    = $(this);
            el.waypoint({
              handler: function(){

                if(!el.hasClass('stop')){
                  el.addClass('stop').countTo({
                    refreshInterval: 50,
                    formatter: function (value, options) {
                      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                    },  
                  });
                }
              },offset:'95%'  
            });
          });
        },

        myCarousel: function(){
          var wrapper      = $('.nicolas_sm_testimonials');
          var carousel     = wrapper.find('.owl-carousel');
          var carousel2    = $('.nicolas_sm_blog_hero .owl-carousel');
          
          carousel.each(function(){
            var element = $(this);    
            
            element.owlCarousel({
              loop: true,
              items: 3,
              lazyLoad: false,
              margin: 40,
              autoplay: true,
              autoplayTimeout: 7000,
              rtl: false,
              dots: false,
              nav: false,
              navSpeed: false,
              responsive : {
                  0 : {
                    items: 1
                  },
                  768 : {
                    items: 3
                  }
                }
            });
        
            wrapper.find('.prev_next .next').click(function() {
              element.trigger('next.owl.carousel');
              return false;
            });
            // Go to the previous item
            wrapper.find('.prev_next .prev').click(function() {
              // With optional speed parameter
              // Parameters has to be in square bracket '[]'
              element.trigger('prev.owl.carousel');
              return false;
            });
            
          });

          carousel2.owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            items: 1,
            lazyLoad: false,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 7000,
            rtl: false,
            dots: true,
            nav: false,
            navSpeed: false,
          });


        },

		interactiveImage: function(){
			
			if($('.nicolas_sm_interactive_list').length){
				var wrapper      			= $('.nicolas_sm_interactive_list'); 
				var wrapperOffsetRight		= wrapper.offset().left;
				var inner        			= wrapper.find('.interactive_list_inner');
				var box          			= $('.movingbox'); 
				var list         			= wrapper.find('li');

				box.css({right:wrapperOffsetRight+'px'});

				list.on('mouseenter',function(){
				var element    = $(this);
				var image      = element.find('.interactive_image').attr('src');
				box.css({backgroundImage: 'url('+image+')'});
				});
				inner.on('mouseenter',function(){
				var element    = $(this);
				element.addClass('active');
				}).on('mouseleave',function(){
				var element    = $(this);
				element.removeClass('active');
				});

				document.onmousemove = function(event){
				var cursor_y = event.clientY;
				box.css({top: cursor_y+'px'});	
			};	
		}},

        textArrow: function(){
          if($('.nicolas_sm_hero').length){
            var leftElement           = $('.nicolas_sm_hero .left .inline_text');
            var rightElement          = $('.nicolas_sm_hero .right .inline_text');
            var leftElementOffset     = leftElement.offset().left;
            var rightElementOffset    = rightElement.offset().left;
            var leftElementWidth      = leftElement.width();
            var result                = rightElementOffset-leftElementOffset-leftElementWidth-90;
            var arrow                 = $('.nicolas_sm_hero .arrow');

            arrow.css({width:result+'px'});
          }
       },

       marqueeAnimation: function(){
        $('.marquee').marquee({
          duration: 30000,
          duplicated: true,
          startVisible: true,
		pauseOnHover: true,
          });
       },

       scrollAnimation: function(){
          var element               = $('.nicolas_sm_main_title .scroll a');
          $(window).on('scroll',function(){
            var winScroll          = $(window).scrollTop();
            element.css({transform: 'rotate('+winScroll+'deg)'});
          });
       },

        dataBgImg: function(){
          var data                  = $('*[data-bg-img]');

        data.each(function(){
          var element               = $(this);
          var url                   = element.data('bg-img');
          element.css({backgroundImage: 'url('+url+')'});
          });
        },

        imgToSvg: function(){
            jQuery('img.sm_svg').each(function(){
    
          var jQueryimg             = jQuery(this);
          var imgClass              = jQueryimg.attr('class');
          var imgURL                = jQueryimg.attr('src');
      
          jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
          var jQuerysvg             = jQuery(data).find('svg');
      
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
              jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
            }
      
            // Remove any invalid XML tags as per http://validator.w3.org
            jQuerysvg = jQuerysvg.removeAttr('xmlns:a');
      
            // Replace image with new SVG
            jQueryimg.replaceWith(jQuerysvg);
      
          }, 'xml');
      
        });
        },

};
    
    // ready functions
    $(document).ready(function(){
        NicolasInit.init();
    });
	$(window).on('load',function(){
		NicolasInit.myLoad();
	});
    
  })(jQuery);

  