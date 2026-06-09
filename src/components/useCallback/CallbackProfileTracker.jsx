import {useCallback, useState } from "react"
import logger from "@/helpers/logger"
import ClickButton from "./ClickButton"

const H3Render = ({value, count}) => {
    logger.info(`H3Rendered ${count} times`)

    return (
        <h3>MemorizedProfileTracker value: {value}</h3>
    )
}


export default function CallbackProfileTracker() {
    const [value, setValue] = useState("")
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        logger.info("Clicked")
    },[])

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setCount(count + 1)
                }}
            />
            <H3Render value={value} count={count}/>
            <ClickButton onClick={handleClick}/>
        </div>
    )
}