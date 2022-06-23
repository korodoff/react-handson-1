import "./style.css";

const FunctionComponent = () => {
  return (
    <div>
      <h4>This is use using functional component</h4>
      <p className="externalCss">this is done using external CSS</p>
      <p style={{ color: "red" }}>this is done using internal CSS</p>
    </div>
  );
};

export default FunctionComponent;
