import { Form, Row, Col, Button, FloatingLabel } from "react-bootstrap";

function SearchForm() {
  return (
    <Form>
      <Row>
        <Col>
          <FloatingLabel controlId="cepInput" label="CEP que será pesquisado:">
            <Form.Control type="text" placeholder="CEP que será pesquisado:" />
          </FloatingLabel>
        </Col>
        <Col>
          <Button variant="primary">Pesquisar</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Última pesquisa:</Form.Label>
          <Form.Control disabled as="textarea" rows={3} />
        </Col>
      </Row>
    </Form>
  );
}

export default SearchForm;
