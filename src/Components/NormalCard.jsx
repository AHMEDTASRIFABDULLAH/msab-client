import { JackInTheBox } from "react-awesome-reveal";
import { MdLocationOn } from "react-icons/md";
const NormalCard = () => {
  const upcomingMarathons = [
    {
      id: 1,
      image: "https://i.postimg.cc/05FsjKbL/Image-640x360-3.jpg",
      title: "City Marathon 2025",
      location: "New York, USA",
      startDate: "2025-03-01",
      endDate: "2025-03-15",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/4NcT94cn/Image-640x360-1-1.jpg",
      title: "Beach Marathon 2025",
      location: "Miami, USA",
      startDate: "2025-04-10",
      endDate: "2025-04-20",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/P5zsS62j/Image-640x360-1.jpg",
      title: "Mountain Marathon 2025",
      location: "Denver, USA",
      startDate: "2025-05-05",
      endDate: "2025-05-15",
    },
  ];
  return (
    <div className="grid grid-cols-1 cursor-pointer gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
      {upcomingMarathons.map((m) => (
        <div
          className="bg-white border space-y-3 font-semibold p-1 rounded-md "
          key={m.id}
        >
          <JackInTheBox>
            <img className="rounded-sm" src={m.image} alt="" />

            <div className="p-1 space-y-3">
              <p className="text-white ">{m.title}</p>
              <div className="flex justify-between text-gray-400">
                <p>Our Location :</p>
                <p className="flex gap-2 items-center">
                  {m.location} <MdLocationOn />
                </p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p> Enrolement Start : </p>
                <p>{m.startDate}</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>End Date :</p>
                <p>{m.endDate}</p>
              </div>
              <button className="bg-orange-500 w-full mt-3 text-white px-4 py-2 rounded hover:bg-orange-600">
                Enroll now
              </button>
            </div>
          </JackInTheBox>
        </div>
      ))}
    </div>
  );
};

export default NormalCard;
