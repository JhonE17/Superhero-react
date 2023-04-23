import { Route, Routes } from "react-router-dom";

import { Login } from "../auth/";
import { HeroesRoutes } from "../heroes";
import { PublicRoute,PrivateRoute } from "./";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={
          <PublicRoute>
            <Login /> 
          </PublicRoute>
        } />
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }/>
        {/* <Route path='/*' element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
