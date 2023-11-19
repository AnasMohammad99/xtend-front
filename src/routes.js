import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import AppDashboard from './components/Dashboard';
import BusgetApp from './components/BusgetApp';
export const AppRoute = {
  dashboard: `/dashboard`,
  budget:`/budget`
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
        path={AppRoute.budget}
        exact
        element={<BusgetApp onDeleting={onDeleting} onEditing={onEditing} />}
      />
      <Route
        path="*"
        element={<Navigate to={AppRoute.dashboard} replace />}
    />
    </Routes>
  )
}

export default AppRoutes