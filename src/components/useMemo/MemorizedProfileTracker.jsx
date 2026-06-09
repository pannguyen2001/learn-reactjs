import {useState } from "react"
import MemorizeCard from "./ProfileCard"
import logger from "@/helpers/logger"

const H3Render = ({value, count}) => {
    logger.info(`H3Rendered ${count} times`)

    return (
        <h3>MemorizedProfileTracker value: {value}</h3>
    )
}


export default function MemorizedProfileTracker() {
    const [value, setValue] = useState("")
    const [count, setCount] = useState(0)

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
            <MemorizeCard name="Pan"/>
        </div>
    )
}