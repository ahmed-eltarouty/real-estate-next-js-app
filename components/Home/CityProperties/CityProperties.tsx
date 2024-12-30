import SectionHeading from "@/components/Helper/SectionHeading"
import CitySlider from "./CitySlider"

const CityProperties = () => {
     return (
          <div className="py-16">
               <div className="mx-auto w-[80%]">
                    <SectionHeading heading="Eplore City Properties" />
                    <div className="mt-10 md:mt-16">
                         {/* slider */}
                         <CitySlider />
                    </div>
               </div>
          </div>
     )
}

export default CityProperties