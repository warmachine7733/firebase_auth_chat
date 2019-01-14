// import React from "react";
// import "./chat.css";

// const Chatui = props => {
//   console.log(props);
//   const { sender, reciever, messages } = props;
//   //   let sentMessages =
//   //     messages && messages.filter(msgs => msgs["sender"] === sender);
//   //   let recievedMessages =
//   //     messages && messages.filter(msgs => msgs["reciever"] === sender);
//   return (
//     // <div classNameName="container">
//     /* <ul>
//         {sentMessages &&
//           sentMessages.map(msg => {
//             return <li key={msg["id"]}>{msg["text"]}</li>;
//           })}
//       </ul>
//       <h3>recievedMessages</h3>
//       <ul>
//         {recievedMessages &&
//           recievedMessages.map(msg => {
//             return <li key={msg["id"]}>{msg["text"]}</li>;
//           })}
//       </ul> */
//     <div className="dashboard container">
//       <div className="row">
//         <div className="col s12">
//           {messages &&
//             messages.map(msg => {
//               if (msg["sender"] === sender) {
//                 return (
//                   <div key={msg["id"]} className="bubble bubble-alt green">
//                     <p>{msg["text"]}</p>
//                   </div>
//                 );
//               } else {
//                 return (
//                   <div key={msg["id"]} className="bubble">
//                     <p>{msg["text"]}</p>
//                   </div>
//                 );
//               }
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatui;
