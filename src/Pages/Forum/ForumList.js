import SearchBar from './components/SearchBar';
import SelectBar from './components/SelectBar';
import ButtonBar from './components/ButtonBar';
import ForumListBar from './components/ForumListBar';
import './ForumList.css';

function ForumList() {
  return (
    <>
      <div className="forum_list_wrap">
        <div className="forum_search_select">
          <SearchBar />
          <SelectBar />
        </div>
        <div className="forum_list_button_wrap">
          <ButtonBar />
          <ButtonBar />
          <ButtonBar />
          <ButtonBar />
          <ButtonBar />
          <ButtonBar />
          <ButtonBar />
        </div>
        <ForumListBar />
        <ForumListBar />
        <ForumListBar />
        <ForumListBar />
        <ForumListBar />
        <ForumListBar />
      </div>
    </>
  );
}

export default ForumList;
