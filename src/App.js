import React from "react";
import "../public/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../public/waxjs";
// import waxjs from "../public/waxjs";
import * as waxjs from "@waxio/waxjs/dist";

export default function App() {
  // const wax = new waxjs.WaxJS("https://wax.greymass.com");
  const wax = new waxjs.WaxJS("https://wax.greymass.com", null, null, false);
  // const wax = new waxjs.WaxJS(
  //   "https://wax.greymass.com",
  //   null,
  //   [
  //     "EOS6rjGKGYPBmVGsDDFAbM6UT5wQ9szB9m2fEcqHFMMcPge983xz9",
  //     "EOS7wTCoctybwrQWuE2tWYGwdLEGRXE9rrzALeBLUhWfbHXysFr9W"
  //   ],
  //   false
  // );

  async function login() {
    try {
      const userAccount = await wax.login();
      document.getElementById("response").append(userAccount);
    } catch (e) {
      document.getElementById("response").append(e.message);
    }
    alert("You have Succesfully loged in");
  }

  // async function sign() {
  //   if (!wax.api) {
  //     return document.getElementById("response").append("* Login first *");
  //   }

  //   try {
  //     const result = await wax.api.transact(
  //       {
  //         actions: [
  //           {
  //             account: "eosio",
  //             name: "delegatebw",
  //             authorization: [
  //               {
  //                 actor: wax.userAccount,
  //                 permission: "active"
  //               }
  //             ],
  //             data: {
  //               from: wax.userAccount,
  //               receiver: wax.userAccount,
  //               stake_net_quantity: "0.00000001 WAX",
  //               stake_cpu_quantity: "0.00000000 WAX",
  //               transfer: false
  //             }
  //           },
  //           {
  //             account: "eosio.token",
  //             name: "transfer",
  //             authorization: [
  //               {
  //                 actor: wax.userAccount,
  //                 permission: "active"
  //               }
  //             ],
  //             data: {
  //               from: wax.userAccount,
  //               to: "eosio",
  //               quantity: "0.00000001 WAX",
  //               memo: "test send " + Math.floor(Math.random() * 1000000)
  //             }
  //           }
  //         ]
  //       },
  //       {
  //         blocksBehind: 3,
  //         expireSeconds: 30
  //       }
  //     );
  //     document.getElementById("response").append(JSON.stringify(result));
  //   } catch (e) {
  //     document.getElementById("response").append(e.message);
  //   }
  // }
  return (
    <div className="App">
      <button id="login" className="btn btn-danger btn-lg " onClick={login}>
        Wax login
      </button>
      <br />
      <hr />
      {/* <button id="sign" className="btn btn-success" onClick={sign}>
        Sign transaction
      </button> */}
      <h2 id="response"> </h2>

      <p id="demo"></p>
    </div>
  );
}
