import React from "react";
import { View } from 'react-native'
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { TextCustom } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled(View)`
  position : relative;
  padding: 10px;
  max-width: 120px;
  align-items: center;
  z-index : 2030;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }: any) => {
  const Image: any = isAndroid ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <TextCustom variant="caption" numberOfLines={3}>
        {restaurant.name}
      </TextCustom>
    </Item>
  );
};