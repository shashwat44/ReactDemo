import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import NavSection from "../../nav";

function Home() {
  return (
    <div  >
      <NavSection data={{color:'#DCDCDC'}}/>
      <Container>
        <h5>Home</h5>
      </Container>
    </div>
  );
}

export default Home;
