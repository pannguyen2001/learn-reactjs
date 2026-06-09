import logger from "@/helpers/logger";

// useCallback remember function, combine useMemo to prevent rerender the same function
import { memo } from "react";
const ClickButton = memo(function Child({ onClick }) {
    logger.info("Child Rendered");
    return <button onClick={onClick}>Click Me</button>;
});

export default ClickButton;