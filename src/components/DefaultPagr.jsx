import React from 'react'
import musicman from'../image/animationmusic.gif';
import noData from'../image/not found.gif';
import {Space,Spin} from 'antd'
import { LoadingOutlined,SearchOutlined } from '@ant-design/icons';
import { FormattedMessage, injectIntl } from 'react-intl';

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const DefaultPage= (props) =>{
  const{loader,noSong}= props

return(
<>
<div className="defaultpage-container d-flex justify-content-center align-items-center flex-column">
  <h3 className="tracking-in-expand">
    {noSong && !loader
      ? <FormattedMessage id="NO_SONG_FOUND" />
      : <FormattedMessage id="SEARCH_YOUR_FAVOURITE_MUSIC" />}
  </h3>
  <div className="defaultPage-imgholder d-flex justify-content-center align-items-center">
    {noSong && !loader
      ? <img
          src={noData}
          alt={props.intl.formatMessage ({id: 'NO_SONGS_FOUND'})}
          width="50%"
        />
      : loader
          ? <Space
              size="middle"
              className="d-flex align-items-center justify-content-center"
            >
              <Spin
                indicator={antIcon}
                tip={<FormattedMessage id="LOADING" />}
                size="large"
              />
            </Space>
          : <img src={musicman} alt="welcome" width="100%" />}
  </div>

</div>;


</>
)

}
export default injectIntl(DefaultPage);
