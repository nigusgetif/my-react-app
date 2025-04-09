
import data from '../data'
import Entry from './Entry'
import Header from './Header'

function App() {

  const entryElements = data.map((entry) => {
    return (
        <Entry
            key={entry.id}
            {...entry}
        />
    )
})

  // return (
  //   <div>
  //     <article className='article'>
  //     <h1>Fun Facts about React</h1>
  //     <ul className='list'>
  //         <li>was first release in 2013</li>
  //         <li>was originaly found by Jordan Walke release in 2013</li>
  //         <li>It's mantained by </li>
  //         <li>was first release in 2013</li>
  //     </ul>
  //     </article>
      
  //   </div>
  // )


  return(
    <>
    <Header />
    <main className="container">
        {entryElements}
     </main>
 </>
)
}

export default App
