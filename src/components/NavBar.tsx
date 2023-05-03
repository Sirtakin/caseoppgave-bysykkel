import { Container, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Container fluid>
      <Navbar expand={true} variant="dark" bg="dark" className="mb-3">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
};
