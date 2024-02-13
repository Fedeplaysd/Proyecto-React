import CartWidget from "./CartWidget/CartWidget";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <>
    <h3>Ecommerce Pedraza</h3>
    <div>
      <ButtonToolbar aria-label="Toolbar with button groups" style={{display: 'flex', justifyContent: 'center'}}>

        <ButtonGroup className="me-2" aria-label="First group">
          <Button variant="success" style={{color: 'black'}} size="lg">Placas Graficas</Button>
        </ButtonGroup>

        <ButtonGroup className="me-2" aria-label="Second group">
          <Button variant="success"style={{color: 'blue'}} size="lg">Gabinetes Gamer</Button>
        </ButtonGroup>

        <ButtonGroup aria-label="Third group">
          <Button variant="success"style={{color: 'darkgray'}} size="lg">Refrigeracion Liquida</Button>
        </ButtonGroup>
        
      </ButtonToolbar>
    </div>
    <CartWidget />
    </>
  )
}

export default NavBar