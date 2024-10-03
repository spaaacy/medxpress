import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="flex-grow mx-4 sm:mx-8 md:mx-12 lg:mx-48 xl:mx-64">
        {/* Hero Section */}
        <section className="text-center py-8 bg-white">
          <h1 className="text-4xl font-bold text-[#4CC8B1] mb-8">Fast, Reliable Medical Delivery</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
            {/* First Column - Fast Medical Delivery */}
            <div className="flex flex-col items-center">
              <Image
                src="/fast-medical-delivery.webp"  // Replace with the correct image path
                alt="Fast Medical Delivery"
                width={200}
                height={150}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-[#4CC8B1]">Fast Medical Delivery</h3>
              <p className="text-center text-gray-600 mt-2">
                Get essential medicines and medical supplies delivered to your doorstep within hours.
              </p>
            </div>
            
            {/* Second Column - Health & Wellness Products */}
            <div className="flex flex-col items-center">
              <Image
                src="/health-products.webp"  // Replace with the correct image path
                alt="Health & Wellness Products"
                width={200}
                height={150}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-[#4CC8B1]">Health & Wellness Products</h3>
              <p className="text-center text-gray-600 mt-2">
                Explore a wide range of vitamins, supplements, and health products for your wellbeing.
              </p>
            </div>

            {/* Third Column - Pharmacy Consultation */}
            <div className="flex flex-col items-center">
              <Image
                src="/pharmacy-consultation.webp"  // Replace with the correct image path
                alt="Pharmacy Consultation"
                width={200}
                height={150}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-[#4CC8B1]">Pharmacy Consultation</h3>
              <p className="text-center text-gray-600 mt-2">
                Get professional advice from certified pharmacists anytime for your prescriptions.
              </p>
            </div>
          </div>
        </section>
    </section>
  );
}
