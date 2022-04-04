import { Form, Row, Col, Button } from "react-bootstrap";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <Form className="cepSearchForm">
      <label className="searchInput">
        {"CEP: "}
        <input
          placeholder="digite um CEP válido"
          type="text"
          value={props.cepToSearch}
          onChange={(event) => props.setCepToSearch(event.target.value)}
        />
      </label>

      <Button
        className="searchButton"
        size="sm"
        disabled={props.cepToSearch.length === 0}
        onClick={props.handleSearch}
        variant="primary"
      >
        Pesquisar
      </Button>
      <Row>
        <Col>
          <Form.Label>Última pesquisa:</Form.Label>
          <Form.Control value={props.lastCep} disabled as="textarea" rows={3} />
        </Col>
      </Row>
    </Form>
  );
}

export default SearchForm;
