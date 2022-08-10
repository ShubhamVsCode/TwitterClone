import React from "react";
import NewPost from "./NewPost";
import NewTweet from "./NewTweet";

const MainView = () => {
  return (
    <div className="col-span-2 col-start-2 pb-10 lg:col-span-5 lg:mx-10 md:mx-0">
      <NewTweet />
      <NewPost
        profile="https://banner2.cleanpng.com/20180509/clq/kisspng-nasa-insignia-logo-national-advisory-committee-for-5af2da39e26428.9819356315258650179273.jpg"
        name="NASA"
        username="nasaofficial"
        time="11 days ago"
        like="12451"
        retweet="9741"
        comment="2911"
        share="248"
        postDescription="First Black Hole Picture"
        postImage="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/800px-Black_hole_-_Messier_87_crop_max_res.jpg"
      />
      <NewPost
        profile="https://static01.nyt.com/images/2021/01/30/business/29musk-print/29musk-1-videoSixteenByNineJumbo1600.jpg"
        name="Elon Musk"
        username="elonmusk"
        time="Few minutes ago"
        like="8473"
        retweet="2783"
        comment="5498"
        share="579"
        postDescription="Twitter should be bot free"
      />

      <NewPost
        profile="https://static01.nyt.com/images/2021/01/30/business/29musk-print/29musk-1-videoSixteenByNineJumbo1600.jpg"
        name="Elon Musk"
        username="elonmusk"
        time="Few minutes ago"
        like="3988"
        retweet="1198"
        comment="2056"
        share="652"
        postDescription="Launched the Greatest of All Time StarLink "
        postImage="https://www.starlink.com/assets/images/social/share.jpg"
      />
      <NewPost
        profile="https://banner2.cleanpng.com/20180509/clq/kisspng-nasa-insignia-logo-national-advisory-committee-for-5af2da39e26428.9819356315258650179273.jpg"
        name="NASA"
        username="nasaofficial"
        time="14 days ago"
        like="9548"
        retweet="6498"
        comment="1552"
        share="457"
        postDescription="James Web Telescope First Image"
        postImage="https://static.dw.com/image/62450424_401.jpg"
      />
    </div>
  );
};

export default MainView;
