import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Action from "./Action";

describe("Given Action Component", () => {
  describe("When it's instantiated with the text 'call'", () => {
    test("Then it should render an Action component with the receives text", () => {
      const expectedRenderedText = "Call";
      render(<Action action={"call"} />);

      const createdAnchor = screen.getByRole("link");

      expect(createdAnchor.textContent).toBe(expectedRenderedText);
    });
  });

  describe("When it's instantiated with a function and the user click on it", () => {
    test("Then it should call the action that was passed down", () => {
      const mockFunction = jest.fn();
      render(<Action action={"hang"} actionOnClick={mockFunction} />);
      const createdAnchor = screen.getByRole("link");

      userEvent.click(createdAnchor, mockFunction);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
