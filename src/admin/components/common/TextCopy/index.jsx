import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextCusTom, BoxContent, CodeTitle } from './styled';
import { ReactComponent as Text } from '../../../images/svg/text.svg';

const TextCopy = ({ content, bgColor, ...rest }) => (
  <BoxContent bgColor={bgColor} {...rest}>
    <CodeTitle>
      <p>Mã ĐH</p>
    </CodeTitle>
    <TextCusTom
      {...rest}
      bgColor={bgColor}
      copyable={{
        icon: <Text />,
        tooltip: 'click to copy text',
      }}
    >
      {content}
    </TextCusTom>
  </BoxContent>
);
TextCopy.propTypes = {
  content: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  marginTop: PropTypes.string,
  marginBot: PropTypes.string,
  bgColor: PropTypes.string,
};
export default TextCopy;
