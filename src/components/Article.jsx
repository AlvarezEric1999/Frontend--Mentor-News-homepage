export const NewArticle = ({data }) => {

    console.log({data})

    return(
        <article className="h-[130px] border-b-2 border-GrayishBlue py-7 last:border-none " >
        
        <h2 className=" text-OffWhite  font-bold text-[20px] hover:text-SoftOrange cursor-pointer mb-3">{data.title}</h2>
        <p  className="text-GrayishBlue text-[15px] ">{data.description }</p>
       
       
        </article>
    )
}