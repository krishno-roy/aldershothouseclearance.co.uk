import React from "react";
import Image from "../assets/man-van.jpg"; 
import BgImage from "../assets/man-and-van-services-1-1024x325.jpg"; 
const About = () => {
  return (
    <div>
      {/* Hero Background Image with Overlay */}
      <div className="relative h-64 sm:h-60 md:h-96 lg:h-120">
        <img
          src={BgImage}
          alt="Man and Van Services"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            About
          </h1>
        </div>
      </div>
      <div className="px-12 mt-5">
        <h1 className="text-4xl font-bold ">
          Man and Van Guildford Guaranteed Best Prices Call 07969868115
        </h1>
      </div>
      {/* About Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Image & Text Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left - Image */}
          <div className="w-80">
            <img
              src={Image}
              alt="Man and Van"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          {/* Right - Text */}
          <div className="w-full md:w-1/2">
            <p className="text-xl font-semibold text-gray-700">
              Welcome to Man and Van Bracknell. We are the reliable man and van
              team offering cheap man and van services plus transportation for
              customers all over Bracknell and the surrounding areas.
            </p>
            <p className="mt-4 text-xl font-semibold text-gray-700">
              If you’re moving house or need goods transporting from Ikea or
              eBay, contact our professional man and van staff today.
            </p>
          </div>
        </div>

        {/* Paragraph Content */}
        <div className="mt-12 text-xl text-gray-700 leading-relaxed">
          <p>
            Man and Van Bracknell takes the stress out of all types of house
            moves. Whether you’re moving from a six-bedroom house or a flat and
            need light man and van services, we can help. We pride ourselves on
            offering a reliable, affordable service.
          </p>
          <p className="mt-4">
            Our man and van staff are fully trained and offer a friendly,
            professional service to customers around Bracknell. We can usually
            come out within 24 hours, so give our team a call today.
          </p>
          <p className="mt-4">
            Our service is the affordable way to shift a full house of furniture
            or just a few of the heavy goods you can’t handle yourself. We offer
            a cheap service from as little as £12 per hour, giving our customers
            flexibility.
          </p>
          <p className="mt-4">
            We are here to take the pain out of moving. We don’t mix your
            belongings with other customers, so there’ll be no mix-up. We handle
            fragile goods with care and our staff are punctual and reliable.
            Call Man and Van Bracknell today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
