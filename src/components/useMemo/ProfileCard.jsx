import logger from "@/helpers/logger";
import { memo } from "react";

// useMemo remember value
const MemoizedCard = memo(function ProfileCard({ name }) {
    logger.info("Rendered");
    return <h3>MemoizedCard value: {name}</h3>;
});

export default MemoizedCard;