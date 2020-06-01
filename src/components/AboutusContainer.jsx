import React, {useState} from 'react';
import {Row, Col, Avatar, Button, Modal} from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {FormattedMessage, injectIntl} from 'react-intl';

import Avator from '../image/avator.jpg';

const Aboutus = () => {
  const itunesUrl =
    'https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/';
  const [openModal, setopenModal] = useState (false);

  const showModal = e => {
    setopenModal (true);
  };

  const closeModal = e => {
    setopenModal (false);
  };

  return (
    <div className="About-page-Outer">
      <Row>
        <Col span={12}>
          <div className="Aboutus-body-cotainer container">
            <div>
              <h3> <FormattedMessage id="ABOUT_APPLE_PAGE_HEADING" /></h3>
              <div>
                <p>
                  This Web Application is made as an assignment  as well as for trial of
                  {' '}
                  <a href={itunesUrl} title="Go to itunes API page">
                    Itunes Api
                  </a>
                  . This is not an official or a complete web application by any means.
                </p>
                <p className="font-weight-bold">
                  <FormattedMessage id="WE_CAN_SAERCH_BY_ARTIST" />
                </p>
                <ul className="pl-3">
                  <li>
                    Search the songs In the search box on
                    {' '}
                    <Link
                      to="/"
                      title="Go to Search Page"
                      className="Seach-page-link"
                    >
                      Search page.
                    </Link>
                  </li>
                  <li><FormattedMessage id="LISTEN_TO_SONGS" /></li>
                </ul>
              </div>
            </div>

          </div>
        </Col>
        <Col span={12}>
          <div className="d-flex justify-content-center align-items-center flex-column developer-infoholder">
            <Avatar size={240} src={Avator} />
            <Button
              type="primary"
              className="mt-3"
              onClick={() => showModal ()}
            >
              See details
            </Button>
          </div>
          {openModal
            ? <Modal
                title={<span className="Modal-title">About developer</span>}
                className="about-page-modal"
                visible={true}
                onOk={closeModal}
                onCancel={closeModal}
              >
                <p className="Modal-description">
                  {' '}<FormattedMessage id="MODAL_DEVELOPER_NAME" />
                </p>
                <p className="Modal-description">
                  <span>Skills:</span>
                  <span><FormattedMessage id="MODAL_DEVELOPER_SKILLS" /></span>
                </p>
                <p className="Modal-description">
                  <span>Qualification:</span>
                  <span><FormattedMessage id="DEVELOPER_QUALIFICATION" /></span>
                </p>
                <div className="Modal-social-links-container d-flex justify-content-center">
                  <div className="d-flex justify-content-between">
                    <span
                      className="Modal-social-links github"
                      title="Go to Github"
                    >
                      <a href="https://github.com/RAJNISHMSHRA">
                        <GithubOutlined twoToneColor="black" />
                      </a>
                    </span>
                    <span
                      className="Modal-social-links linkdn"
                      title="Go to linkdin"
                    >
                      <a href="https://www.linkedin.com/in/rajnish-mishra97/">
                        <LinkedinOutlined />
                      </a>
                    </span>
                    <a href="#">
                      <span
                        className="Modal-social-links instagram"
                        title="Go to instagram"
                      >
                        <InstagramOutlined twoToneColor="#e83e8c" />
                      </span>
                    </a>
                  </div>
                </div>
              </Modal>
            : ''}
        </Col>
      </Row>
    </div>
  );
};
export default injectIntl (Aboutus);
