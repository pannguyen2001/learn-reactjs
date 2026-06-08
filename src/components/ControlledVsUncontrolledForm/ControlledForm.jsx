/**
 * Controlled form
 * Use useState as source-of-truth, it will cause rerender when fill value each filed, but easy to controll change, allert invalid value
 * Prefer to use than un controlled form for big form
 * Avoid mixing both controlled and uncontrolled
 * Source:
 * [React Design Patterns || Controlled & Uncontrolled Forms || Day 02][tapaScript by Tapas Adhikary][2025] https://www.youtube.com/watch?v=jPMCouXondI&list=PLIJrr73KDmRyQVT__uFZvaVfWPdfyMFHC&index=3
 */

import logger from "@/helpers/logger";
import { useRef, useState } from "react";


export default function ControlledForm () {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    logger.info(`[${ControlledForm.name}] Form changed:`,`${JSON.stringify(form)}`)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name) {
            nameRef.current.focus();
            return;
        }
        if (!form.email.includes("@")) {
            emailRef.current.focus();
            return;
        }
        if (!form.message) {
            messageRef.current.focus();
            return;
        }
        logger.info(`[${ControlledForm.name}] Form submitted:`,`${JSON.stringify(form)}`)
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
        <input
            name="name"
            type="text"
            value={form.name}
            ref={nameRef}
            onChange={handleChange}
            placeholder="Name"
        />
        <input
            name="email"
            type="email"
            ref={emailRef}
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
        />
        <textarea
            name="message"
            ref={messageRef}
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
        />
        <button
            type="submit"
        >
            Send Feedback
        </button>
        </form>
    )
}