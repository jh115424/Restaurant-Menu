import "./eList.css";
import React from "react";
import HeaderNavBar from "../Header/HeaderNavBar";
import { useState } from "react";

import salmonWithDrizzle from "/public/salmonWithDrizzle.jpg";
import Footer from "../RestaurantHomePageComponent/Footer/Footer";

export default function EList({
  setUserData,
}: {
  setUserData: (data: {
    name: string;
    email: string;
    phone: string;
    guests: number;
    date: string;
    time: string;
    message: string;
  }) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    setSubmitted(true);
    setUserData({
      name: name,
      email: email,
      phone: phone,

      guests: Number(guests),
      date: date,
      time: time,
      message: message,
    });
    setName("");
    setEmail("");
    setPhone("");
    setGuests("");
    setDate("");
    setTime("");
    setMessage("");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
    console.log("Form submitted", {
      name,
      email,
      phone,
      guests,
      date,
      time,
      message,
    });
  };

  return (
    <>
      <HeaderNavBar />
      {submitted && (
        <div className="success-message">
          <h2>Thank you for your submission!</h2>
        </div>
      )}
      <div style={{ backgroundColor: "lightgray " }} className="flex-container">
        <div className="e-list-container">
          <div className="e-list-form-container">
            <div className="vip-email-sign-up">
              <h1>
                Sign up for V.I.P email updates from us on newest Chef
                creations, events just for members and more !
              </h1>
              <h1>Please enter information</h1>
            </div>
            <form className="e-List-form" onSubmit={handleSubmit}>
              <div className="body">
                <label>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  Phone:
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <label>
                  Guests Amount:
                  <input
                    type="text"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  />
                </label>
                <label>
                  Date:
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </label>
                <label>
                  Time:
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </label>
                <label>
                  Message:
                  <textarea
                    rows={4}
                    cols={50}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>

                <button type="submit">Submit</button>
              </div>
            </form>

            <p className="email-terms">
              By providing your email, you are agreeing to participate in the
              marketing program and to be contacted through this email as part
              of the program. We will not sell your information.
            </p>
          </div>
        </div>
        <div className="salmon-image-container">
          <img
            src={salmonWithDrizzle}
            alt="salmonWithDrizzle"
            className="salmon"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
