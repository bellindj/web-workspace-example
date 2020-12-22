import React from 'react';

import './app-specific-widget-1.module.scss';

/* eslint-disable-next-line */
export interface AppSpecificWidget1Props {}

export function AppSpecificWidget1(props: AppSpecificWidget1Props) {
  return (
    <div>
      I am an app specific component in domain #1
    </div>
  );
}

export default AppSpecificWidget1;
