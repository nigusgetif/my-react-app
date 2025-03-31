export default function Header(){
    const nameLists =[
        <h2>Bob</h2>,
        <h2>Peter</h2>,
        <h2>Tom</h2>,
        <h2>Bek</h2>,
        <h2>Dane</h2>,
    ]
    return(
        <>
        <header>
            <img src="/src/assets/reactLogo.png" width="40px" alt="logo" />

        </header>
        <main>
             {nameLists}
         </main>
     </>
    )
}