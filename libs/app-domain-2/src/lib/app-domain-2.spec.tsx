import React from 'react';
import { render } from '@testing-library/react';

import AppDomain2 from './app-domain-2';

describe('AppDomain2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppDomain2 />);
    expect(baseElement).toBeTruthy();
  });
});
