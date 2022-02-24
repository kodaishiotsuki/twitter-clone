import { Search } from '@mui/icons-material';
import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css";


function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <Search className='widgets_searchIcon' />
        <input placeholder='キーワード検索' type="text" />
      </div>

      <div className='widgets_widgetContainer'>
        <h2>今どうしてる？</h2>

        {/* ライブラリを追加 */}
        <TwitterTweetEmbed tweetId={"1496374285090369538"} />
        
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='kodai_fitlife'
          options={{height:400}}
        />

          <TwitterShareButton
          url={'https://twitter.com/kodai_fitlife'}
          options={{ text: '#React.js is awesome', via: 'kodai_fitlife' }}
        />

      </div>
    </div>
  )
}

export default Widgets