import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider/Divider';
import { GridProps } from '@material-ui/core/Grid/Grid';
import isString from 'lodash/isString';
import * as React from 'react';
import styled, { css } from 'styled-components';


export interface MarginProps {
    m?: number;
    mb?: number;
    mt?: number;
    ml?: number;
    mr?: number;
}

export interface PaddingProps {
    p?: number;
    pb?: number;
    pt?: number;
    pl?: number;
    pr?: number;
}

export interface LayoutProps extends MarginProps, PaddingProps {

}

const geCssValue = value => !value ? '' : isString(value) ? value : `${value}rem`;

export const MarginCss = css`
  && {
    margin: ${({ m }: LayoutProps) => geCssValue(m)};
    margin-bottom: ${({ mb }: LayoutProps) => geCssValue(mb)};
    margin-top: ${({ mt }: LayoutProps) => geCssValue(mt)};
    margin-left: ${({ ml }: LayoutProps) => geCssValue(ml)};
    margin-right: ${({ mr }: LayoutProps) => geCssValue(mr)};
  }
`;

export const PaddingCss = css`
 && {
   padding-bottom: ${({ pb }: LayoutProps) => geCssValue(pb)};
   padding-top: ${({ pt }: LayoutProps) => geCssValue(pt)};
   padding-left: ${({ pl }: LayoutProps) => geCssValue(pl)};
   padding-right: ${({ pr }: LayoutProps) => geCssValue(pr)};
   padding: ${({ p }: LayoutProps) => geCssValue(p)};
  }
`;

export const ColorCss = css`   
    && {
      color: ${({ textcolor }: any) => {
    return 'red'
}
    };
    }
`;

type SpRowProps = GridProps & LayoutProps;

export const SpRow: any = styled(Grid).attrs(() => ({ container: true }))`
  ${PaddingCss}
  ${MarginCss}
`;


export const SpCol: any = styled(Grid).attrs(() => ({ item: true }))`
  ${PaddingCss}
  ${MarginCss}
`;

export const SpDivider: any = styled(Divider)`
  ${PaddingCss}
  ${MarginCss}
`;

export const SpContainer: any = styled.div`
  ${PaddingCss}
  ${MarginCss}
`;


export * from './media'
