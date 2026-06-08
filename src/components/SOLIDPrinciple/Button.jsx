// Open/Closed Principle (OCP): open to add more but not to modify

export const Button = ({ onClick, children, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

// Usage
export const PrimaryButton = (props) => {
  const primaryStyle = { backgroundColor: "blue", color: "white" };
  return <Button {...props} style={primaryStyle} />;
};

export const SecondaryButton = (props) => {
  const primaryStyle = { backgroundColor: "green", color: "white" };
  return <Button {...props} style={primaryStyle} />;
};
