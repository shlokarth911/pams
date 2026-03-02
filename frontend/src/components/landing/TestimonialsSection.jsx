import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul S",
      review:
        "The speedboating experience with PAMS was absolutely exhilarating! The staff is professional, the equipment is top-notch, and the rush of the Patratu waves is something I'll never forget. Best weekend trip ever!",
    },
    {
      name: "Priya M",
      review:
        "The speedboating experience with PAMS was absolutely exhilarating! The staff is professional, the equipment is top-notch, and the rush of the Patratu waves is something I'll never forget. Best weekend trip ever!",
    },
    {
      name: "Amit K",
      review:
        "The speedboating experience with PAMS was absolutely exhilarating! The staff is professional, the equipment is top-notch, and the rush of the Patratu waves is something I'll never forget. Best weekend trip ever!",
    },
  ];

  return (
    <div className=" w-full bg-[#304222] p-8">
      <h1 className="font-lexend text-5xl text-amber-50 mt-6 text-center tracking-tighter">
        What our guests say
      </h1>

      <div className="grid grid-cols-3 gap-6 mt-16 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#F5F9E9] p-8  shadow-lg">
            <p className="font-lexend text-lg italic text-[#111] leading-tight">
              "{testimonial.review}"
            </p>
            <p className="font-lexend text-lg font-semibold text-[#111] mt-3">
              ~ {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
