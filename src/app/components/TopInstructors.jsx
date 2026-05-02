import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    role: "Full Stack Developer",
    image: "/images/ins1.png",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "UI/UX Designer",
    image: "/images/ins2.png",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Marketing Expert",
    image: "/images/ins3.png",
  },
  {
    id: 4,
    name: "David Lee",
    role: "React Specialist",
    image: "/images/ins4.png",
  },
];

const TopInstructors = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold">
          🏆 Top Instructors
        </h2>
        <p className="text-gray-500 mt-2">
          Learn from industry experts
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

        {instructors.map((inst) => (
          <div
            key={inst.id}
            className="
              group
              bg-white
              rounded-2xl
              shadow-md
              hover:shadow-2xl
              transition-all duration-300
              text-center
              p-6
              border border-gray-100
              hover:-translate-y-1
            "
          >
            {/* Image */}
            <div className="relative w-24 h-24 mx-auto mb-4">

              {/* gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[2px]">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>

              <Image
                src={inst.image}
                alt={inst.name}
                fill
                className="rounded-full object-cover p-[3px]"
              />
            </div>

            {/* Name */}
            <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition">
              {inst.name}
            </h3>

            {/* Role */}
            <p className="text-sm text-gray-500 mt-1">
              {inst.role}
            </p>

            {/* Optional small badge */}
            <span className="inline-block mt-3 text-xs px-3 py-1 bg-gray-100 rounded-full">
              Expert
            </span>

          </div>
        ))}

      </div>
    </div>
  );
};

export default TopInstructors;