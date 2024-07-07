$(document).ready(function () {
  // Gallery slick initialization
  if ($(".gallery").length) {
    gallerySlick();
  }

  function gallerySlick() {
    $(".gallery").slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      prevArrow: `<div class="gallery-icons review-left">
        <img class="review-icons" src="./assets/images/left-small.png" alt="Left-arrow-image">
      </div>`,
      nextArrow: `<div class="gallery-icons review-right">
        <img class="review-icons" src="./assets/images/right-small.png" alt="Right-arrow-image">
        </div>`,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  if ($(".hand-image-section").length) {
    initiateBannerSlick();
  }

  function initiateBannerSlick() {
    $(".hand-image-section").slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      nextArrow: `<div class="arrow-wrapper arrow-right">
                            <img class="slick-arrows" src="./assets/images/right-move.png" alt="Right-arrow-image">
                        </div>`,
      prevArrow: `<div class="arrow-wrapper arrow-left">
                            <img class="slick-arrows" src="./assets/images/left-move.png" alt="Left-arrow-image">
                        </div>`,
    });
  }

  //get gallery image items using mocki.io API
  /*var output = "";
  $.ajax({
    type: "GET",
    url: "https://mocki.io/v1/846703d9-bfc2-4c6d-baba-88a89735df60",
    success: function (items) {
      items.map((item) => {
        output += ` <div class="gallary-image-wrapper">
      <img class="photos" src="${item.image}" alt="plants-images"/>
      <div class="amount">
          <p>${item.plantName}</p>
          <p>${item.rate}</p>
      </div>
    </div>`;
      });
      $(".gallery").html(output);
    },
  });*/
});
