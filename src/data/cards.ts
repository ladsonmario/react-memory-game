import necktieImg from '../images/necktie.png';
import trumpetImg from '../images/trumpet.png';
import umbrellaImg from '../images/umbrella.png';
import luffyImg from '../images/luffy.png';
import onepieceImg from '../images/onepiece.png';
import namiImg from '../images/nami.png';

type CardsType = {
    name: string;
    icon: any;
}

export const cards: CardsType[] = [
    {name: 'necktie', icon: necktieImg},
    {name: 'trumpet', icon: trumpetImg},
    {name: 'umbrella', icon: umbrellaImg},
    {name: 'luffy', icon: luffyImg},
    {name: 'onepiece', icon: onepieceImg},
    {name: 'nami', icon: namiImg}
];