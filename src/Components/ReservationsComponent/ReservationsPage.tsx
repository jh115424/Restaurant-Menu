import HeaderNavBar from "../Header/HeaderNavBar";
import Footer from "../RestaurantHomePageComponent/Footer/Footer";
import React from "react";
import reservationsPageImage from "/public/reservationsPageImage.png"
import "./reservationsPage.css"




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

  return (
    <>
      <HeaderNavBar />

      <div className="reservations-page-container">
        {/* your layout goes here */}
      </div>

      <Footer />
    </>
  );
}
