import React from 'react';
import { render } from '@testing-library/react';

import AppSpecificWidget1 from './app-specific-widget-1';

describe('AppSpecificWidget1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppSpecificWidget1 />);
    expect(baseElement).toBeTruthy();
  });
});
