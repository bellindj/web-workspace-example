import React from 'react';
import { render } from '@testing-library/react';

import AppSpecificWidget2 from './app-specific-widget-2';

describe('AppSpecificWidget2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppSpecificWidget2 />);
    expect(baseElement).toBeTruthy();
  });
});
