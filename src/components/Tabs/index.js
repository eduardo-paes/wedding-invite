import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabConvidados from '../TabConvidados';
import TabPresentes from '../TabPresentes';

export default function CustomTabs() {
  const [key, setKey] = useState('convidados');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="convidados" title="Convidados">
        <TabConvidados />
      </Tab>
      <Tab eventKey="presentes" title="Presentes">
        <TabPresentes />
      </Tab>
    </Tabs>
  );
}