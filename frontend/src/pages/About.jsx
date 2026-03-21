import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className=" my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At PRIYALOOMS, we believe every working woman deserves a saree that
            combines elegance, comfort, and premium quality.
          </p>
          <p>
            Priya Looms is a homegrown artisanal saree brand created with the
            idea of making everyday draping easier for modern working women. We
            craft breathable, super-light sarees that feel comfortable for long
            hours. Each piece is thoughtfully made in unique, desirable
            colours—shades that are often hard to find in the market—so you can
            choose what truly matches your style.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Priya Looms, we aim to make everyday dressing simpler, smoother,
            and more empowering for women who balance work, life, and style with
            grace
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Every saree in our collection is handwoven by skilled artisans from
            West Bengal, crafted with the finest pure cotton for unmatched
            comfort and elegance. We ensure each piece meets the highest
            standards of quality, durability, and authenticity — so you can
            enjoy timeless beauty in every fold.
          </p>
        </div>
        <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Shopping your favorite handwoven sarees has never been easier. Enjoy
            a seamless, hassle-free experience with quick browsing, simple
            checkout, and doorstep delivery — all designed to bring comfort and
            elegance to your everyday life.
          </p>
        </div>
        <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Satisfaction:</b>
          <p className="text-gray-600">
            We are dedicated to providing an exceptional shopping experience,
            ensuring every customer feels valued and cared for. From
            personalized assistance to prompt support and hassle-free returns,
            we go the extra mile to make your journey with our handwoven sarees
            truly delightful.
          </p>
        </div>
      </div>
      {/* <NewsLetterBox /> */}
    </div>
  );
};

export default About;
