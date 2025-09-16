import React from "react";

import { HomePage } from "../../routes/Homepage";
import { Route, Routes } from "react-router";
import { Menu } from "../../routes/Menu";
import { Reservation } from "../../routes/Reservation";
import { bookingReducer, initialState } from "../../utilities/bookingReducer";
import { ContactPage } from "../../routes/ContactPage";

export const AppShell = () => {
  const [bookingState, bookingDispatch] = React.useReducer(
    bookingReducer,
    initialState
  );

  return (
    <section className="app-shell">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservation"
          element={
            <Reservation
              dispatch={bookingDispatch}
              slots={bookingState.availableSlots}
            />
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <h2 id="reservations-heading">Reservations Overview</h2>

      <table
        className="reservations-table"
        aria-labelledby="reservations-heading"
      >
        <thead>
          <tr>
            <th scope="col">Guest</th>
            <th scope="col">Party Size</th>
            <th scope="col">Event</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>

        <tbody>
          {bookingState.bookingList.map(
            (
              {
                guestName,
                guestNumber,
                occasion,
                reservationDate,
                reservationTime,
              },
              idx
            ) => (
              <tr key={idx}>
                <td>{guestName}</td>
                <td>{guestNumber}</td>
                <td>{occasion}</td>
                <td>{reservationDate}</td>
                <td>{reservationTime}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
};
