import SectionHeading from "@/components/Helper/SectionHeading"
import ReviewSlider from "./ReviewSlider"

const Reviews = () => {
     return (
          <div className="py-16 bg-[#fef7f6]">
               <div className="mx-auto w-[80%]">
                    <SectionHeading heading="Our Clients Reviews" />
                    <div className="mt-14">
                         {/* Review Slider */}
                         <ReviewSlider />
                    </div>
               </div>
          </div>
     )
}

export default Reviews