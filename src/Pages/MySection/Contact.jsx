import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Wait for response");
    e.target.reset();
  };
  const handleButtonClick = () => {
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
  };

  const phoneNumber = "8801812508280";
  const message = "Hello, I need help with something!";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  const MyNumber = "8801812508280";
  const handleCall = () => {
    window.location.href = `tel:${MyNumber}`;
  };
  return (
    <>
      <div className="bg-[#F0FDF4] pb-6 shadow-xl ">
        <h1
          id="con"
          className=" text-2xl font-semibold text-center sm:text-4xl pt-6"
        >
          Contact
        </h1>
        <div className=" bg-white mx-6 px-6 pt-14 contact md:flex justify-between gap-6 pb-14 rounded-lg mt-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:w-1/2 p-6  "
          >
            <div>
              <input
                className="h-10 w-full bg-gray-50 shadow-sm rounded-lg placeholder:px-3"
                required
                placeholder="Email"
                type="email"
                name="email"
              />
            </div>
            <textarea
              className="h-14 bg-gray-50 shadow-sm rounded-lg placeholder:p-3"
              name="message"
              placeholder="Message"
              required
              id=""
            ></textarea>
            <input
              className=" mt-6 hover:bg-orange-800 hover:font-bold bg-orange-600
           px-5 py-2 border justify-center rounded-lg shadow-sm border-none flex items-center gap-2 font-semibold text-white"
              type="submit"
            />
          </form>
          <div className="md:w-1/2 p-6 md:flex pt-6 md:pt-0 justify-center ">
            <div>
              <h1 className="text-black flex gap-6 items-center mt-6">
                <FaLocationDot className="text-xl" /> Dhaka , Bangldesh{" "}
              </h1>

              <h1
                onClick={handleButtonClick}
                className="text-black flex gap-6 items-center underline cursor-pointer mt-4"
              >
                <MdEmail className="text-xl" /> msab@gmail.com
              </h1>

              <h1
                onClick={handleCall}
                className="text-black hover:font-semibold flex gap-6 items-center mt-4"
              >
                <MdCall className="text-xl" /> 01700011122
              </h1>
              <h1
                onClick={handleClick}
                className="text-black flex gap-6 items-center mt-4 hover:font-semibold"
              >
                <FaWhatsapp className="text-xl" /> 01733366678
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
