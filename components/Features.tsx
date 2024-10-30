"use client"

const features = [
    "Ensures that the AI system identifies objects, patterns, or details in the data with high precision, minimizing errors and enhancing reliability.", 

    "Provides users with in-depth insights and comprehensive details about the identified elements, allowing for a clear understanding of the analysis results.", 

    "The system is optimized to deliver quick results, reducing waiting time and enabling users to access information swiftly without compromising on accuracy.", 

    "Designed with ease of use in mind, this interface allows users to navigate and access features effortlessly, making the experience intuitive for users of all levels."
];

const Features = () => {
  return (
    <section id="features" className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Accurate Identification",
              "Detailed Information",
              "Fast Results",
              "User-Friendly Interface"
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-600">
                  {feature}
                </h3>
                <p className="text-gray-600">
                  {features[index]}
                </p>
              </div>
            ))}
        </div>
    </section>
  )
}

export default Features