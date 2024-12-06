import React from "react";

const Gallery = () => {
  const galleryImages = [
    "/assets/gallery.png",
    "/assets/gallery1.png",
    "/assets/gallery2.png",
    "/assets/gallery3.png",
    "/assets/gallery4.png",
    "/assets/gallery5.png",
  ];
  return (
    <div id="gallery" className="md:w-[80%] w-[90%] m-auto flex flex-col gap-8">
      <h2 className="text-center text-[#525560]  libre-baskerville-regular text-5xl mt-3">
        Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 ">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`gallery${index}`}
            className="md:h-[483px] h-[350px] w-[100%] object-cover rounded-[30px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
