"use client"

const des = ["This feature allows users to upload an image from their device for analysis. The uploaded image will serve as the input for the AI system to assess and derive insights.", "Once the image is uploaded, this feature initiates an AI-powered analysis to examine and process the visual data. It uses advanced algorithms to extract meaningful information relevant to the user's purpose.", "After the AI completes its analysis, this feature displays the results to the user. It provides a summary or detailed insights based on the image's content and the objectives of the analysis."];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Upload Image", "AI Analysis", "Get Results"].map(
              (step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    <div className="text-3xl font-bold text-purple-600 mb-4">
                        {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        {step}
                    </h3>
                    <p key={index} className="text-gray-600">
                        {des[index]}
                    </p>
                </div>
              )
            )}
        </div>
    </section>
  )
}

export default HowItWorks