import { Container, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Container fluid>
      <Navbar expand={true} className="mb-3 fw-bold">
        <Container>
          <Navbar.Brand>
            Overview of available bikes and parking for the Oslo Byskkel
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};
