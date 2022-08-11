import necktieImg from '../images/necktie.png';
import trumpetImg from '../images/trumpet.png';
import umbrellaImg from '../images/umbrella.png';
import luffyImg from '../images/luffy.png';
import onepieceImg from '../images/onepiece.png';
import namiImg from '../images/nami.png';
import merryImg from '../images/merry.png';
import bootImg from '../images/boot.png';
import barneyImg from '../images/barney.png';
import zoroImg from '../images/zoro.png';

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
    {name: 'nami', icon: namiImg},
    {name: 'merry', icon: merryImg},
    {name: 'boot', icon: bootImg},
    {name: 'barney', icon: barneyImg},
    {name: 'zoro', icon: zoroImg}
];