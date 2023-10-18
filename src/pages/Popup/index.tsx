import { useEffect } from 'react';
import { AntDesignOutlined, RightCircleOutlined } from '@ant-design/icons';
import './index.less';

export default function () {
  useEffect(() => {
    console.log('Hello from the popup!');
  }, []);

  return (
    <div className="popup">
      <AntDesignOutlined style={{ fontSize: '3rem' }} />
      <h1>chrome-extension-vite-react-antd</h1>
    </div>
  );
}
