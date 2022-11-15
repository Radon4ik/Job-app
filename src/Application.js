'use strict';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import List from './pages/List';

const Application = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/page/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Application;
