import React, { useRef } from "react";

const ImageCarousel = () => {
  const carouselRef = useRef(null);
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
  ];

  const centerImage = (index) => {
    const carousel = carouselRef.current;
    const imageEl = carousel.children[index];
    const imageRect = imageEl.getBoundingClientRect();
    const containerRect = carousel.getBoundingClientRect();

    const scrollOffset =
      imageEl.offsetLeft - (containerRect.width / 2 - imageRect.width / 2);
    carousel.scrollTo({ left: scrollOffset, behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-x-auto">
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory p-4"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            className="w-60 h-80 object-cover rounded-lg cursor-pointer snap-center shrink-0"
            onClick={() => centerImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
