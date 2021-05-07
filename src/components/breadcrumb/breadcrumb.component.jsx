import React from 'react';
import { withRouter } from 'react-router-dom';

import { BreadcrumbComponentContainer, BreadcrumbSelectedItem, BreadcrumbItem, BreadcrumbSeparator } from './breadcrumb.styles';

const BreadcrumbComponent = ({ location, currentLicationName }) => {

  const getBreadCrumbsSections = () => {
    const pathArray = location.pathname.split('/');
    const breadcrumbsSections = pathArray.map((elem, index) => {
      if(elem === '') {
        return {key: `home-${index}`, content: 'Home', href: '/'};
      }

      let key = `${elem}-${index}`;
      let content = `${elem[0].toUpperCase()}${elem.slice(1)}`;
      let href = `${pathArray.slice(0, index + 1).join('/')}`;

      return {key, content, href};
    })

    return breadcrumbsSections;
  }


  const breadcrumbsSections = getBreadCrumbsSections();

  return (<BreadcrumbComponentContainer>
    {breadcrumbsSections.map(({ key, content, href }, index) => {
      if(index === breadcrumbsSections.length - 1) {
        return <BreadcrumbSelectedItem key={key}>{currentLicationName ? currentLicationName : content}</BreadcrumbSelectedItem>;
      }

      return (<React.Fragment key={key}>
        <BreadcrumbItem to={href} >{content}</BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
      </React.Fragment>);
    })}
  </BreadcrumbComponentContainer>);
};

export default withRouter(BreadcrumbComponent);