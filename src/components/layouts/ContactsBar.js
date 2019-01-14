import React from "react";
import { connect } from "react-redux";
import { selectedContacts } from "../../store/actions/chatActions";

const ContactsBar = props => {
  const { contacts } = props;
  // console.log("contacts", contacts);
  // console.log(
  //   contacts &&
  //     contacts.map(el => {
  //       {
  //        return el["firstName"];
  //       }
  //     })
  // );
  if (contacts) {
    return (
      <div className="card z-depth-0 left">
        <span className="card-title">contacts</span>
        <ul className="collection">
          {contacts &&
            contacts.map(el => {
              return (
                <p key={el["id"]}>
                  <label>
                    <input
                      name="group1"
                      type="radio"
                      onChange={() => props.selectedContacts(el)}
                    />
                    <span>{el["firstName"]}</span>
                  </label>
                </p>
              );
            })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>loading project....</p>
      </div>
    );
  }
};
const mapDispatchToProps = dispatch => {
  return {
    selectedContacts: contacts => dispatch(selectedContacts(contacts))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ContactsBar);
