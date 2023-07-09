import React from 'react';
import classNames from 'classnames/bind';
import Header from '~/components/Layouts/components/Header';
import SideBar from './SideBar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
