import Header from "../../Shared/Header/Header";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/images/Rectangle 1.png"
import img2 from "../../assets/images/Rectangle 26.png"
import img3 from "../../assets/images/Rectangle 27.png"
import img4 from "../../assets/images/Rectangle 28.png"

const Home = () => {
    return (
        <div className="bg-gray-300 h-[100vh] mx-auto">
            <Header></Header>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-xl p-5">
                    <h2 className="text-6xl font-bold text-white">COX S BAZAR</h2>
                    <p className="mt-4 text-white">Cox s Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className="btn px-6 mt-6 bg-yellow-500 border-none">Booking  <FaArrowRight></FaArrowRight></button>
                </div>
                {/* currusol */}
                <div className="h-[70vh] p-8">
                <div className="carousel w-full h-full rounded-xl">
  <div id="item1" className="carousel-item w-full">
    <img src={img1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={img2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={img3} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={img4} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
                </div>
            </div>
        </div>
    );
};

export default Home;