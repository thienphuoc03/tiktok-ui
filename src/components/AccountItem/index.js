import React from 'react';
import classNames from 'classnames/bind';

import Styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://antimatter.vn/wp-content/uploads/2022/04/avatar-tiktok-bua.jpg"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
        </h4>
        <span className={cx('username')}>nguyenvana123</span>
      </div>
    </div>
  );
};

export default AccountItem;
