import styled from 'styled-components';
import { Button } from './Button';
import { getHoverColor } from './styleUtils';

const FooterWrapper = styled.div`
  background: ${props => props.theme.colors.secondaryBg};
`;

const FooterTop = styled.div`
  line-height: 35px;
  border-bottom: 1px solid ${props => props.theme.colors.primaryBg};
  background: ${props => props.theme.colors.primaryBg};
`;

const Title = styled.div`
  text-align: center;
  text-transform: capitalize;
  color: ${props => props.theme.colors.text}
`;

const LeftActions = styled.div`
  text-align: center;
  width: 100px;
  padding: 5px 10px;
`;

const RightActions = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const ShareActions = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: ${props => props.theme.colors.secondaryBg}
`;

const CancelBtn = styled(Button)`
  width: 100px;
  border-color: #fff;
  border-radius: 15px;
`;

const ApplyBtn = styled(Button)`
  width: 105px;
  border-radius: 15px;
`;

const CBtn = styled(Button)`
  background: ${props => props.theme.colors.primaryBg};
  border-color: ${props => props.theme.colors.primaryBg};
  color: ${props => props.theme.colors.text};
  text-transform: capitalize;
  
  :hover {
    background: ${props => getHoverColor(props.theme.colors.primaryBg)};
    border-color: ${props => props.theme.colors.primaryBg};
    color: ${props => props.theme.colors.text};  
  }
`;

const DarkBtn = styled(CBtn)``;

export { FooterWrapper, FooterTop, Title, LeftActions, RightActions, ShareActions, ToolbarWrapper, CancelBtn, ApplyBtn,  DarkBtn };