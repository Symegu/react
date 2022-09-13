// import { useState } from 'react';
import { MessageClass } from './class-components/Message';
import './index.css';

export const App = () => {
  return (
    <div>
      <MessageClass messageList={['App_props-1 ', 'App_props-2 ']} />
    </div>
  );
};
