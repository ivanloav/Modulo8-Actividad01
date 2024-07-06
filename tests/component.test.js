import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Componente from "../src/component";
import { act } from "react";

test("muestra el nombre del usuario después de la carga", async () => {
  const fetchUser = jest.fn();
  fetchUser.mockResolvedValue({ id: 1, name: "John Doe" });

  await act(async () => {
    render(<Componente fetchUser={fetchUser} />);
  });

  await waitFor(() =>
    expect(screen.queryByText(/Cargando/i)).not.toBeInTheDocument()
  );

  const userElement = screen.getByText(/Usuario: John Doe/i);
  expect(userElement).toBeInTheDocument();
});
