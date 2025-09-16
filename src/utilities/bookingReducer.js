import { fetchAPI } from "./fetchMockApiData";

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (date) => {
  return fetchAPI(date);
};

export const initialState = {
  availableSlots: initializeTimes(),
  bookingList: [],
};

// Reducer function
export const bookingReducer = (state, action) => {
  switch (action.type) {
    case "SET_SLOTS":
      return {
        ...state,
        availableSlots: updateTimes(action.payload),
      };

    case "ADD_BOOKING":
      return {
        bookingList: [...state.bookingList, action.payload],
        availableSlots: fetchAPI(new Date()),
      };

    default:
      return state;
  }
};
