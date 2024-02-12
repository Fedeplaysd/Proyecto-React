import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
  return (
    <>
    <h3>Ecommerce Pedraza</h3>
    <div>
      <button>Placas Graficas</button>
      <button>Memorias Ram</button>
      <button>Gabinetes Gamer</button>
    </div>
    <CartWidget />
    </>
  )
}

export default NavBar