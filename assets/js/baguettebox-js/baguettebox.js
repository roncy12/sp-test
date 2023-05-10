import baguetteBox from 'baguettebox.js';
import 'slick-carousel';
export default function(){
         window.addEventListener('load', function() {
                  baguetteBox.run('[product-main-baguette-slick]');    
                  $('.productView-thumbnail').on('click',function(){
                           var slick_index = $(this).attr('data-slick-index');
                           $('[product-main-baguette-slick]').slick('slickGoTo',slick_index);
                  });
                  $('.productView-images-custom img').attr('sizes','440px'); 

                  $(".productView-thumbnails").slick({
                    "infinite": false,
                    "mobileFirst": true,
                    "dots": false,
                    "accessibility": false,
                    "slidesToShow": 5,
                    "slidesToScroll": 5,
                    "vertical": true,
                    "verticalSwiping": true,
                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                "infinite": false,
                                "mobileFirst": true,
                                "dots": false,
                                "accessibility": false,
                                "slidesToShow": 5,
                                "slidesToScroll": 5,
                                "vertical": true,
                                "verticalSwiping": true,
                            }
                        },
                        {
                            breakpoint: 0,
                            settings: {
                                "slidesToShow": 4,
                                "slidesToScroll": 4,
                                "vertical": false,
                                "verticalSwiping": false
                            }
                        }
                    ]
                    
                })

         });
}
