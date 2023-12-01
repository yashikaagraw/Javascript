import { useState } from "react";

const Header = ({ country }) => {
  const [state, setState] = useState("Yashika");
  let state1 = "Tony Stark"; // not re rerender on change
  return (
    <div>
      <h1>
        Hello, {state} from {country}
      </h1>
      <button
        onClick={() => {
          setState("Yash");
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default Header;
