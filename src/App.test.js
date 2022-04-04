import { render, screen } from "@testing-library/react";
import App from "./App";

test("render test", () => {
  render(<App />);
  const centerLabel = screen.getByText(/Última pesquisa:/i);
  expect(centerLabel).toBeInTheDocument();
});

test("search test", () => {
  render(<App />);
  const input = document.getElementById("inputCepToSearch");
  input.value = 30260280;
  const searchButton = document.getElementById("searchButton");
  searchButton.click();
  setTimeout(() => {
    const lastSearch = screen.getByText(
      "Rua Lignito, Santa Efigênia, Belo Horizonte/MG CEP: 30260-280"
    );
    expect(lastSearch).toBeInTheDocument();
  }, 2000);
});

test("table test", () => {
  render(<App />);
  const input = document.getElementById("inputCepToSearch");
  input.value = 30260280;
  const searchButton = document.getElementById("searchButton");
  searchButton.click();
  setTimeout(() => {
    const tableLine = document.getElementById("30260-280");
    expect(tableLine.textContent()).toBe("30260-280");
  }, 2000);
});
