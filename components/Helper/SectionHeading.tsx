
type SectionHeadingProps = {
     heading: string
}

const SectionHeading = ({ heading }: SectionHeadingProps) => {
     return (
          <div>
               <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">{heading}</h1>
               <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet.</p>
          </div>
     )
}

export default SectionHeading