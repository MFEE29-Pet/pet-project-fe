// import React, { PureComponent } from 'react';
// import EvaluateComponent from './EvaluateComponents/EvaluateComponent';
// import InputComponent from './InputComponents/InputComponent';
import './ForumReply.css';
// // import imgUrl from './images/person_jason.jpg';

// export class ForumReply extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       evaluateList: [
//         {
//           imgUrl: '/images/person_jason.jpg',
//           nickName: '傑森',
//           sendTime: '2022.12.10',
//           evaluate: '這篇實用文章 推推！',
//         },
//       ],
//     };
//   }
//   render() {
//     return (
//       <div className="forum_reply_card">
//         <p className="content">{this.state.message}</p>
//         <EvaluateComponent evaluateList={this.state.evaluateList} />
//         <InputComponent sendSubmit={(e) => this.sendSubmit(e)} />
//       </div>
//     );
//   }

//   sendSubmit(e) {
//     let data = {
//       // imgUrl: "",
//       nickName: '艾蜜莉',
//       sendTime: '2022.12.14',
//       evaluate: e,
//     };
//     this.setState({
//       evaluateList: [data, ...this.state.evaluateList],
//     });
//   }
// }

// export default ForumReply;
import React from 'react';
import ForumReplyOld from './ForumReplyOld';

function ForumReply({
  forumComment,
  reRenderForum,
  setReRenderForum,
  getDetails,
}) {
  return (
    <>
      <ForumReplyOld
        forumComment={forumComment}
        reRenderForum={reRenderForum}
        setReRenderForum={setReRenderForum}
        getDetails={getDetails}
      />
    </>
  );
}

export default ForumReply;
