import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBudget } from './features/budget/budgetSlice';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Layout />
    </div>
    </BrowserRouter>
  );
}

export default App;
