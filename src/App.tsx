import React from 'react';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
// 使用library的方式来添加图标，fas就是添加入所有图标的意思
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Menu
          defaultIndex={'0'}
          onSelect={(index) => alert(index)}
          mode='horizontal'
          defaultOpenSubMenus={['2']}
        >
          <MenuItem>kong0</MenuItem>
          <MenuItem disabled>kong1</MenuItem>
          <SubMenu title='下拉'>
            <MenuItem>ling0</MenuItem>
            <MenuItem>ling1</MenuItem>
          </SubMenu>
          <MenuItem>kong2</MenuItem>
        </Menu>

        <Button disabled>不可用按钮</Button>
        <Button autoFocus className='custom' btnType='primary' size='lg'>
          大按钮
        </Button>
        <Button>中按钮</Button>
        <Button btnType='primary' size='sm'>
          小按钮
        </Button>
        <Button btnType='danger'>危险！</Button>
        <Button
          disabled={false}
          btnType='link'
          href='http://www.baidu.com'
          target='_blank'
        >
          链接按钮
        </Button>
      </header>
    </div>
  );
}

export default App;
