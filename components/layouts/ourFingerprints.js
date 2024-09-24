import Image from "next/image";

const OurFingerprints = () => {
    const points = [
      {
        title: "Nationwide Reach",
        description:
          "We’ve successfully delivered projects across Nigeria, including major cities like Lagos, Abuja, and Warri.",
      },
      {
        title: "Innovative Solutions",
        description:
          "We leverage cutting-edge technology to offer practical, efficient, and scalable solutions tailored to each client's specific needs.",
      },
      {
        title: "Expert Team",
        description:
          "Our experienced professionals bring in-depth knowledge across various industries and ensure quality service delivery on every project.",
      },
      {
        title: "Comprehensive Services",
        description:
          "From procurement to installation and maintenance, we offer end-to-end solutions to meet your IT infrastructure and security needs.",
      },
      {
        title: "Customer-Centric Approach",
        description:
          "We prioritize customer satisfaction by offering customized solutions and round-the-clock support.",
      },
    ];
  
    return (
      <div className="bg-gray-100 py-16">
        <div className="max-w-[90%] lg:max-w-[1440px] lg:px-[120px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-[#1e1d1d] mb-12">
                Our Reach & Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {points.map((point, index) => (
                <div
                    key={index}
                    className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-shadow duration-300"
                >
                    <h3 className="text-[22px] font-semibold text-blue-600 mb-4">
                    {point.title}
                    </h3>
                    <p className="text-[#61666f] leading-relaxed">{point.description}</p>
                </div>
                ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default OurFingerprints;
  