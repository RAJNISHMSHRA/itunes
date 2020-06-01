import React from 'react';
import {Card, Row, Col} from 'antd';
import {FormattedMessage, injectIntl} from 'react-intl';

const SongContainer = props => {
  console.log (props.songsData, 'songs data');

  const SongsCard =
    props.songsData.songs &&
    props.songsData.songs.map (item => {
      const imgUrl = item.artworkUrl100.substring (
        0,
        item.artworkUrl100.lastIndexOf ('source/')
      );

      return (
        <Col span={8} key={item.trackCensoredName} className="car-container">
          <Card
            style={{width: 300}}
            className="card"
            cover={
              <img
                alt={item.trackCensoredName}
                src={
                  `${imgUrl}/source/372x272bb.jpg` || `${item.artworkUrl600}`
                }
              />
            }
            hoverable
          >
            <marquee>
              <h5>
                <span className="card-title">
                  <span>
                    <FormattedMessage id="TRACK_NAME" />{item.trackName}
                  </span>
                </span>
              </h5>
            </marquee>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <audio className="audio" src={item.previewUrl} controls>
              <FormattedMessage id="BROWSER_AUDIO_SUPPORT_MSG" />
            </audio>
          </Card>
        </Col>
      );
    });

  return (
    <div>
      <Row className="container ">
        {SongsCard}
      </Row>
    </div>
  );
};
export default injectIntl (SongContainer);
