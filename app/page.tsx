import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import MainContainer from "@/components/MainContainer";

const HomePage = () => {
  return ( 
    <div className="min-h-screen bg-gray-100">
      <Header />
      <MainContainer />
      <HowItWorks />
    </div>
   );
}
 
export default HomePage;