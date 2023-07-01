import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from './components/NewContainer'
import { TrendingContainer } from "./components/TrendingContainer"


export const App = () =>{
    return(
        <main className=" px-4  sm:px-14 pt-6 pb-6 " >
        
        <Header/>

        
        <div className="sm:flex pt-6 sm:gap-8  mb-12">
            <MainArticle/>
            <NewContainer/>
        </div>


        <TrendingContainer></TrendingContainer>

        </main>

    )



}