import jokesData from "./jokesData"
import Joke from "./Joke"
export default function Header(){
    // const nameLists =[
    //     <h2>Bob</h2>,
    //     <h2>Peter</h2>,
    //     <h2>Tom</h2>,
    //     <h2>Bek</h2>,
    //     <h2>Dane</h2>,
    // ]
    const jokeDetailElements = jokesData.map((joke) =>{

        return <Joke setup = {joke.setup} puchline = {joke.puchline}   />
    })
   
   
    return(
        <>
        <header>
            <img src="/src/assets/reactLogo.png" width="40px" alt="logo" />

        </header>
        <main>
             {jokeDetailElements}
         </main>
     </>
    )
}