import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Reservation } from "../../Reservation";

jest.mock("../../../utilities/fetchMockApiData", () => ({
  submitAPI: jest.fn().mockResolvedValue(true),
}));

const mockDispatch = jest.fn();
const mockSlots = ["17:00", "18:30"];

describe("Reservation Component", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    render(<Reservation dispatch={mockDispatch} slots={mockSlots} />);
  });

  describe("Detect DOM Elements", () => {
    it("renders reservation heading with text 'Book a table'", () => {
      const reservationHeading = screen.getAllByText(/book a table/i);
      expect(reservationHeading[0]).toBeInTheDocument();
    });
  });

  describe("Form Validation and Submission", () => {
    it("shows all required input fields", () => {
      expect(screen.getByLabelText(/Booking Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Date of reservation/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Reservation Time/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    });

    it("allows valid form submission", async () => {
      fireEvent.change(screen.getByLabelText(/Booking Name/i), {
        target: { value: "Alice" },
      });
      fireEvent.change(screen.getByLabelText(/Number of guests/i), {
        target: { value: "4" },
      });
      fireEvent.change(screen.getByLabelText(/Date of reservation/i), {
        target: { value: "2099-12-31" },
      });
      fireEvent.change(screen.getByLabelText(/Reservation Time/i), {
        target: { value: mockSlots[0] },
      });
      fireEvent.change(screen.getByLabelText(/Occasion/i), {
        target: { value: "Birthday" },
      });

      const form = screen.getByRole("form");
      fireEvent.submit(form, {
        preventDefault: () => {},
        target: {
          guestName: { value: "Alice" },
          guestNumber: { value: "4" },
          reservationDate: { value: "2099-12-31" },
          reservationTime: { value: mockSlots[0] },
          occasion: { value: "Birthday" },
        },
      });
      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith({
          type: "ADD_BOOKING",
          payload: {
            guestName: "Alice",
            guestNumber: "4",
            occasion: "Birthday",
            reservationDate: "2099-12-31",
            reservationTime: "17:00",
          },
        });
      });
    });
  });
});
