import React from 'react'
import {render, cleanup} from '@testing-library/react'
import App from './router/AppRouter';

describe('Take a snapshot', () => {
  afterEach(cleanup)
    it('should take a snapshot', () => {
    const { asFragment } = render(<App />)
    
    expect(asFragment(<App />)).toMatchSnapshot()
   })
});

