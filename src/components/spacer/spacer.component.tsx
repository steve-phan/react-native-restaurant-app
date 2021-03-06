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
//Suggestions props for exported component :) cool
interface spacerProps {
    position: string,
    size: string,
    children: any,
    variant?: string

}
interface SapacerViewProps {
    variant: string
}

const SpacerView = styled(View) <SapacerViewProps>`
    ${({ variant }) => variant}

`;

export const Spacer = ({ position, size, children }: spacerProps) => {
    const theme = useTheme();
    const variant: string = getVariant(position, size, theme)
    return <SpacerView variant={variant}>{children}</SpacerView>


}


Spacer.defaultProps = {
    position: "top",
    size: "small",
}