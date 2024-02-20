import Popup from "./Popup";
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { GameContext } from "../../../context/GameContextProvider";
import { GameContextPopup } from "../../../context/GameContextPopupProvider";
import ROLES from "../../../shared/roles";
describe("Popup", () => {
  const mockHidePopup = vi.fn();
  const mockAddPlayer = vi.fn();
  const mockSetSelectedRole = vi.fn();
  const mockHandleInputChange = vi.fn();
  const mockHandleRadioChange = vi.fn();
  const mockSetCurrentUser = vi.fn();
  const mockSetInputValue = vi.fn();

  beforeEach(() => {
    render(
      <GameContext.Provider
        value={{ addPlayer: mockAddPlayer,
             setCurrentUser: mockSetCurrentUser,
            currentUser: null,
            }}
      >
        <GameContextPopup.Provider
          value={{
            hidePopup: mockHidePopup,
            player: {},
            setSelectedRole: mockSetSelectedRole,
            isOtherUser: false,
            otherUser: {},
            inputValue: "",
            handleInputChange: mockHandleInputChange,
            selectedRole: "",
            handleRadioChange: mockHandleRadioChange,
            setInputValue: mockSetInputValue,
          }}
        >
          <Popup />
        </GameContextPopup.Provider>
      </GameContext.Provider>
    );
  });

  it("should add a player and close the popup", () => {
    const input = screen.getByTestId("input-usuario");
    fireEvent.change(input, { target: { value: "Santiago" } });
   

    const radioInputs = screen.queryAllByTestId("input-radio");
    const selectedRadioInput = radioInputs.find(
      (radio) => radio.value === ROLES.Admin
    );
    fireEvent.change(selectedRadioInput, { target: { checked: true } });
    expect(selectedRadioInput.checked).toBe(true);

    const button = screen.getByTestId("button-test");
    fireEvent.click(button);
 


    
  });
});
