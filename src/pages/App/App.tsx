import "./App.css";
import { Layout } from 'antd';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'shared/routes/constants';

import Home from 'uicontainers/Home/Home';
import Content from 'uicontainers/layout/Content';
import Header from 'uicontainers/layout/Header';

import styles from './App.module.css';
import Navbar from 'uicontainers/layout/Header/Navbar';
import Products from "uicontainers/Products";

const App = () => {
  return (
    <Layout className={styles.layout}>
      <Navbar />
      <Content>
        <Routes>
          <Route path={ROUTES.PATHS.ROOT} element={<Home />} />
          <Route path={ROUTES.PATHS.HOME} element={<Products />} />
          <Route path={ROUTES.PATHS.PRODUCTS} element={<Products />} />
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
