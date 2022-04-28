import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
import Keyboard from "./Keyboard";

describe("Given Keyboard component", () => {
  describe("When instantiate", () => {
    test("Then it should render a total of nine buttons", () => {
      const expectedNumberOfKeys = 11;
      const addDigit = jest.fn();
      const removeLastDigit = jest.fn();
      const calling = jest.fn();

      render(
        <PhoneContextProvider value={{ addDigit, removeLastDigit, calling }}>
          <Keyboard />
        </PhoneContextProvider>
      );

      const numberOfKeys = screen.getAllByRole("button");

      expect(numberOfKeys.length).toBe(expectedNumberOfKeys);
    });
  });
});
