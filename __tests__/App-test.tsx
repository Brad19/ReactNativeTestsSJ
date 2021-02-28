import React from 'react';
import fetch from 'jest-fetch-mock';
import App from '../App';
import { render, waitFor } from '@testing-library/react-native';

require('jest-fetch-mock').enableMocks();

describe('App', () => {
  it('renders correctly with the right values', async () => {

    fetch.mockIf(/^https?:\/\/test.swipejobs.com\/*\/profile$/);

    fetch.mockIf(/^https?:\/\/test.swipejobs.com\/*\/matches$/);

    const { getByTestId, getByText } = render(<App />);
    await waitFor(() => {
      expect(getByTestId('Topbar')).toBeDefined();

    })
    // Header
    expect(getByText('swipe')).toBeTruthy();
    expect(getByText('jobs')).toBeTruthy();
    // First Name & Last Name
    expect(getByText('Jim Rose')).toBeTruthy();
    // JobTitle
    expect(getByText('Driver')).toBeTruthy();
    // Company Name
    expect(getByText('Steve Smith Construction')).toBeTruthy();

  });

});


