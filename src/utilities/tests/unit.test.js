import { initializeTimes, updateTimes } from "../bookingReducer";
import { fetchAPI } from "../../utilities/fetchMockApiData";

// Mock the fetchAPI function
jest.mock("../../utilities/fetchMockApiData", () => ({
  fetchAPI: jest.fn(),
}));

describe("Time Functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes should call fetchAPI with current date", () => {
    const mockSlots = ["17:00", "18:30"];
    fetchAPI.mockReturnValue(mockSlots);

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(result).toBe(mockSlots);
  });

  test("updateTimes should call fetchAPI with the provided date", () => {
    const mockSlots = ["19:00", "20:30"];
    const testDate = new Date("2025-09-15");
    fetchAPI.mockReturnValue(mockSlots);

    const result = updateTimes(testDate);

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(testDate);
    expect(result).toBe(mockSlots);
  });
});
