function imageSlider(parent) {
  let currentImage = 0;
  const slider = {
    parent: parent,
    images: parent.querySelector(".images"),
    thumbnails: parent.querySelector(".thumbnails"),
    backBtn: parent.querySelector(".back-btn"),
    nextBtn: parent.querySelector(".next-btn"),
  };

  const imageNodes = slider.images.querySelectorAll(".slider-image");
  imageNodes[currentImage].classList.add("active");

  slider.thumbnails.innerHTML = Array.from(imageNodes)
    .map((img) => `<img src="${img.src}" />`)
    .join("");

  const thumbnailNodes = slider.thumbnails.querySelectorAll("img");
  thumbnailNodes[currentImage].classList.add("active");

  function setActiveImage(index) {
    imageNodes[currentImage].classList.remove("active");
    thumbnailNodes[currentImage].classList.remove("active");
    currentImage = index;
    imageNodes[currentImage].classList.add("active");
    thumbnailNodes[currentImage].classList.add("active");
  }

  thumbnailNodes.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => setActiveImage(index));
  });

  slider.backBtn.addEventListener("click", () => {
    setActiveImage((currentImage - 1 + imageNodes.length) % imageNodes.length);
  });

  slider.nextBtn.addEventListener("click", () => {
    setActiveImage((currentImage + 1) % imageNodes.length);
  });

  setInterval(() => {
    setActiveImage((currentImage + 1) % imageNodes.length);
  }, 10000);
}

//select all iamge slider so that all will work
document.querySelectorAll(".image-slider").forEach(slider => {
  imageSlider(slider);
});

 const sliderContainer = document.querySelector(".image-slider");

  // Click image to toggle fullscreen
  sliderContainer.querySelectorAll(".slider-image").forEach((img) => {
    img.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        sliderContainer.requestFullscreen().catch((err) => {
          console.error(`Error entering fullscreen: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    });
  });

  // Select all sliders
  document.querySelectorAll(".image-slider").forEach((sliderContainer) => {
    // Attach fullscreen logic to each image inside the slider
    sliderContainer.querySelectorAll(".slider-image").forEach((img) => {
      img.addEventListener("click", () => {
        if (!document.fullscreenElement) {
          sliderContainer.requestFullscreen().catch((err) => {
            console.error(`Error attempting fullscreen: ${err.message}`);
          });
        } else {
          document.exitFullscreen();
        }
      });
    });
  });

  // Fullscreen function for mobile
  function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Safari
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE11
      elem.msRequestFullscreen();
    }
  }

  // Attach to all slider images
  document.querySelectorAll('.slider-image').forEach(img => {
    img.addEventListener('click', () => {
      openFullscreen(img);
    });
  });