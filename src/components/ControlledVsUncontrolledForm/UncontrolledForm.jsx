/**
 * UncontrolledFeedbackForm example
 * No cause rerender when fill value, maybe hard to controll than controlled form, if big form, else prefer using uncontrolled form if it is just small form
 *
 * * Source:
 * [React Design Patterns || Controlled & Uncontrolled Forms || Day 02][tapaScript by Tapas Adhikary][2025] https://www.youtube.com/watch?v=jPMCouXondI&list=PLIJrr73KDmRyQVT__uFZvaVfWPdfyMFHC&index=3
 *
 * @component
 * @returns {JSX.Element} - The feedback form.
*/


import logger from "@/helpers/logger";
import { useRef } from "react";

export default function UncontrolledFeedbackForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name) { nameRef.current.focus(); return; }
    if (!email.includes("@")) { emailRef.current.focus(); return; }
    if (!message) { messageRef.current.focus(); return; }

    logger.info(`[${UncontrolledFeedbackForm.name}] Form submitted:`,`${JSON.stringify({name, email, message})}`);
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        ref={nameRef}
        placeholder="Name"
      />
      <input
        type="email"
        ref={emailRef}
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        placeholder="Your message"
      />
      <button
        type="submit"
      >
        Send Feedback
      </button>
    </form>
  );
}