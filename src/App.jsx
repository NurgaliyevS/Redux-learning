// @ts-ignore
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {addCustomerAction, removeCustomerAction} from './store/customReducer'
import { addCashAction, getCashAction} from './store/cashReducer';
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  // @ts-ignore
  const cash = useSelector((state) => state.cash.cash);
  // @ts-ignore
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  };

  const getCash = (cash) => {
    // dispatch({ type: "GET_CASH", payload: cash });
    dispatch(getCashAction(cash))
  };

  const addClient = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  };

  const removeClient = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  };

  return (
    <div style={{textAlign: "center"}}>
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <button
          onClick={() => {
            addCash(Number(prompt()));
          }}
        >
          Deposit
        </button>
        <button
          onClick={() => {
            getCash(Number(prompt()));
          }}
        >
          Withdraw
        </button>
        <button
          onClick={() => {
            addClient(prompt());
          }}
        >
          Add client
        </button>
        <button
          onClick={() => {
            dispatch(fetchCustomers());
          }}
        >
         Get client from database 
        </button>
      </div>
      {customers.length > 0 ?  (
        <div>
          {customers.map(customer => 
              <div key={customer.id} onClick={() => {removeClient(customer)}} style={{fontSize: "2rem", border: "1px solid black", padding: "10px 20px"}}>{customer.name}</div>
            )}
        </div>
      ) : (
        <div style={{fontSize: "2rem", marginTop: 20}}>
          Клиенты отсутствуют
        </div>
      )}
    </div>
  );
}

export default App;
