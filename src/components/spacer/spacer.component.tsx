import React from 'react'
import { View } from 'react-native';
import styled from 'styled-components/native'

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
}

const positionVariant = {
    top: "marginTop",
    bottom: "marginBottom",
    right: "marginRight",
    left: "marginLeft",

}
const getVariant = (position: string, size: string, theme: any): any => {

}
interface spacerProps {
    position: "top",
    size: "small",
    theme: any
}
export const Spacer = styled(View)`
    ${({ position, size, theme }: spacerProps) => getVariant(position, size, theme)}


`;



// Spacer.defaultProps = {
//     position: "top",
//     size: "small",
// }