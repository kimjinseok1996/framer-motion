const Container = ({ children }) => {
  const containerStyle = {
    width: "1248px",
    margin: "0 auto",
    padding: "0 20px",
  };
  return <div style={containerStyle}>{children}</div>;
};

export default Container;
