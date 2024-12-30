import SectionHeading from "@/components/Helper/SectionHeading"
import { buildings } from "@/data/data"
import BuildingFeatureCard from "./BuildingFeatureCard"

const BuildingFeature = () => {
     return (
          <div className="py-16 bg-gray-100">
               <div className="mx-auto w-[80%]">
                    <SectionHeading heading="Explore Building Feature" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-14">
                         {buildings.map((building, i) => {
                              return <div key={building.id} data-aos="fade-left" data-aos-delay={`${i * 150}`} data-aos-anchor-placement="top-center">
                                   {/* building Card */}
                                   <BuildingFeatureCard building={building} />
                              </div>
                         })}
                    </div>
               </div>
          </div>
     )
}

export default BuildingFeature