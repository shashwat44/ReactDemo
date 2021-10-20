import "../../../App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function NavSection(props) {
  let history = useHistory();

  let isUserLogin = localStorage.getItem("AuthToken");

  var style = {};
  if (isUserLogin == null) {
    style.display = "none";
  } else {
    style.display = "block";
  }

  let color = props?.data?.color ? 'success' : "dark";

  const goLogin = async (values) => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Navbar style={style} bg={color} variant="dark">
      <Container>
        <Navbar.Brand href="#home">React Demo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/customer-management">Customers</Nav.Link>
        </Nav>
        <button className="btn btn-success" onClick={goLogin} type="button">
          Logout
        </button>
      </Container>
    </Navbar>
  );
}

export default NavSection;
