/**
 * useRef example
 * Avoid rerender between trigger state change
 * Usage of useRef: in form, when fill value in input, it will not caise rerender.
 *
 * Source:
 * [React Design Patterns || Controlled & Uncontrolled Forms || Day 02][tapaScript by Tapas Adhikary][2025] https://www.youtube.com/watch?v=jPMCouXondI&list=PLIJrr73KDmRyQVT__uFZvaVfWPdfyMFHC&index=3
 *
 * @returns {React.ReactElement} A counter.
 */


import { useRef, useState } from "react";

import logger from "@/helpers/logger";


export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);

    const decrement = () => setCounter(counter - 1);

    logger.info(`[${Counter.name}] Current counter: ${counter}`)

    const refCounter = useRef(0);

    const refIncrement = () => {
        refCounter.current = refCounter.current + 1;
        logger.info(`[${Counter.name}] Current ref counter: ${refCounter.current}`);
    };

    const refDecrement = () => {
        refCounter.current = refCounter.current - 1;
        logger.info(`[${Counter.name}] Current ref counter: ${refCounter.current}`);
    };

    logger.info(`[${Counter.name}] Current ref counter: ${refCounter.current}`);


    return (
        <div>
            <p>Value: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>Current counter: {refCounter.current}</p>
            <button onClick={refIncrement}>Ref Increment</button>
            <button onClick={refDecrement}>Ref Decrement</button>
        </div>
    )
}