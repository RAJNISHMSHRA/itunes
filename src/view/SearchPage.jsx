//imported  from library
import React, {useState, useCallback, useEffect} from 'react';
import {Layout, Menu, Button} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import applemusic from '../image/am.png';
import {FormattedMessage, injectIntl} from 'react-intl';

// local imported files
import Search from '../components/Search';
import utilHelper from '../util/utilHelper';
import SongContainer from '../components/SongContainer';
import DefaultPage from '../components/DefaultPagr';
import fetchSongs from '../actions/songs.js';

const {Sider, Content} = Layout;

const SearchPage = props => {
  const [data, setData] = useState ();
  const [loader, setLoader] = useState (false);
  const [noSong, setnoSong] = useState (false);
  const songsData = useSelector (state => state.songs);
  const dispatch = useDispatch ();

  const onSearch = useCallback (
    params => {
      console.log (params);
      params
        ? utilHelper.debounce (300, onSearchHandler (params))
        : setSongsData ('');
    },
    [data]
  );

  useEffect (
    () => {
      const {songs, alert} = songsData;
      songsData && songs.length
        ? setSongsData (songsData)
        : alert ? NoSongFound () : setSongsData ();
      setLoader (false);
    },
    [songsData]
  );

  const setSongsData = songsData => {
    songsData
      ? setData ({
          count: songsData.count,
          songs: songsData.songs,
        })
      : setData ('');
  };

  const NoSongFound = () => {
    setnoSong (true);
    setData ('');
  };

  function onSearchHandler (params) {
    setLoader (true);
    dispatch (fetchSongs (params));
  }

  const onMenuClick = event => {
    switch (+event.key) {
      case 1:
        return window.open ();

      case 2:
        return window.open (
          'https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/'
        );

      case 3:
        return window.open ('https://www.apple.com/in/music/');
      default:
        break;
    }
  };
  console.log (songsData);
  return (
    <div>
      <Layout>
        <div className="sider-menu">
          <Sider
            width={300}
            theme="light"
            className="site-layout-background  side-menuContainer sticky-top"
          >
            <Search onSearch={onSearch} />
            <Menu theme="light" className="side-menu ">
              <Button
                href="https://music.apple.com/us/for-you"
                type="danger"
                className="d-flex p-3 Browse-btn  align-items-center justify-content-around"
              >
                <span className="mr-3">
                  <img src={applemusic} width="30px" />
                </span>
                <span className="menu-item-text">
                  {<FormattedMessage id="BROWSE" />}
                </span>
              </Button>
              <Menu.Item key="2" onClick={e => onMenuClick (e)}>
                <span className="menu-item-text">
                  {<FormattedMessage id="GO_TO_ITUNES_API" />}
                </span>
              </Menu.Item>
              <Menu.Item key="3" onClick={e => onMenuClick (e)}>
                <span className="menu-item-text">
                  {<FormattedMessage id="APPLE_MUSIC" />}
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
        </div>
        <Layout style={{padding: '0 24px 24px', overflow: 'hidden'}}>

          <Content
            className="site-layout-background container-fluid containt"
            style={{overflow: 'initial'}}
          >
            <div className=" d-flex justify-content-between pb-5 p-2">
              <span className="content-heading-listofsong">
                <h5><FormattedMessage id="LIST_OF_SEARCHED_SONG" /> </h5>
              </span>
              <span>
                <h5>
                  <FormattedMessage id="NO_OF_SONGS" />: {data ? data.count : 0}
                </h5>
              </span>
            </div>
            {data
              ? <SongContainer songsData={data} />
              : <DefaultPage loader={loader} noSong={noSong} />}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default injectIntl (SearchPage);
