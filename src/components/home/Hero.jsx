import heroImg from "../../assets/images/hero/heroImg.png";
import box from "../../assets/images/hero/box.png";
import box2 from "../../assets/images/hero/box2.png";
import btn from "../../assets/images/hero/button.png";

const Hero = () => {
  
  return (
    <div className="bg-theme-2 rounded-b-[3rem] px-6 lg:px-0">
      <div className="grid md:grid-cols-2 container mx-auto px-6 md:px-0  items-center">
        <div className="">
          <div className="badge mb-4 rounded-md py-3 px-6">Never stop learning</div>
          <h1 className="lg:text-6xl md:text-4xl pb-7 font-bold text-theme-1">
            Grow up your skills by online courses with Onlearning
          </h1>
          <div className="flex items-center gap-4">
            <button className="btn bg-theme-3 border-none text-white md:px-8 md:py-4 text-[16px] rounded-xl hover:bg-theme-1 hover:text-white duration-500">
              Explore Path
            </button>
            <img src={btn} alt="" />
          </div>
          
        </div>
        <div className="pt-32 z-10">
            <div className="relative">
                <img className="absolute md:top-96 w-44 md:w-auto bottom-14" src={box} alt="Box" />
                <img className="" src={heroImg} alt="Images" />
                <img className="absolute md:right-12 md:top-44 top-4 right-2 w-24 md:w-auto" src={box2} alt="Box2" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
