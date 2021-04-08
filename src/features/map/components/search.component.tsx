import React, { useContext, useEffect, useState } from "react";
import { View } from 'react-native'
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position : absolute;
  top : 30px;
  width : 100%;
  z-index : 2020;

`;

type locationProp = {
    isLoading: boolean,
    error: string,
    location: string,
    search: Function,
    keyword: string,
}
export const Search = () => {
    const { search, keyword } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])
    return (
        <SearchContainer>
            <Searchbar
                icon='map'
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />
        </SearchContainer>
    );
};