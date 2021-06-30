/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import {
  FiInfo,
  FiBarChart,
  FiDownload,
  FiUpload
} from 'react-icons/fi'

import { Container, ItemName } from './styles';

type IITemProps = {
  to:string;
  icon: IconOptions;
  label: string;
}

type IconOptions = 'FiInfo' | 'FiBarChart' | 'FiDownload' | 'FiUpload';

export const Item: React.FC<IITemProps> = ({
  to,
  icon,
  label
}) => {
  
  const loadMenuIcon = () => {
    switch (icon) {
      case 'FiBarChart':
        return (<FiBarChart />)
      case 'FiInfo':
        return (<FiInfo />)
      case 'FiDownload':
        return (<FiDownload />)
      case 'FiUpload':
        return (<FiUpload />)
      default:
        break;
    }
  }

  return (
    <Container>
      {loadMenuIcon()}
      <Link href={to}>
        <ItemName>{label}</ItemName>
      </Link>
    </Container>
  );
}


