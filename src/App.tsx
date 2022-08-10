import { useState, useEffect } from 'react';
import * as C from './App.styles';
import RestartImg from './images/restart.svg';
import LogoImg from './images/logo.png';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItem } from './components/GridItem';
import { cards } from './data/cards';
import { GridItemTypes } from './types/GridItemType';
import { FormatTimeGame } from './helpers/FormatTimeGame';



const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [endGame, setEndGame] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);  
  const [move, setMove] = useState<number>(0);
  const [countShown, setCountShown] = useState<number>(0);    
  const [gridItem, setGridItem] = useState<GridItemTypes[]>([]);

  useEffect(()=> resetAndCreateGrid(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if(playing) {
        setTime(time + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [time, playing]);

  useEffect(() => {
    if(countShown === 2) {      
      let opened = gridItem.filter(item => item.shown);
      if(opened.length === 2) {
        if(opened[0].item === opened[1].item) {
          let gridClone = [...gridItem];          
          for(let i in gridClone) {
            if(gridClone[i].shown) {
              gridClone[i].permanentShown = true;
              gridClone[i].shown = false;
            }            
          }
          setCountShown(0);
          setGridItem(gridClone);
        } else {
          setTimeout(() => {
            let gridClone = [...gridItem];          
            for(let i in gridClone) {            
              gridClone[i].shown = false;
            }
            setCountShown(0);
            setGridItem(gridClone);
          }, 1500);          
        }
      }

      setMove(move => move + 1);
    }
  }, [gridItem, countShown]);

  useEffect(() => {
    let opened = gridItem.filter(item => item.permanentShown);
    if(move > 0 && opened.length === gridItem.length) {
      setPlaying(false);
      setEndGame(true);
    }
  }, [gridItem, move]);

  const resetAndCreateGrid = () => {
    // 1 - reset game
    setTime(0);
    setMove(0); 
    setCountShown(0); 
    setEndGame(false);   

    // 2 - create gridItem emply
    let gridClone: GridItemTypes[] = [];
    for(let i = 0; i < (cards.length * 2); i++) {
      gridClone.push({shown: false, permanentShown: false, item: null });
    }

    // 2.1 - fill gridItem.item
    for(let i = 0; i < 2; i++) {      
      for(let i = 0; i < cards.length; i++) {
        let pos = -1;
        while(pos < 0 || gridClone[pos].item !== null) {
          pos = Math.floor(Math.random() * (cards.length * 2));
        }
        gridClone[pos].item = i;
      }      
    }

    // 2.2 
    setGridItem(gridClone);

    // 3 - start game
    setPlaying(true);
  }

  const handleClickItem = (index: number) => {
    if(playing && index !== null && countShown < 2) {
      let gridClone = [...gridItem];
      if(!gridClone[index].shown && !gridClone[index].permanentShown && countShown < 2) {
        gridClone[index].shown = true;
        setCountShown(countShown + 1);
      }     

      setGridItem(gridClone);
    }
  }

  return (
    <C.Container>
      {!endGame &&
        <>
          <C.Left>
            <C.Logo>
              <C.LogoText>LadayMemory</C.LogoText>
              <C.LogoImg src={LogoImg} />
            </C.Logo>
            <C.GameInfo>
              <InfoItem content="Tempo" value={FormatTimeGame(time)} />
              <InfoItem content="Movimentos" value={`${move}`} />
            </C.GameInfo>
            <Button content="Reiniciar" icon={RestartImg} onClick={resetAndCreateGrid} />
          </C.Left>

          <C.Right>
            <C.GridContainer>
              {gridItem.map((item, index) => (
                <GridItem key={index} item={item} onClick={() => handleClickItem(index)} />
              ))}
            </C.GridContainer>
          </C.Right>
        </>
      }      
      {endGame &&
        <C.EndGame>
          <InfoItem content="Parabéns" value="Você venceu!!!" />
          <Button content="Reiniciar" icon={RestartImg} onClick={resetAndCreateGrid} />
        </C.EndGame>
      }      
    </C.Container>
  );
}

export default App;