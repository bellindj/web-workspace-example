import React from 'react';

import styles from './app.module.scss';
import { Button } from '@base11/shared-components'
import { AppSpecificWidget1 } from '@base11/app-domain-1'
import { AppSpecificWidget2 } from '@base11/app-domain-2'

// TODO add react-router here to load different components based on the route
export function App() {
  return (
    <div className={styles.app}>
      <Button>
      </Button>
      <AppSpecificWidget1></AppSpecificWidget1>
      <AppSpecificWidget2></AppSpecificWidget2>
    </div>
  );
}

export default App;
