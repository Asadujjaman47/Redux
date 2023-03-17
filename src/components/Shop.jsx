import React from "react";
import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Deposit/Withdraw Money</h2>
      <div className="container">
        <button
          className="btn btn-primary mx-2"
          onClick={() => dispatch(actionCreators.withdrawMoney(100))}
        >
          -
        </button>
        Update blance
        <button
          className="btn btn-primary mx-2"
          onClick={() => dispatch(actionCreators.depositMoney(100))}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Shop;
