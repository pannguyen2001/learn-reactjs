/**
 * useRef example
 * Source:
 * [React Design Patterns || Controlled & Uncontrolled Forms || Day 02][tapaScript by Tapas Adhikary][2025] https://www.youtube.com/watch?v=jPMCouXondI&list=PLIJrr73KDmRyQVT__uFZvaVfWPdfyMFHC&index=3
 */


import logger from "@/helpers/logger";
import { useEffect, useRef } from "react";


export default function AutoFocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus(); // access DOM directly
        logger.info(`[${AutoFocusInput.name}] ${inputRef.current.value}`)
    }, [inputRef]);

    return (
        <input
            ref={inputRef}
            type="text"
            placeholder="Type something..."
            // autoFocus
        />
    )
}