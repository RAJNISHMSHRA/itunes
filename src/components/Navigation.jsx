import React from 'react';
import {Layout, Menu, Breadcrumb, Input} from 'antd';
import {Link} from 'react-router-dom';
import {AppleFilled} from '@ant-design/icons';
import {FormattedMessage, injectIntl} from 'react-intl';

const {Header} = Layout;

const Navigation = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <h1 className="LogoText d-flex justify-content-center">
            <AppleFilled twoToneColor="#fff" className="apple-logo" />
            {' '}
            <span className="ml-1">{<FormattedMessage id="MUSIC" />}</span>
          </h1>
        </div>
        <Menu theme="dark" mode="horizontal" className="nav-menu ">
          <Menu.Item key="1">
            <Link to={'/SearchPage'}>
              <FormattedMessage id="SEARCH_SONGS" />
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={'/Aboutus'}><FormattedMessage id="ABOUT" /></Link>
          </Menu.Item>
        </Menu>
        <p className="signature">@Rajnish Mishra</p>
      </Header>
    </Layout>
  );
};

export default injectIntl (Navigation);
