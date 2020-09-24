import React, { useState } from 'react'
import {Link} from 'react-router-dom';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function Footer() {
  const [root, setRoot] = useState('all');

  return (
    <div className="footer">
      <BottomNavigation>
        <Link to="/todo/all">
          <BottomNavigationAction
              label="all"
              onClick={() => setRoot('all')}
              className={(root === 'all' ? 'is_active' : '')}
              icon={<ListIcon />}
            />
        </Link>
        <Link to="/todo/not_completed">
          <BottomNavigationAction
            label="not_completed"
            onClick={() => setRoot('not_completed')}
            className={(root === 'not_completed' ? 'is_active' : '')}
            icon={<CheckBoxOutlineBlankIcon/>}
        />
        </Link>
        <Link to="/todo/completed">
          <BottomNavigationAction
            label="completed"
            onClick={() => setRoot('completed')}
            className={(root === 'completed' ? 'is_active' : '')}
            icon={<CheckBoxIcon />}
          />
        </Link>
      </BottomNavigation>
    </div>
  )
}

export default Footer
