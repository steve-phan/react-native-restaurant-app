import React from 'react'
import { View } from 'react-native';
import styled, { useTheme } from 'styled-components/native'


const sizeVariant: any = {
    small: 1,
    medium: 2,
    large: 3,
}


const positionVariant: any = {
    top: "marginTop",
    bottom: "marginBottom",
    right: "marginRight",
    left: "marginLeft",

}
const getVariant = (position: string, size: string, theme: any): any => {
    const property: string = positionVariant[position];
    const sizeindex: number = sizeVariant[size];
    const value = theme.space[sizeindex]
    return `${property}: ${value} `

}
interface spacerProps {
    position: string,
    size: string,
    children: any,
}

const SpacerView = styled(View) <any>`
    ${({ variant }) => variant}

`;

export const Spacer = ({ position, size, children }: spacerProps) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme)
    return <SpacerView variant={variant}>{children}</SpacerView>


}


Spacer.defaultProps = {
    position: "top",
    size: "small",
}