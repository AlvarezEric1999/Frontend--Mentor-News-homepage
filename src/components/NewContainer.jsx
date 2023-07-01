import {data} from '../data/articles'
import { NewArticle } from "./Article"

export const NewContainer = ()=> {

    return(

        <aside className='bg-VerydarkBlue text-OffWhite py-[28px] px-[20px]' >
        
        
        <h2 className='font-bold text-SoftOrange text-[40px] '>New</h2>



        {data.map((el)=> <NewArticle data = {...el} ></NewArticle>)}


        </aside>

    )



}
