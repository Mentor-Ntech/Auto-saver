import React, { useEffect, useState } from "react";
import "./Withdraw.css";

const WithdrawalPage = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  
  useEffect(() => {
    const walletSaved = localStorage.getItem("walletAddress");
    const walletBal = localStorage.getItem("balanceInEther");
    setWalletAddress(walletSaved);
    setWalletBalance(walletBal);
  }, []);

  return (
    <div className="container">
      <section className="form-container">
        <h1>Withdraw Token</h1>
        <p>Balance: {walletBalance} </p>
        <form>
          <div>
            <label htmlFor="">To:</label>
            <input type="text" placeholder="input wallet address" />
          </div>
          <div>
            <label htmlFor="">Amount:</label>
            <input type="text" placeholder="Enter amount to be withdrawn" />
          </div>

          <button className="--btn-primary --btn --btn-block">Withdraw Asset</button>
        </form>
      </section>
    </div>
  );
};

export default WithdrawalPage;
