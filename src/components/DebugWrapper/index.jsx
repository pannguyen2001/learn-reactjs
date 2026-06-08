import logger from "@/helpers/logger";

const DebugWrapper = ({ children }) => {
  logger.debug(`${children.type.name}`);

  return <>{children}</>;
};

export default DebugWrapper;
