import "./Modal.css"

export const Modal = () => {
  return (
    <div id="modal_wrap">
      <div id="modal_logo">
        <img src="smoke.png" alt="" />
      </div>
      <div className="modal_input_wrap">
        <div>Email</div>
        <input type="text" className="modal_inputs" />
      </div>
      <div className="modal_input_wrap">
        <div>Password</div>
        <input type="text" className="modal_inputs" />
      </div>
      <div>Forgot Your Password?</div>
      <div>
        <button>Enter</button>
      </div>
    </div>
  );
};
