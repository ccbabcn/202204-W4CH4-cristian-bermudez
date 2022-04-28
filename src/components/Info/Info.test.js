import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";
import Info from "./Info";

describe("Given Info component", () => {
  describe("When it's called with the text 'Testing'", () => {
    test("Then it should render a display component with the text received", () => {
      const expectedResult = "Calling...";

      render(
        <PhoneContext.Provider value={""}>
          <Info />
        </PhoneContext.Provider>
      );

      const createdSpan = screen.getByText(expectedResult);

      expect(createdSpan.textContent).toEqual(expectedResult);
    });
  });
});
