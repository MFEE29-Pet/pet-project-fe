import SearchBar from './components/SearchBar';
import ButtonBar from './components/ButtonBar';
import ForumDetailTitle from './components/ForumDetailTitle';
import ForumDetailBar from './components/ForumDetailBar';
import ForumMessage from './components/ForumMessage';
function ForumDetail() {
  return (
    <>
      <SearchBar />
      <ButtonBar />
      <ForumDetailTitle />
      <ForumDetailBar />
      <ForumMessage />
    </>
  );
}

export default ForumDetail;
