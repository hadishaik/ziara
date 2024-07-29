import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-auto ">
      <div className="">
        <video
          autoPlay
          loop
          muted
          className="-z-10 object-cover aspect-video w-full"
        >
          <source
            type="video/mp4"
            src="https://res.cloudinary.com/de4nrkdsz/video/upload/v1721739929/Untitled_design_r7ynpy.mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Hero;
