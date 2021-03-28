import { Text } from 'react-native'

import styled from 'styled-components/native';

const defaultStyles = (theme: any) => `
    font-family : ${theme.fonts.body};
    font-weight : ${theme.fontWeights.regular};
    color : ${theme.colors.text.primary};
    flex-wrap : wrap ;
    margin-top : 0;
    margin-bottom : 0;
`;

const body = (theme: any) => `
    font-size : ${theme.fontSizes.body};
`
const hint = (theme: any) => `
    font-size : ${theme.fontSizes.body}
`;
const error = (theme: any) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: any) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: any) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants: any = {
    body,
    label,
    caption,
    error,
    hint,
};
//Suggestions props for exported component :) cool
interface textProps {
    variant: string
}

// CARE in ANDROID devide
export const TextCustom = styled(Text) <textProps>`
    ${({ theme }) => defaultStyles(theme)}
    ${({ variant, theme }) => variants[variant](theme)} // This LINE

`;
TextCustom.defaultProps = {
    variant: "body"
}