import getGenerateMetadata from "../components/GenerateMetaData";

const  page = () => {
  return (
    <>
      <div className="text-amber-300 text-center">
        hello i am page
      </div>
    </>
  )
}
export default page ;

export const generateMetadata =()=>getGenerateMetadata('about','about me page')

