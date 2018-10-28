// @flow
import React from 'react';
import './styles.less';

type Props = {
  title: string
};

const HeaderTitle = ({ title }: Props) => <h2 className="header-title">{title}</h2>;

export default HeaderTitle;
