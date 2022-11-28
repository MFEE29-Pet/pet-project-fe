import ButtonPost from './components/ButtonPost';
import './ForumPost.css';

function ForumPost() {
  return (
    <>
      <div className="forum_post_card">
        <div className="forum_post_top">
          <div className="forum_post_select">
            <select id="forum_post_select" />
          </div>
          <div className="forum_post_title_bar">
            <input placeholder="文章標題" id="forum_post_title_bar" />
          </div>
        </div>

        <div className="forum_post_content_bar">
          <input placeholder="文章內容" id="forum_post_content_bar" />
        </div>

        <div className="forum_post_icon">
          <i className="fa-light fa-face-smile" id="forum_smile"></i>
          <i className="fa-light fa-image" id="forum_image"></i>
        </div>

        <div className="forum_post_button">
          <button className="btn_post bg_main_light_color1">發表</button>
        </div>
      </div>
    </>
  );
}

export default ForumPost;
