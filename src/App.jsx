import { useEffect, useState } from "react";
import Card from "./components/Card"

function App() {

  const [artistas, setArtistas] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:3000/artistas')
    .then(res => res.json())
    .then(data => setArtistas(data))
    .catch(err => console.log(err))
  },[])

  return (
    <>
      <header className="bg-red-600 w-full h-28"></header>
      <section className="w-full h-auto calc min-h-[calc(100vh-112px)] flex">
        <aside className="bg-green-400 w-1/4 flex flex-col justify-around items-center">
          <div className="bg-red-500 w-32 h-32"></div>
          <div className="bg-red-500 w-32 h-32"></div>
          <div className="bg-red-500 w-32 h-32"></div>  
        </aside>
        <div className="bg-gray-400 w-3/4 grid grid-cols-3 pl-20 items-center">
        {artistas.slice(0,5).map(artista => (
          <Card 
            key={artista.id} 
            titulo={artista.name}
            capa={artista.image}/>
        ))}
        </div>

      </section>
    </>
  )
}

export default App
