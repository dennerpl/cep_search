import { Table } from "react-bootstrap";

function CepTable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>CEP</th>
          <th>Logradouro</th>
          <th>Bairro</th>
          <th>Cidade</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {props.adressList.map((line, index) => (
          <tr id={line.cep} key={index}>
            <td>{line.cep}</td>
            <td>{line.logradouro}</td>
            <td>{line.bairro}</td>
            <td>{line.localidade}</td>
            <td>{line.uf}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CepTable;
