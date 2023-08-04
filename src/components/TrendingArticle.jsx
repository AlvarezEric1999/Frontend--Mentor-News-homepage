export const TrendingArticle = ({data}) => {

    return(

        <article className="w-[260px] h-[120px] flex   ">


        <div>
            <img className="w-[90px] h-[120px]" src={data.img}></img>
        </div>

        <div className="w-auto h-[120px] pl-5">
            <div className="w-full h-full bg-red-400" >
                <h2  className="font-bold text-GrayishBlue text-[30px]" >{data.id}</h2>
                <h3 className="font-bold text-VerydarkBlue  text-[15px] " >{data.title}</h3>
                <p className="text-[13px]  py-2 ">{data.description }</p>
            </div>
        </div>
        
        </article>

    )


}