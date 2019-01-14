import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
// import { getContacts } from "../../store/actions/chatActions";
import ContactsBar from "../layouts/ContactsBar";
import MessageSend from "../layouts/MessageSend";
import Chatui from "../layouts/Chatui";

class Chatscreen extends Component {
  render() {
    const { auth, users, conversations, recieverId } = this.props;
    console.log("conv", conversations && conversations[0].messages[0].texts);
    if (!auth.uid) return <Redirect to="signin/" />;
    const contacts = users && users.filter(user => user["id"] !== auth.uid);

    // const modMessages =
    //   messages &&
    //   messages.filter(
    //     message =>
    //       (message["sender"] === auth.uid &&
    //         message["reciever"] == recieverId) ||
    //       (message["reciever"] === auth.uid && message["sender"] == recieverId)
    //   );
    // console.log("messages", modMessages, auth.uid, recieverId);
    return (
      <div>
        <ContactsBar contacts={contacts} />
        <MessageSend sender={auth.uid} />
        {/* <Chatui
          messages={modMessages}
          sender={auth.uid}
          reciever={recieverId}
        /> */}
      </div>
    );
  }

  componentDidMount() {}
}

const mapStateToProps = state => {
  console.log("in chat screen", state);
  const uid = state.firebase.auth.uid;
  let data = state.firestore.data.conv;
  let conversations =
    state.firestore.ordered.conversations &&
    state.firestore.ordered.conversations[0].messages[0].texts;
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
    // messages: state.firestore.ordered.messages,
    recieverId: state.chat.contact.id,
    conversations: state.firestore.ordered.conversations
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     getContacts: uid => dispatch(getContacts(uid))
//   };
// };

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    if (props.auth && props.recieverId && props.auth.uid) {
      // console.log("props.recieverId",props.recieverId)
      return [
        {
          collection: "conversations",
          doc:
            props.auth.uid < props.recieverId
              ? props.auth.uid + props.recieverId
              : props.recieverId + props.auth.uid,
          subcollections: [{ collection: "messages", doc: props.auth.uid }]
        }
      ];
    } else {
      return [{ collection: "users" }];
    }
  })
)(Chatscreen);
