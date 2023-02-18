import React, {useEffect} from "react"
import { Carousel } from "flowbite"

const carouselData = [
  {
    title: "First Slide",
    imageSrc:
      "https://curaleaf.com/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt1244f6272732d4ea%2Fbltc6b3349770f9ae75%2F63af2bb5e5f72c7ddd634c86%2FCL_Dry_January_Web_Banner_1300x870_1.jpg&w=3840&q=75",
  },
  {
    title: "Second Slide",
    imageSrc:
      "https://curaleaf.com/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt1244f6272732d4ea%2Fblte4e95a7869125cd6%2F63af2c50770fe14a53475317%2FCL_Dry_January_Web_Banner_1300x870_2.jpg&w=3840&q=75",
  },
  {
    title: "Third Slide",
    imageSrc:
      "https://curaleaf.com/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt1244f6272732d4ea%2Fbltc6b3349770f9ae75%2F63af2bb5e5f72c7ddd634c86%2FCL_Dry_January_Web_Banner_1300x870_1.jpg&w=3840&q=75",
  },
]

const items = [
  {
      position: 0,
      el: document.getElementById('carousel-item-1')
  },
  {
      position: 1,
      el: document.getElementById('carousel-item-2')
  },
  {
      position: 2,
      el: document.getElementById('carousel-item-3')
  },
  {
      position: 3,
      el: document.getElementById('carousel-item-4')
  },
];

const options = {
  defaultPosition: 1,
  interval: 3000,
  
  indicators: {
      activeClasses: 'bg-white dark:bg-gray-800',
      inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
      items: [
          {
              position: 0,
              el: document.getElementById('carousel-indicator-1')
          },
          {
              position: 1,
              el: document.getElementById('carousel-indicator-2')
          },
          {
              position: 2,
              el: document.getElementById('carousel-indicator-3')
          },
          {
              position: 3,
              el: document.getElementById('carousel-indicator-4')
          },
      ]
  },
  
  // callback functions
  onNext: () => {
      console.log('next slider item is shown');
  },
  onPrev: ( ) => {
      console.log('previous slider item is shown');
  },
  onChange: ( ) => {
      console.log('new slider item has been shown');
  }
};  

function CarouselTest({ items, options }) {
  useEffect(() => {
    const carousel = new Carousel(items, options);
  }, [items, options]);

  return (
    <div id="default-carousel" className="relative" data-carousel="slide">
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div>
          {items.map((slide, index) => (
            <div
              className="duration-700 ease-in-out "
              data-carousel-item
              key={index}
            >
              <span className="absolute text-2xl font-semibold text-black -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
                {slide.title}
              </span>
              <img
                src={slide.imageSrc}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          ))}
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {items.map((slide, index) => (
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            key={index}
          ></button>
        ))}
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    );
  }
  



