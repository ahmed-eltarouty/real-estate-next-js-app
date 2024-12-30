import SectionHeading from "@/components/Helper/SectionHeading"
import { blogs } from "@/data/data"
import BlogCard from "./BlogCard"


const Blog = () => {
     return (
          <div className="py-16 bg-gray-100">
               <div className="mx-auto w-[80%]">
                    <SectionHeading heading="Check our Blogs" />
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center">
                         {blogs.map((blog, i) => {
                              return (
                                   <div key={blog.id} data-aos="zoom-out" data-aos-delay={`${i * 150}`} data-aos-anchor-placement="top-center">
                                        {/* Blog Card */}
                                        <BlogCard blog={blog} />
                                   </div>
                              )
                         })}
                    </div>
               </div>
          </div>
     )
}

export default Blog