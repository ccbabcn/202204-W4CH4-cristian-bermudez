import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";
import Display from "./Display";

describe("Given Display component", () => {
  describe("When it receives the text '123456789'", () => {
    test("Then it should render a display component with the text received", () => {
      const expectedResult = "123456789";
      const textCall = { phoneNumber: "123456789" };

      render(
        <PhoneContext.Provider value={textCall}>
          <Display />
        </PhoneContext.Provider>
      );
      const createdDisplay = screen.getByText(expectedResult);

      expect(createdDisplay).toBeInTheDocument();
    });
  });
});
