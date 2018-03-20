/* eslint-disable */
import React from 'react';
import App from './app';

describe('<App />', () => {
    it('Should render <App /> without crash', () => {
        shallow(<App />);
    });
})