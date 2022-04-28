import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";
import Actions from "./Actions";

describe("Given Actions component", () => {
  describe("When instantiate with the text '123456789' and calling value false", () => {
    test("Then it should render an Action button with the class 'call active", () => {
      const expectedClass = "call active";
      const calling = false;
      const phoneNumber = "123456789";

      render(
        <PhoneContext.Provider value={{ calling, phoneNumber }}>
          <Actions />
        </PhoneContext.Provider>
      );

      const createdActionButton = screen.getByRole("link");

      expect(createdActionButton).toHaveClass(expectedClass);
    });
  });
});
