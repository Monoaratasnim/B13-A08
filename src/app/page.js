import Image from "next/image";
import Banner from "./components/Banner";
import PopularCourses from "./components/PopularCourses";
import TrendingCourses from "./components/TrendingCourses";
import TopInstructors from "./components/TopInstructors";
import LearningTips from "./components/LearningTips";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <PopularCourses></PopularCourses>
     <TrendingCourses></TrendingCourses>
     <LearningTips></LearningTips>
     <TopInstructors></TopInstructors>
   
    </div>
  );
}

