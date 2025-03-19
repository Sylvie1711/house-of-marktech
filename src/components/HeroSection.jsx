import StraightAnglePieChart from './piechart';
import BasicSparkLineCustomization from './graph';
import LineChartWithReferenceLines from './line';
import SelectActionCard from './details';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Empowering influencers to 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Collaborate & Monetize
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Elevate your social media presence and transform your influence into impact with our
        powerful creator tools. Start your journey today and turn your passion into a thriving
        digital empire!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for campaign for free
        </a>
      </div>

      <div className="border-4 border-gray-300 rounded-lg p-6 shadow-md w-full">
        <h2 className="text-xl font-semibold text-center mb-4">People Interested in XYZ Brand</h2>
        <div className="py-4 mb-4 overflow-hidden">
          <StraightAnglePieChart />
        </div>
        <h2 className="text-xl font-semibold text-center mb-4">Check Out XYZ Brand Performance Over Time</h2>
        <div className="py-4 mb-4 overflow-hidden">
          <BasicSparkLineCustomization />
        </div>
        <h2 className="text-xl font-semibold text-center mb-4">Influencer Traction Generated</h2>
        <div className="flex justify-center py-4 mb-4 overflow-hidden">
          <LineChartWithReferenceLines />
        </div>

        <h2 className="text-xl font-semibold text-center mb-4">XYZ Brand Campaigns</h2>
       <div className="flex justify-items-center">
       <SelectActionCard />
       </div>
      </div>
    </div>
  );
};

export default HeroSection;
