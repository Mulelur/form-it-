/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
import React from 'react';
import { LineText } from '../components';
import { HTMLElement } from '../Interface/project.interface';

type Props = {
  parentStyles?: React.CSSProperties;
  htmlElements?: HTMLElement[];
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export function LineTextContainer(props: Props) {
  const { onClick, parentStyles, htmlElements } = props;
  return (
    <LineText onClick={onClick} style={parentStyles}>
      <LineText.TextWrapper>
        {htmlElements?.map((item) => {
          return (
            <LineText.Text key={item.id} style={item.styles}>
              {item.value}
            </LineText.Text>
          );
        })}
      </LineText.TextWrapper>
    </LineText>
  );
}
