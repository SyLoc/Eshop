import styled from 'styled-components';

const TriangleBox = styled.div`
  display: flex;
  flex-direction: column;
  span {
    width: 0;
    height: 0;
    border-top: ${(props) =>
      props.height ? `calc(${props.height}/22) solid transparent` : '167px'};
    border-bottom: ${(props) =>
      props.height ? `calc(${props.height}/22) solid transparent` : '167px'};
    border-right: 10px solid ${(props) => props.bgColor};
    transform: ${(props) => (props.direction === 'true' ? 'rotateY(180deg)' : '')};
  }
`;
export default TriangleBox;
