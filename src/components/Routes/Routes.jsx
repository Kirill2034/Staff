import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { ROUTES } from '../../utils/routes';
import SingleProducts from '../Products/SingleProducts';
import Profile from '../Profile/Profile';
import SingleCategory from '../Categories/SingleCategory';
import Cart from '../Cart/Cart';

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.PRODUCT} element={<SingleProducts />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
        <Route path={ROUTES.CART} element={<Cart />} />
    </Routes>
)

export default AppRoutes;