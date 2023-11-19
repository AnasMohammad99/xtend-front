import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import AppDashboard from './components/Dashboard';
import CurrencyApp from './components/CurrencyApp';
export const AppRoute = {
  dashboard: `/dashboard`,
  news: `/news`,
  weather: `/weather`,
  currency:`/currency`
};
const AppRoutes = ({onDeleting, onEditing}) => {

  return (

    <Routes>
      <Route
        path={AppRoute.dashboard}
        exact
        element={<AppDashboard />}
      />
      <Route
        path={AppRoute.currency}
        exact
        element={<CurrencyApp onDeleting={onDeleting} onEditing={onEditing} />}
      />
      <Route
        path="*"
        element={<Navigate to={AppRoute.dashboard} replace />}
    />
    </Routes>
  )
}

export default AppRoutes