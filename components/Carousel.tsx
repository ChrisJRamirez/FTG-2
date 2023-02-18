import { useState } from "react"

interface CarouselProps {
  images: {
    url: string
    title: string
    subtitle: string
  }[]
  title: string
}

const Carousel = ({ images, title }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
  }

  const handleNextClick = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1)
  }

  return (
    <div className="bg-red-700">
      <h2 className="mb-4 text-2xl font-bold ">{title}</h2>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={images[activeIndex].url}
            alt=""
            className="object-contain w-full h-full "
          />
        </div>
        <div className="absolute top-0 left-0 right-0 py-2">
          <h3 className="text-lg font-bold text-white">
            {images[activeIndex].title}
          </h3>
          <p className="text-sm text-black">{images[activeIndex].subtitle}</p>
        </div>
        <button
          className="absolute top-0 bottom-0 left-0 w-1/2 bg-gray-800 bg-opacity-50"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
        <button
          className="absolute top-0 bottom-0 right-0 w-1/2 bg-gray-800 bg-opacity-50"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Carousel
