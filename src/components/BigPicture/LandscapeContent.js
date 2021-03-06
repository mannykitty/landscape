import React from 'react';
import { pure } from 'recompose';
import _ from 'lodash';

import {HorizontalCategory, VerticalCategory } from './Elements';
import LandscapeInfo from './LandscapeInfo';
import OtherLandscapeLink from './OtherLandscapeLink';

const LandscapeContent = ({groupedItems, onSelectItem, style, showPreview, switchToOther, zoom, landscapeSettings }) => {
  const elements = landscapeSettings.elements.map(function(element) {
    if (element.type === 'HorizontalCategory') {
      const cat = _.find(groupedItems, {key: element.category});
      return <HorizontalCategory {...cat} {..._.pick(element, ['rows','width','height','top','left','color']) }
        fitWidth={element.fit_width}
        zoom={zoom}
        onSelectItem={onSelectItem}
      />
    }
    if (element.type === 'VerticalCategory') {
      const cat = _.find(groupedItems, {key: element.category});
      return <VerticalCategory {...cat} {..._.pick(element, ['cols','width','height','top','left','color']) }
        zoom={zoom}
        onSelectItem={onSelectItem}
      />
    }
    if (element.type === 'OtherLandscapeLink') {
      return <OtherLandscapeLink {..._.pick(element, ['width','height','top','left','color', 'layout', 'title', 'url']) }
        zoom={zoom}
        showPreview={showPreview}
        onClick={switchToOther}
      />
    }
    if (element.type === 'LandscapeInfo') {
      return <LandscapeInfo {..._.pick(element, ['width', 'height', 'top', 'left']) } childrenInfo={element.children}
        zoom={zoom}
      />
    }
    return null;
  });
  return (<div style={{...style, position: 'relative', ...landscapeSettings.size }}>
    {elements}
  </div>);
};

export default pure(LandscapeContent);
