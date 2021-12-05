import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../../Form/label';
import { ReactComponent as BlackRight } from '../../../../images/svg/BlackRight.svg';
import { OrderFormMade, OrderFormMadeInner, OrderFormMadeContent } from './styled';

const FormOrder = ({ tittle, img, content, mainContent }) => (
  <OrderFormMade>
    <OrderFormMadeInner>
      <h1>{tittle}</h1>
      <OrderFormMadeContent>
        <Label width="245px" height="28px" content={content} img={img} />
        <p>{mainContent}</p>
      </OrderFormMadeContent>
    </OrderFormMadeInner>
    <BlackRight />
  </OrderFormMade>
);
FormOrder.propTypes = {
  tittle: PropTypes.string,
  img: PropTypes.string,
  content: PropTypes.string,
  mainContent: PropTypes.string,
};
export default FormOrder;
