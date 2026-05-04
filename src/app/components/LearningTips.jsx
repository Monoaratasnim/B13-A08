import { BookOpen, Clock, Brain } from "lucide-react";

const tips = [
  {
    id: 1,
    title: "Stay Consistent",
    desc: "Study a little every day instead of cramming at once.",
    icon: <BookOpen className="text-blue-500" size={26} />,
  },
  {
    id: 2,
    title: "Manage Your Time",
    desc: "Use a schedule to balance study and rest effectively.",
    icon: <Clock className="text-green-500" size={26} />,
  },
  {
    id: 3,
    title: "Practice Actively",
    desc: "Apply what you learn through projects and exercises.",
    icon: <Brain className="text-purple-500" size={26} />,
  },
];

const LearningTips = () => {
  return (
    <div className="w-[92%] mx-auto py-14">

   
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          📌 Learning Tips
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Improve your study habits and productivity
        </p>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {tips.map((tip) => (
          <div
            key={tip.id}
            className="
              relative p-6 rounded-2xl
              bg-gradient-to-br from-white to-gray-50
              border border-gray-100
              shadow-md
              hover:shadow-2xl hover:-translate-y-2
              transition-all duration-300
              text-center
            "
          >
        
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shadow-inner">
                {tip.icon}
              </div>
            </div>

         
            <h3 className="font-semibold text-lg text-gray-800">
              {tip.title}
            </h3>

       
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              {tip.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default LearningTips;