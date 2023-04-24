import React from "react";

function Popup(props) {
  return props.trigger ? (
    <div className="flex items-center justify-center fixed top-0 left-0 h-screen w-full bg-black/40">
      <div className="relative p-8 my-auto mx-5 w-full max-[600px] rounded-md bg-white">
        {/* close button  */}
        <button onClick={() => props.setTrigger(false)}>Close</button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
