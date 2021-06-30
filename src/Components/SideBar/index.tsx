/* eslint-disable @next/next/link-passhref */
import React, {useState} from 'react';

import {Item} from './Item/index'
import {Container, PageSpacer} from './styles';

export const SideBar: React.FC = ({children}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleOnMouseOver = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
    <Container onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOver}>
      <Item to="/dashboard" icon="FiBarChart" label="Dashboard"/>
      <Item to="/income" icon="FiUpload" label="Income"/>
      <Item to="/outcome" icon="FiDownload" label="Outcome"/>
    </Container>
    <PageSpacer isExpanded={isExpanded}>
      {children}
    </PageSpacer>
    </>
  );
}

