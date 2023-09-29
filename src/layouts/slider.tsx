"use client";

import Image from "next/image";
import { SLIDER_IMAGES } from "../_mock/constant-data";
import { useState } from "react";

export default function Slider() {
  // CONSTANTS
  const slideLimit = 4;
  const [firstPointer, setFirstPointer] = useState(0);
  const [secondPointer, setSecondPointer] = useState(4);
  const [slides, setSlides] = useState(
    SLIDER_IMAGES.slice(firstPointer, secondPointer)
  );

  // FUNCTIONS
  function slideLeft() {
    if (firstPointer <= 0) return;
    setSlides(() =>
      SLIDER_IMAGES.slice(firstPointer - slideLimit, secondPointer - slideLimit)
    );
    setFirstPointer(firstPointer - slideLimit);
    setSecondPointer(secondPointer - slideLimit);
  }

  const slideRight = () => {
    if (secondPointer + slideLimit > SLIDER_IMAGES.length) return;
    setSlides(() =>
      SLIDER_IMAGES.slice(
        firstPointer + slideLimit + 1,
        secondPointer + slideLimit + 1
      )
    );
    setFirstPointer(firstPointer + slideLimit);
    setSecondPointer(secondPointer + slideLimit);
  };

  return (
    <>
      <div className="container mx-auto p-4 h-screen flex justify-center items-center">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <button
              onClick={slideLeft}
              className="text-white bg-gray-700 mx-3 p-2 text-xl border-none h-10 w-10 rounded cursor-pointer transition duration-150 ease-in bg-blue-500 rounded-full">
              <Image
                width={25}
                height={10}
                src="/arrowRight.png"
                alt="right-arrow"
              />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 whitespace-no-wrap scroll-behavior-smooth "
          id="slider">
          {/* items ko 4 tk rakhain */}
          {slides.map((item, index) => (
            <div key={index}>
              <Image
                src={item}
                alt="product"
                className="min-w-40"
                width={300}
                height={400}
              />
            </div>
          ))}
        </div>
        <button
          onClick={slideRight}
          className="text-white bg-gray-700 mx-3 p-2 text-xl border-none h-10 w-10 rounded cursor-pointer transition duration-150 ease-in bg-blue-500 rounded-full">
          <Image
            width={25}
            height={10}
            src="/arrowLeft.png"
            alt="right-arrow"
          />
        </button>
      </div>
    </>
  );
}
