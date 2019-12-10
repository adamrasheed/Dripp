import React from 'react';
import { connect } from 'react-redux'
import drippLogo from './dripp-logo.svg'
import './App.css';
import Reset from './components/Reset';
import AddMoney from './components/AddMoney';


const mapStateToProps = (state) => {
 return {
   totalAmount: state.amount.amount,
 }
}



const App = ({ totalAmount}) => {
  
  return (
    <div className="app">
      <img src={drippLogo} alt="Dripp" className="logo" />

      <AddMoney amount={10} />

      <p className="total-amount">You've saved ${totalAmount} in total.</p>
      <Reset />
    </div>
  );
}

export default connect(mapStateToProps)(App);
