import { firestore } from "firebase";

// export const getContacts = uid => {
//   return (dispatch, getState, { getFirestore }) => {
//     // console.log("userid", uid);
//     const firestore = getFirestore();
//     let contacts = [];
//     let details = [];
//     firestore
//       .collection("/users")
//       .get()
//       .then(snapshot => {
//         snapshot.docs.forEach(doc => {
//           var id = doc.id;

//           if (id === uid) {
//           } else {
//             contacts.push(id);
//             // console.log(doc.data().firstName);
//             let name = doc.data().firstName;
//             var friendDetails = {
//               id: id,
//               name: name
//             };
//             details.push(friendDetails);
//           }
//         });
//         dispatch({type:"STORE_CONTACTS",details})
//       })
//       .then(() => {
//         firestore
//           .collection("/users")
//           .doc(uid)
//           .update({
//             contacts: contacts
//           });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };
export const selectedContacts = contact => {
  return (dispatch, getState) => {
    console.log("contacts to be stored", contact);
    dispatch({ type: "STORE_CONTACT", contact });
  };
};
export const sendMessage = (sender, text) => {
  return async (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log(
      "reciever",
      getState().chat.contact.id,
      "sender",
      sender,
      "text",
      text
    );
    const uid = getState().firebase.auth.uid;
    const reciever = getState().chat.contact.id;
    //storing for both
    const firebase = getFirebase();
    const firestore = getFirestore();

    let convId;
    if (uid < reciever) {
      convId = uid + reciever;
    } else {
      convId = reciever + uid;
    }
    let ref = firestore
      .collection("conversations")
      .doc(convId)
      .collection("messages")
      .doc(uid);
    firestore
      .collection("conversations")
      .doc(convId)
      .collection("messages")
      .doc(uid)
      .get()
      .then(doc => {
        if (!doc.exists) {
          ref.set(
            {
              texts: [
                {
                  sender: uid,
                  reciever: reciever,
                  sentAt: new Date(),
                  msg: text
                }
              ]
            },
            { merge: true }
          );
        } else {
          ref.update({
            texts: firestore.FieldValue.arrayUnion({
              sender: uid,
              reciever: reciever,
              sentAt: new Date(),
              msg: text
            })
          });
        }
      });

    let ref1 = firestore
      .collection("conversations")
      .doc(convId)
      .collection("messages")
      .doc(reciever);
    firestore
      .collection("conversations")
      .doc(convId)
      .collection("messages")
      .doc(reciever)
      .get()
      .then(doc => {
        if (!doc.exists) {
          ref1.set(
            {
              texts: [
                {
                  sender: uid,
                  reciever: reciever,
                  sentAt: new Date(),
                  msg: text
                }
              ]
            },
            { merge: true }
          );
        } else {
          ref1.update({
            texts: firestore.FieldValue.arrayUnion({
              sender: uid,
              reciever: reciever,
              sentAt: new Date(),
              msg: text
            })
          });
        }
      });
  };
};
