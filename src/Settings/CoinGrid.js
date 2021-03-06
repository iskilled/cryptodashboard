import React from 'react';
import styled from 'styled-components';

import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  grid-gap: 15px;
  margin-top: 30px;
`;

const getLowerSectionCoins = (coinList, filteredCoins) => {
  return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0, 100);
};

const getCoinsToDisplay = (coinList, topSection, favorites, filteredCoins) => {
  return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins);
};

export default function({topSection}) {
  return (
    <AppContext.Consumer>
      {({coinList, favorites, filteredCoins}) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey => {
            return (
              <CoinTile
                topSection={topSection}
                coinKey={coinKey}
                key={`coinTile-${coinKey}`}
              />
            );
          })}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
