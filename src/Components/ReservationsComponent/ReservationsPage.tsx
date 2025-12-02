import HeaderNavBar from "../Header/HeaderNavBar";
import Footer from "../RestaurantHomePageComponent/Footer/Footer";
import React from "react";
import reservationPageImage from "/public/reservationPageImage.png";
import "./reservationsPage.css";

export default function ReservationsPage({
  setUserData,
}: {
  setUserData: (data: {
    reservationDate: string;
    reservationTime: string;
    partySize: string;
    guestName: string;
    phoneNumber: string;
    specialRequests: string;
  }) => void;
}) {
  const [reservationDate, setReservationDate] = React.useState("");
  const [reservationTime, setReservationTime] = React.useState("");
  const [partySize, setPartySize] = React.useState("");
  const [guestName, setGuestName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [specialRequests, setSpecialRequests] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setUserData({
      reservationDate,
      reservationTime,
      partySize,
      guestName,
      phoneNumber,
      specialRequests,
    });

    // clear fields after submit
    setReservationDate("");
    setReservationTime("");
    setPartySize("");
    setGuestName("");
    setPhoneNumber("");
    setSpecialRequests("");

    console.log("Reservation submitted:", {
      reservationDate,
      reservationTime,
      partySize,
      guestName,
      phoneNumber,
      specialRequests,
    });
  };

  return (
    <>
      <div>
        <HeaderNavBar />

        {submitted && (
          <div className="success-message">
            <h2>Thank you for your reservation!</h2>
            <p>We will see you soon.</p>
          </div>
        )}

        <div
          style={{ backgroundColor: "lightgray"}}
          className="reservationPageContainer"
        >
          <div className="reservationImageContainer">
            <img
              src={reservationPageImage}
              alt="reservationImage"
              className="reservation-left-image"
            />
          </div>

          <div className="reservationFormContainer">
            <div className="reserveTable">
              <h1>RESERVE A TABLE WITH US</h1>
              <p>We will promptly confirm.</p>
            </div>

            <form className="reserveForm" onSubmit={handleSubmit}>
              <label>
                <input
                  placeholder="Reservation date:"
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                />
              </label>

              <label>
                <input
                  placeholder="Reservation time:"
                  value={reservationTime}
                  onChange={(e) => setReservationTime(e.target.value)}
                />
              </label>

              <label>
                <input
                  placeholder="Party size:"
                  value={partySize}
                  onChange={(e) => setPartySize(e.target.value)}
                />
              </label>

              <label>
                <input
                  placeholder="Guest name:"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                />
              </label>

              <label>
                <input
                  placeholder="Phone number:"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </label>

              <label>
                <input
                  placeholder="Special requests:"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                />
              </label>

              <button type="submit">Submit Reservation</button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}





// import HeaderNavBar from "../Header/HeaderNavBar";
// import Footer from "../RestaurantHomePageComponent/Footer/Footer";
// import React from "react";
// import reservationPageImage from "/public/reservationPageImage.png";
// import "./reservationsPage.css";

// export default function ReservationsPage({
//   setUserData,
// }: {
//   setUserData: (data: {
//     reservationDate: string;
//     reservationTime: string;
//     partySize: string;
//     guestName: string;
//     phoneNumber: string;
//     specialRequests: string;
//   }) => void;
// }) {
//   const [reservationDate, setReservationDate] =
//     React.useState("Reservation date:");
//   const [reservationTime, setReservationTime] =
//     React.useState("Reservation time:");
//   const [partySize, setPartySize] = React.useState("Party size:");
//   const [guestName, setGuestName] = React.useState("Guest name:");
//   const [phoneNumber, setPhoneNumber] = React.useState("Phone number:");
//   const [specialRequests, setSpecialRequests] =
//     React.useState("Special requests:");
//   const [submitted, setSubmitted] = React.useState(false);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setUserData({
//       reservationDate: reservationDate,
//       reservationTime: reservationTime,
//       partySize: partySize,
//       guestName: guestName,
//       phoneNumber: phoneNumber,
//       specialRequests: specialRequests,
//     });
//     setReservationDate("");
//     setReservationTime("");
//     setPartySize("");
//     setGuestName("");
//     setPhoneNumber("");
//     setSpecialRequests("");
//     console.log("Reservation submitted:", {
//       reservationDate,
//       reservationTime,
//       partySize,
//       guestName,
//       phoneNumber,
//       specialRequests,
//     });
//   };

//   return (
//     <>
//       <div>
//         <HeaderNavBar />
//         {submitted && (
//           <div className="success-message">
//             <h2>Thank you for your reservation!</h2>
//             <p>We will see you soon.</p>
//           </div>
//         )}
//         <div
//           style={{ backgroundColor: "lightgray", height: "100vh" }}
//           className="reservationPageContainer"
//         >
//           <div className="reservationImageContainer">
//             <img
//               src={reservationPageImage}
//               alt="reservationImage"
//               className="reservation-left-image"
//             />
//           </div>

//           <div className="reservationFormContainer">
//             <div className="reserveTable">
//               <h1>RESERVE A TABLE WITH US</h1>
//               <p>We will promptly confirm.</p>
//             </div>

//             <form className="reserveForm" onSubmit={handleSubmit}>
//               <label>
//                 <input
//                   placeholder="Reservation date:"
//                   value={reservationDate}
//                   onChange={(e) => setReservationDate(e.target.value)}
//                   onFocus={() => {
//                     if (reservationDate === "Reservation date:") {
//                       setReservationDate("");
//                     }
//                   }}
//                 />
//               </label>
//               <label>
//                 <input
//                   placeholder="Reservation time:"
//                   value={reservationTime}
//                   onChange={(e) => setReservationTime(e.target.value)}
//                   onFocus={() => {
//                     if (reservationTime === "Reservation time:") {
//                       setReservationTime("");
//                     }
//                   }}
//                 />
//               </label>
//               <label>
//                 <input
//                   placeholder="Party size:"
//                   value={partySize}
//                   onChange={(e) => setPartySize(e.target.value)}
//                   onFocus={() => {
//                     if (partySize === "Party size:") {
//                       setPartySize("");
//                     }
//                   }}
//                 />
//               </label>

//               <label>
//                 <input
//                   placeholder="Guest name:"
//                   value={guestName}
//                   onChange={(e) => setGuestName(e.target.value)}
//                   onFocus={() => {
//                     if (guestName === "Guest name:") {
//                       setGuestName("");
//                     }
//                   }}
//                 />
//               </label>

//               <label>
//                 <input
//                   placeholder="Phone number:"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   onFocus={() => {
//                     if (phoneNumber === "Phone number:") {
//                       setPhoneNumber("");
//                     }
//                   }}
//                 />
//               </label>

//               <label>
//                 <input
//                   placeholder="Special requests:"
//                   value={specialRequests}
//                   onChange={(e) => setSpecialRequests(e.target.value)}
//                   onFocus={() => {
//                     if (specialRequests === "Special requests:") {
//                       setSpecialRequests("");
//                     }
//                   }}
//                 />
//               </label>
//             </form>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// }
