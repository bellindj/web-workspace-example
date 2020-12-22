import React from 'react';
import { render } from '@testing-library/react';

import AppDomain1 from './app-domain-1';

describe('AppDomain1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppDomain1 />);
    expect(baseElement).toBeTruthy();
  });
});
