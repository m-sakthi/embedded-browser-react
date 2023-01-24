import React from 'react';
import Browser from './browser';

export default () => {
  return (
    // You can either pass url or a child
    <Browser
      // url="https://somedomain.com"
      theme='light'>
      <h1>Hello world</h1>
    </Browser>
  );
};