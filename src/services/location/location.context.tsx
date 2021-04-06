import React, { useState, useEffect } from 'react';

import { locationRequest, locationTransform } from './location.service';

type locationProp = {
  isLoading: boolean,
  error: string,
  location: string,
  search: Function,
  keyword: string,
}

export const LocationContext: any = React.createContext<Partial<locationProp>>({});

export const LocationContextProvider: React.FC = ({ children }: any) => {
  const [keyword, setKeyword] = useState('San Francisco');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword: string) => {
    console.log(searchKeyword)
    setIsLoading(true);
    setKeyword(searchKeyword);

  };
  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result: any) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err: any) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword])

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}</LocationContext.Provider>
  );
};
