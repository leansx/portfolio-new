import "../styles/RingCarousel.css";

function RingCarouselItem({ item }) {
  return (
    <div className="ring-carousel-item">
      <div></div>
      <img className="ring-carousel-item-image" src={item.img} />
    </div>
  );
}

export default RingCarouselItem;
