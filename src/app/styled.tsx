import Typography from '@material-ui/core/Typography';
import isString from 'lodash/isString';
import styled, { createGlobalStyle, css } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: any) => theme.global.home.page.bgColor};
  }
`;

export const ContentRoot = styled.div.attrs({ className: 'app-main' })`
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`;

const geCssValue = value => !value ? '' : isString(value) ? value : `${value}rem`;

export const MarginCss = css`
  && {
    margin: ${({ m }: any) => geCssValue(m)};
    margin-bottom: ${({ mb }: any) => geCssValue(mb)};
    margin-top: ${({ mt }: any) => geCssValue(mt)};
    margin-left: ${({ ml }: any) => geCssValue(ml)};
    margin-right: ${({ mr }: any) => geCssValue(mr)};
  }
`;

export const PaddingCss = css`
 && {
   padding-bottom: ${({ pb }: any) => geCssValue(pb)};
   padding-top: ${({ pt }: any) => geCssValue(pt)};
   padding-left: ${({ pl }: any) => geCssValue(pl)};
   padding-right: ${({ pr }: any) => geCssValue(pr)};
   padding: ${({ p }: any) => geCssValue(p)};
  }
`;

export const StyledText = styled(Typography)`
 &&{
   color : ${({ textcolor }: any) => textcolor && textcolor};
   font-size: ${({ size }: any) => size && size};
   font-weight: ${({ weight }: any) => weight && weight};
  }
`;

export const Margin = styled.div`
  ${MarginCss}
`;

export const Padding = styled.div`
  ${PaddingCss}
`;
