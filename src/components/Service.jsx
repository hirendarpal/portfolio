import { BiSolidOffer } from "react-icons/bi";
import { LiaQuestionSolid } from "react-icons/lia";

const Service = () => {
  return (
    <div className="md:mt-28 mt-20 md:px-60 px-8">
      <h1 className="md:text-4xl text-xl text-center pb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500">
        Services: Freelance Web Developer & Website Specialist
      </h1>
      <div className="md:px-20 md:pt-5 md:pb-16">
        <p className="pt-0 md:text-xl">
          Hi, I’m hirendar, I am a passionate and skilled freelancer
          specializing in creating stunning, functional websites and providing a
          wide range of website-related services. With a strong focus on
          delivering tailored solutions, I help individuals, startups, and
          businesses establish a powerful online presence that drives results.
        </p>
        <div className="text-2xl font-bold md:pt-10 pt-4 md:pb-4 text-orange-400 flex items-center gap-2">
          <span>What I Offer</span>{" "}
          <span>
            <BiSolidOffer />
          </span>{" "}
        </div>
        <div className="md:text-xl">
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2 rounded-sm">
              Website Design & Development :
            </span>{" "}
            From sleek, modern designs to user-friendly interfaces, I create
            custom websites that reflect your brand’s identity and meet your
            specific needs. Whether it’s a personal portfolio, an e-commerce
            store, or a corporate website, I’ve got you covered.
          </p>
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2">
              Responsive Design :
            </span>{" "}
            I ensure your website looks and works flawlessly on all devices,
            from desktops to smartphones, providing an optimal user experience.
          </p>
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2">
              Website Maintenance & Updates :{" "}
            </span>
            Keeping your website up-to-date, secure, and running smoothly is
            just as important as building it. I offer ongoing maintenance and
            support to ensure your site stays in top shape.
          </p>
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2">
              SEO Optimization :{" "}
            </span>{" "}
            I optimize websites to rank higher on search engines, helping you
            attract more organic traffic and grow your online visibility.
          </p>
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2">
              Content Management Systems (CMS) :{" "}
            </span>{" "}
            Whether you prefer WordPress, Shopify, Wix, or other platforms, I
            can set up and customize CMS solutions to make managing your website
            easy and efficient.
          </p>
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2">
              E-Commerce Solutions :{" "}
            </span>{" "}
            Need an online store? I specialize in building e-commerce websites
            with seamless payment integrations, product management, and a focus
            on converting visitors into customers.
          </p>
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2">
              WebsiteRedesign :{" "}
            </span>{" "}
            If your existing website needs a fresh look or improved
            functionality, I can revamp it to align with current trends and your
            business goals.
          </p>
        </div>
        <div className="text-2xl font-bold md:pt-10 pt-4 md:pb-4 flex items-center gap-2 text-orange-400">
          <span>Why Choose Me</span>{" "}
          <span>
            <LiaQuestionSolid />
          </span>
        </div>
        <div className="md:text-xl">
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2">
              Client-Centric Approach :{" "}
            </span>{" "}
            I take the time to understand your vision, goals, and target
            audience to deliver a website that truly represents your brand.
          </p>
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2">
              Attention to Detail :{" "}
            </span>{" "}
            From clean code to pixel-perfect design, I prioritize quality in
            every aspect of my work.
          </p>
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2">
              Timely Delivery :{" "}
            </span>{" "}
            I respect deadlines and ensure projects are completed on time
            without compromising quality.
          </p>
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2">
              Affordable & Transparent Pricing :{" "}
            </span>
            I offer competitive rates and clear communication, so you know
            exactly what to expect.
          </p>
          <p className="py-3">
            <span className="text-xl font-semibold bg-gray-400 px-2">
              Ongoing Support :{" "}
            </span>{" "}
            My relationship with clients doesn’t end after the website is
            launched. I’m here to provide ongoing support and guidance whenever
            you need it.
          </p>
        </div>
      </div>
      <center className="pb-2 text-orange-400">
        Thank you for read my services .
      </center>
    </div>
  );
};

export default Service;