
import { TrendingArticle } from "./TrendingArticle"
import { top } from "../data/top"

export const  TrendingContainer = () => {


    return(
        <section className=" flex  sm:justify-between sm:flex-row  flex-wrap flex-col py-5 gap-10 ">
        

        {
            top.map((el)=>  <TrendingArticle  data={...el}/> )
        }
        
        
        </section>
    )




}