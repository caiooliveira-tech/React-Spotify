import Card from "./components/Card"

function App() {

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const randomColor = generateRandomColor();
  

  return (
    <>
      <header className="bg-red-600 w-full h-28"></header>
      <section className="w-full h-dvh flex">
        <aside className="bg-green-400 w-1/4 flex flex-col justify-around items-center">
          <div className="bg-red-500 w-32 h-32"></div>
          <div className="bg-red-500 w-32 h-32"></div>
          <div className="bg-red-500 w-32 h-32"></div>  
        </aside>
        <div className="bg-gray-400 w-3/4 grid grid-cols-3 pl-20 items-center">
          <Card titulo="teste" bgColor={randomColor} capa="capa.jpg"/>
          <Card titulo="teste" bgColor={randomColor} capa="capa.jpg"/>
          <Card titulo="teste" bgColor={randomColor} capa="capa.jpg"/>
          <Card titulo="teste" bgColor={randomColor} capa="capa.jpg"/>
          <Card titulo="teste" bgColor={randomColor} capa="capa.jpg"/>
          <Card titulo="teste" bgColor={randomColor} capa="capa.jpg"/>
          <Card titulo="teste" bgColor={randomColor} capa="capa.jpg"/>
          <Card titulo="teste" bgColor={randomColor} capa="capa.jpg"/>
          <Card titulo="teste" bgColor={randomColor} capa="capa.jpg"/>
        </div>
      </section>
    </>
  )
}

export default App
