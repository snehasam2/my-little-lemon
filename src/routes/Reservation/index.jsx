import React, { useRef, useEffect } from "react";
import { PopupModal } from "../../shared/PopupModal";
import { submitAPI } from "../../utilities/fetchMockApiData";

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // "YYYY-MM-DD"
};

export const Reservation = ({ dispatch, slots }) => {
  const [isTableConfirmed, setTableConfirmation] = React.useState(false);
  const [
    { guestName, guestNumber, reservationDate, reservationTime, occasion },
    setGuestInfo,
  ] = React.useState({
    guestName: "",
    guestNumber: 1,
    reservationDate: getTodayDate(),
    reservationTime: slots[0] || "",
    occasion: "Birthday",
  });

  const dialogRef = useRef(null);

  // Focus the dialog when it opens
  useEffect(() => {
    if (isTableConfirmed && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isTableConfirmed]);

  const updateGuestNumber = (isDecrement = false) => {
    setGuestInfo((prev) => {
      const { guestNumber } = prev;
      if (isDecrement && guestNumber !== 1)
        return { ...prev, guestNumber: guestNumber - 1 };
      if (!isDecrement && guestNumber < 12)
        return { ...prev, guestNumber: guestNumber + 1 };
      return prev;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "reservationDate")
      dispatch({ type: "SET_SLOTS", payload: new Date(value) });
    setGuestInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleReservation = async (e) => {
    e.preventDefault();
    const finalGuestData = {
      guestName: e.target.guestName.value,
      guestNumber: e.target.guestNumber.value,
      reservationDate: e.target.reservationDate.value,
      reservationTime: e.target.reservationTime.value,
      occasion: e.target.occasion.value,
    };
    setGuestInfo(finalGuestData);
    dispatch({ type: "ADD_BOOKING", payload: finalGuestData });
    const isReservationSuccessful = await submitAPI(finalGuestData);
    if (isReservationSuccessful) setTableConfirmation(true);
  };

  return (
    <>
      <section className="reservation" aria-label="Reservation form">
        <h2 id="reservation-heading">Book a table</h2>
        <form
          onSubmit={handleReservation}
          aria-labelledby="reservation-heading"
        >
          <label htmlFor="guestName">Booking Name</label>
          <input
            type="text"
            name="guestName"
            id="guestName"
            required
            value={guestName}
            onChange={handleChange}
            aria-required="true"
          />

          <label htmlFor="guestNumber">Number of guests</label>
          <div role="group" aria-label="Guest number selection">
            <button
              type="button"
              onClick={() => updateGuestNumber(true)}
              aria-label="Decrease guest number"
            >
              -
            </button>
            <input
              type="number"
              name="guestNumber"
              id="guestNumber"
              required
              value={guestNumber}
              onChange={handleChange}
              aria-required="true"
              min={1}
              max={12}
            />
            <button
              type="button"
              onClick={() => updateGuestNumber(false)}
              aria-label="Increase guest number"
            >
              +
            </button>
          </div>

          <label htmlFor="reservationDate">Date of reservation</label>
          <input
            type="date"
            name="reservationDate"
            id="reservationDate"
            required
            min={getTodayDate()}
            value={reservationDate}
            onChange={handleChange}
            aria-required="true"
          />

          <label htmlFor="reservationTime">Reservation Time</label>
          <select
            id="reservationTime"
            name="reservationTime"
            onChange={handleChange}
            aria-required="true"
            value={reservationTime}
          >
            {slots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            onChange={handleChange}
            aria-required="true"
            value={occasion}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Get Together</option>
            <option>Date</option>
            <option>Other</option>
          </select>

          <input
            type="submit"
            value="Book a table"
            aria-label="Submit reservation"
          />
        </form>
      </section>

      <PopupModal
        isOpen={isTableConfirmed}
        onClose={() => setTableConfirmation(false)}
        aria-label="Reservation confirmation dialog"
      >
        <div ref={dialogRef} tabIndex={-1}>
          <h2 style={{ color: "green" }}>Table Reserved</h2>
          <p>
            Dear {guestName}, your table for {guestNumber} guest/s has been
            reserved on {reservationDate} at {reservationTime} for your occasion
            of {occasion}.
          </p>
        </div>
      </PopupModal>
    </>
  );
};
