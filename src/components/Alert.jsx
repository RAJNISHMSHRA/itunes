import React from 'react';
import {notification, button} from 'antd';

export const Alert = () => {
  return function () {
    notification.open ({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log ('Notification Clicked!');
      },
    });
  };
};
