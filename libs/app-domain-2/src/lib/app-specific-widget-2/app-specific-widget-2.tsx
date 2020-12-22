import React from 'react';

import './app-specific-widget-2.module.scss';

/* eslint-disable-next-line */
export interface AppSpecificWidget2Props {}

export function AppSpecificWidget2(props: AppSpecificWidget2Props) {
  return (
    <div>
      I am an app specific component in domain #2
    </div>
  );
}

export default AppSpecificWidget2;
