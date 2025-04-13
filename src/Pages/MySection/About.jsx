import { useEffect } from "react";
import bgimg1 from "../../assets/images/about_banner.jpg";
import missionImg from "../../assets/images/mission.png";
import whatWeDoImg from "../../assets/images/what_we_do.jpg";
import whyChooseUsImg from "../../assets/images/why_choose_us.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Banner Image */}
      <div className="w-full">
        <img
          src={bgimg1}
          alt="About Banner"
          className="w-full h-[300px] object-cover rounded-md"
        />
      </div>

      {/* Main Content */}
      <div className="bg-[#F0FDF4] p-8 space-y-10 text-gray-800">
        {/* About Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-700 ">About Us</h2>
          <p className="text-lg">
            Welcome to <strong>MSAB</strong>, where dreams take flight and ideas
            come to life. We are a passionate community of innovators, creators,
            and supporters dedicated to turning visions into reality. Our
            platform connects visionary entrepreneurs with backers who believe
            in the power of collective effort.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-2 text-green-600">
              Our Mission
            </h3>
            <p className="text-lg">
              At MSAB, our mission is to empower individuals and organizations
              to bring their projects to fruition. We believe that every great
              idea deserves a chance to shine, and we are here to provide the
              support and resources needed to make that happen.
            </p>
          </div>
          <img
            src={missionImg}
            alt="Our Mission"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* What We Do Section */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src={whatWeDoImg}
            alt="What We Do"
            className="rounded-lg shadow-md order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-semibold mb-2 text-green-600">
              What We Do
            </h3>
            <p className="text-lg">
              We offer a user-friendly platform where project creators can
              present their ideas, set funding goals, and share their stories
              with a global audience. Backers can explore a diverse range of
              projects, from groundbreaking technology to creative arts.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-2 text-green-600">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                <strong>Community-Driven:</strong> A supportive and
                collaborative environment for all.
              </li>
              <li>
                <strong>Transparency:</strong> Clear communication and honesty
                in all we do.
              </li>
              <li>
                <strong>Innovation:</strong> A cutting-edge platform that
                evolves with user needs.
              </li>
            </ul>
          </div>
          <img
            src={whyChooseUsImg}
            alt="Why Choose Us"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
