import Image from "next/image";

export default function ProductGrid() {
  const products = [
    {
      category: "Vitamins & Supplements",
      background: "bg-blue-50", // Light blue background
      items: [
        { id: 1, name: "Multivitamin", image: "/multivitamin.webp" },
        { id: 2, name: "Vitamin D", image: "/vitamin-d.webp" },
        { id: 3, name: "Omega-3", image: "/omega-3.webp" },
        { id: 4, name: "Calcium", image: "/calcium.webp" },
        { id: 5, name: "Toothpaste", image: "/toothpaste.webp" },
        { id: 6, name: "Moisturizer", image: "/moisturizer.webp" },
        { id: 7, name: "Energy Bars", image: "/energy-bars.webp" },
        { id: 8, name: "Yoga Mat", image: "/yoga-mat.webp" },
        { id: 1, name: "Multivitamin", image: "/multivitamin.webp" },
        { id: 2, name: "Vitamin D", image: "/vitamin-d.webp" },
        { id: 3, name: "Omega-3", image: "/omega-3.webp" },
        { id: 4, name: "Calcium", image: "/calcium.webp" },
        { id: 5, name: "Toothpaste", image: "/toothpaste.webp" },
        { id: 6, name: "Moisturizer", image: "/moisturizer.webp" },
        { id: 7, name: "Energy Bars", image: "/energy-bars.webp" },
        { id: 8, name: "Yoga Mat", image: "/yoga-mat.webp" },
        { id: 1, name: "Multivitamin", image: "/multivitamin.webp" },
        { id: 2, name: "Vitamin D", image: "/vitamin-d.webp" },
        { id: 3, name: "Omega-3", image: "/omega-3.webp" },
        { id: 4, name: "Calcium", image: "/calcium.webp" },
        { id: 5, name: "Toothpaste", image: "/toothpaste.webp" },
        { id: 6, name: "Moisturizer", image: "/moisturizer.webp" },
        { id: 7, name: "Energy Bars", image: "/energy-bars.webp" },
        { id: 8, name: "Yoga Mat", image: "/yoga-mat.webp" },
      ],
    },
    {
      category: "Personal Care",
      background: "bg-green-50", // Light green background
      items: [
        { id: 1, name: "Shampoo", image: "/shampoo.webp" },
        { id: 2, name: "Toothpaste", image: "/toothpaste.webp" },
        { id: 3, name: "Moisturizer", image: "/moisturizer.webp" },
        { id: 4, name: "Sunscreen", image: "/sunscreen.webp" },
        { id: 5, name: "Omega-3", image: "/omega-3.webp" },
        { id: 6, name: "Calcium", image: "/calcium.webp" },
        { id: 7, name: "Energy Bars", image: "/energy-bars.webp" },
        { id: 8, name: "Yoga Mat", image: "/yoga-mat.webp" },
        { id: 1, name: "Multivitamin", image: "/multivitamin.webp" },
        { id: 2, name: "Vitamin D", image: "/vitamin-d.webp" },
        { id: 3, name: "Omega-3", image: "/omega-3.webp" },
        { id: 4, name: "Calcium", image: "/calcium.webp" },
        { id: 5, name: "Toothpaste", image: "/toothpaste.webp" },
        { id: 6, name: "Moisturizer", image: "/moisturizer.webp" },
        { id: 7, name: "Energy Bars", image: "/energy-bars.webp" },
        { id: 8, name: "Yoga Mat", image: "/yoga-mat.webp" },
        { id: 1, name: "Multivitamin", image: "/multivitamin.webp" },
        { id: 2, name: "Vitamin D", image: "/vitamin-d.webp" },
        { id: 3, name: "Omega-3", image: "/omega-3.webp" },
        { id: 4, name: "Calcium", image: "/calcium.webp" },
        { id: 5, name: "Toothpaste", image: "/toothpaste.webp" },
        { id: 6, name: "Moisturizer", image: "/moisturizer.webp" },
        { id: 7, name: "Energy Bars", image: "/energy-bars.webp" },
        { id: 8, name: "Yoga Mat", image: "/yoga-mat.webp" },
      ],
    },
    {
      category: "Fitness & Nutrition",
      background: "bg-yellow-50", // Light yellow background
      items: [
        { id: 1, name: "Protein Powder", image: "/protein.webp" },
        { id: 2, name: "Resistance Bands", image: "/resistance-bands.webp" },
        { id: 3, name: "Energy Bars", image: "/energy-bars.webp" },
        { id: 4, name: "Yoga Mat", image: "/yoga-mat.webp" },
        { id: 5, name: "Omega-3", image: "/omega-3.webp" },
        { id: 6, name: "Calcium", image: "/calcium.webp" },
        { id: 7, name: "Toothpaste", image: "/toothpaste.webp" },
        { id: 8, name: "Moisturizer", image: "/moisturizer.webp" },
        { id: 1, name: "Multivitamin", image: "/multivitamin.webp" },
        { id: 2, name: "Vitamin D", image: "/vitamin-d.webp" },
        { id: 3, name: "Omega-3", image: "/omega-3.webp" },
        { id: 4, name: "Calcium", image: "/calcium.webp" },
        { id: 5, name: "Toothpaste", image: "/toothpaste.webp" },
        { id: 6, name: "Moisturizer", image: "/moisturizer.webp" },
        { id: 7, name: "Energy Bars", image: "/energy-bars.webp" },
        { id: 8, name: "Yoga Mat", image: "/yoga-mat.webp" },
        { id: 1, name: "Multivitamin", image: "/multivitamin.webp" },
        { id: 2, name: "Vitamin D", image: "/vitamin-d.webp" },
        { id: 3, name: "Omega-3", image: "/omega-3.webp" },
        { id: 4, name: "Calcium", image: "/calcium.webp" },
        { id: 5, name: "Toothpaste", image: "/toothpaste.webp" },
        { id: 6, name: "Moisturizer", image: "/moisturizer.webp" },
        { id: 7, name: "Energy Bars", image: "/energy-bars.webp" },
        { id: 8, name: "Yoga Mat", image: "/yoga-mat.webp" },
      ],
    },
  ];

  return (
    <section className="flex-grow mx-4 sm:mx-8 md:mx-12 lg:mx-32 xl:mx-54">
      <section className="text-center py-8 bg-white">
        <div className="py-12">
          {products.map((category) => (
            <div
              key={category.category}
              className={`mb-8 ${category.background} p-4 rounded-lg`}
            >
              {/* Left-aligned header */}
              <h2 className="text-2xl font-semibold mb-4 text-left text-[#4CC8B1]">
                Best Sellers in {category.category}
              </h2>

              {/* Simple Horizontal Slider with Custom Scrollbar */}
              <div className="overflow-x-auto whitespace-nowrap scrollbar-custom">
                <div className="flex gap-10">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex-shrink-0 w-40 flex flex-col items-center"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={150}
                        height={150}
                        className="object-contain mb-2"
                      />
                      <p className="text-center">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
