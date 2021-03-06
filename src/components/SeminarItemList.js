import React from 'react';
import styled from 'styled-components';
import {navigate} from 'gatsby';
import SeminarItem from './SeminarItem';
import useDimension from '../hooks/use-dimension';
import {ScrollBarCss} from './Widgets';

function SeminarItemList(props) {
  const {items, onItemClick} = props;
  const {dimension} = useDimension();
  const [showScrollBar, setShowScrollBar] = React.useState(false);
  const itemWidth = dimension?.innerWidth > 600 ? 300 : 210;

  return (
    <ListWrapper
      innerWidth={(items.length + 1) * itemWidth}
      showScrollBar={showScrollBar}
      onMouseEnter={() => setShowScrollBar(true)}
      onMouseLeave={() => setShowScrollBar(false)}>
      <div className="items-wrapper">
        {items.map((item, idx) => (
          <SeminarItem
            key={idx}
            item={item}
            width={itemWidth}
            onInfoClick={() => onItemClick(item)}
            onWatchClick={() => {
              navigate(`/player?conf=${item.id}`);
            }}
          />
        ))}
      </div>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  overflow: auto;
  width: 100%;

  & > .items-wrapper {
    padding: 20px 0px 36px 30px;
    width: ${(props) => props.innerWidth}px;
    display: flex;
    flex-wrap: nowrap;
  }

  ${ScrollBarCss}
`;

export default SeminarItemList;
