import React from 'react';
import {Layout, Input} from 'antd';
import {FormattedMessage, injectIntl} from 'react-intl';

import en from '../i18n/en.js';

const {Search} = Input;
const SearchInput = props => {
  const {onSearch} = props;

  return (
    <div className="searchinput-container d-flex center align-items-center">
      <Search
        placeholder={props.intl.formatMessage ({id: 'SEARCH_YOUR_SONGS'})}
        type="text"
        className="searchInput"
        onChange={e => props.onSearch (e && e.target ? e.target.value : '')}
        enterButton
        allowClear
      />
    </div>
  );
};
export default injectIntl (SearchInput);
