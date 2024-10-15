import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ConteudoPrincipal() {

    const [artistas, setArtistas] = useState([]);

  
    useEffect(() => {
        fetch('http://localhost:3000/artistas')
        .then(res => res.json())
        .then(data => setArtistas(data))
        .catch(err => console.log(err))
        .finally(() => console.log('Finalizou a requisição'))
    },[])

    return (
        <>
            <div className="bg-gray-400 w-3/4 pl-20 py-5">
                <h1 className="text-4xl font-bold">Rock</h1>
                <div className="grid grid-cols-4 items-center gap-4 mt-5">
                    {artistas
                    .map(artista => (
                    <Link to={`/artistas/${artista._id}`} key={artista._id}>
                    <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                        <h1 className="text-white font-semibold text-center">{artista.name}</h1>
                    </div>
                    </Link>
                    ))}
                </div>
            </div>
        </>
    )
}