import React from 'react';
import styled from 'styled-components';
//import '../css/Contacts.css';

import ContactListItem from './ContactListItem';

const Blue = styled.div`background: blue; height: 500px;`

class ContactList extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {};
  }


  render() {
    return (
      <div className="container-fluid">
        <input type="" />
      </div>
    );
  }
}

export default ContactList;
