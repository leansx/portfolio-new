import { useState } from "react";
import RingCarouselItem from "./RingCarouselItem";
import "../styles/RingCarousel.css";
import { Circle, CircleArrowLeft, CircleArrowRight } from "lucide-react";

function RingCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      img: "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring-carousel/step_1.webp",
      alt: "Step 1",
    },
    {
      img: "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring-carousel/step_2.webp",
      alt: "Step 2",
    },
    {
      img: "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring-carousel/step_3.webp",
      alt: "Step 3",
    },
    {
      img: "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring-carousel/step_4.webp",
      alt: "Step 4",
    },
    {
      img: "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring-carousel/step_5.webp",
      alt: "Step 5",
    },
    {
      img: "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring-carousel/step_6.webp",
      alt: "Step 6",
    },
    {
      img: "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring-carousel/step_7.webp",
      alt: "Step 7",
    },
    {
      img: "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring-carousel/step_8.webp",
      alt: "Step 8",
    },
    {
      img: "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring-carousel/step_9.webp",
      alt: "Step 9",
    },
    {
      img: "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring-carousel/step_10.webp",
      alt: "Step 10",
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="ring-carousel">
      <div
        className="ring-carousel-item-map phone"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <RingCarouselItem item={item} />;
        })}
      </div>
      <div className="ring-carousel-buttons">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="ring-carousel-button-arrow"
        >
          <CircleArrowLeft />
        </button>
        <div className="ring-carousel-indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => updateIndex(index)}
                className={`ring-carousel-indicator-buttons ${
                  index === activeIndex
                    ? "ring-carousel-indicator-button-active"
                    : "ring-carousel-indicator-button"
                }`}
              >
                <Circle size={10} strokeWidth={4} />
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="ring-carousel-button-arrow"
        >
          <CircleArrowRight />
        </button>
      </div>
    </div>
  );
}

export default RingCarousel;
