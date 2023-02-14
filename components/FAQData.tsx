import { Disclosure } from "@headlessui/react"

import { Icons } from "@/components/icons"

const faqs = [
  {
    question: "What equipment do I need to get started growing marijuana?",
    answer:
      "As a first-time grower, you will need to have the following equipment: seeds or clones, pots or containers, soil or growing medium, grow lights (if growing indoors), fans (if growing indoors), and a watering system (if growing indoors).",
  },
  {
    question: "How much space do I need to grow marijuana plants?",
    answer:
      "The amount of space you will need will depend on the number of plants you want to grow and the size of your grow area. As a general rule of thumb, each plant will need at least 1-2 square feet of space to grow.",
  },
  {
    question: "How long does it take for marijuana plants to grow?",
    answer:
      "The growth cycle of marijuana plants can take anywhere from 3-4 months to a year, depending on the specific strain and the grow conditions.",
  },
  {
    question: "How much light do marijuana plants need?",
    answer:
      "During the vegetative stage, marijuana plants typically need 18-24 hours of light per day. During the flowering stage, they will need 12-14 hours of darkness per day in order to flower.",
  },
  {
    question: "How do I water my marijuana plants?",
    answer:
      "It is important to water your plants deeply, but avoid over-watering. Allow the soil to dry out slightly between waterings, and be sure to drain any excess water that may accumulate in the bottom of the pots.",
  },
  {
    question:
      "What temperature and humidity levels are optimal for growing marijuana?",
    answer:
      "The optimal temperature range for growing marijuana is between 70-85 degrees Fahrenheit. The humidity level should be kept between 40-60% during the vegetative stage, and between 30-50% during the flowering stage.",
  },
  {
    question: "How do I know when my plants are ready to harvest?",
    answer:
      "Your plants will be ready to harvest when the majority of the pistils have turned color and the trichomes are mostly cloudy or milky in appearance. This typically occurs after about 3-4 months of growth.",
  },
  {
    question: "How do I cure my marijuana buds after harvest?",
    answer:
      "To cure your marijuana buds, you will need to hang them upside down in a cool, dark, and dry place with good airflow. Allow the buds to dry for about a week, or until the stems snap rather than bend when bent. Once the buds are dry, you can remove them from the stems and place them in airtight containers. Cure the buds by opening the containers for a few minutes each day to allow moisture to escape and to introduce fresh air. This process can take anywhere from a few weeks to a few months, depending on the humidity and temperature of your curing environment. The buds are fully cured when they are dry to the touch and have a pleasant aroma.",
  },
  {
    question: "Can I grow marijuana plants indoors or outdoors?",
    answer:
      "You can grow marijuana plants either indoors or outdoors, depending on your specific circumstances and the laws in your area. Indoor grows offer more control over the growing environment and the ability to grow year-round, but they also require a significant investment in equipment and supplies. Outdoor grows are less expensive and have the potential to produce larger plants, but they are subject to the elements.",
  },
  {
    question:
      "What are some common problems that can occur when growing marijuana, and how can I troubleshoot them?",
    answer:
      "Some common problems that can occur when growing marijuana include pests, diseases, and nutrient deficiencies. To troubleshoot these issues, you will need to identify the specific problem and take the appropriate action. For example, if you notice that your plants are being eaten by pests, you can try using a natural pest control method or a chemical insecticide. If you suspect that your plants have a nutrient deficiency, you can try using a fertilizer specifically formulated for marijuana plants. If your plants are showing signs of a disease, such as yellowing leaves or stunted growth, you may need to discard the affected plants to prevent the disease from spreading. If you are unable to identify or fix the problem, it may be helpful to seek the advice of a professional or a more experienced grower.",
  },
]

export const FAQData = () => {
  return (
    <div className="flex flex-col w-full p-4 bg-white rounded-lg shadow-lg dark:bg-slate-800">
      <dl className="mt-6 space-y-6 divide-y divide-gray-200">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      <Icons.chevronDown
                        className={`h-6 w-6 transform ${
                          open ? "-rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="pr-12 mt-2">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  )
}
