import { GridItemTypes } from '../../types/GridItemType';
import { cards } from '../../data/cards';
import cardBackImg from '../../images/cardBack.png';
import * as C from './styles';

type Props = {
    item: GridItemTypes;
    onClick: () => void;
}
export const GridItem = ({ item, onClick }: Props) => {
    return (
        <C.GridItem shown={item.shown || item.permanentShown} flip={item.shown || item.permanentShown} onClick={onClick}>
            {(item.shown || item.permanentShown) && item.item !== null &&
                <C.GridIcon src={cards[item.item].icon} alt="" />    
            }     
            {!item.shown && !item.permanentShown &&         
                <C.GridIcon src={cardBackImg} alt="" opacity={.9} />    
            }       
        </C.GridItem>
    );
}