import React from 'react';

import { AppContext } from '../App/AppProvider';
import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
  return topSection ? 
    () => removeCoin(coinKey) :
    () => addCoin(coinKey);
};

export default ({coinKey, topSection}) => {
  return (
    <AppContext.Consumer>
      {({coinList, addCoin, removeCoin, isInFavorites, isFavoriteListMaxed}) => {
        let coin = coinList[coinKey];

        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletableTile;
        } else if (isInFavorites(coinKey) || isFavoriteListMaxed()){
          TileClass = DisabledTile;
        }

        return (
          <TileClass onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)} >
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} topSection={topSection} />
            <CoinImage coin={coin} symbol={coin.Symbol} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
};
