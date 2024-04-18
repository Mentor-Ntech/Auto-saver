import { Link } from "react-router-dom";
import "../Withdrawal/Withdraw.css";
import { useRef, useContext } from "react";
import Web3Context from "../../../context/Web3Context";
import WebButton from "../Button/Button";
import AutoSaveContext from "../../../context/AutoSaveContext";
import toast from 'react-hot-toast'


const SaveAsset = () => {
  



  return (
    <div className="container">
      <section className="form-container">
        <h1>Save Token</h1>
        <div>
          <Link to="/save-asset" className="--btn --btn-success">Manual</Link>
          <Link to="/auto-save-asset" className="--btn --btn-primary">Automated</Link>
        </div>
        <form>
          <div>
            <label htmlFor="">Deposit Amount:</label>
            <input type="text" placeholder="Enter amount" />
          </div>
          <button className="--btn-primary --btn --btn-block">Submit</button>
         
          <div>
            <label htmlFor="">Withdraw Amount:</label>
            <input type="text" placeholder="Enter amount" />
          </div>
         
          <button className="--btn-danger --btn --btn-block">Submit</button>

        </form>
      </section>
    </div>
  );
};

export default SaveAsset;