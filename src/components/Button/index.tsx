import * as C from './styles';

type Props = {
    content: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    icon?: any;
}

export const Button = ({ icon, content, onClick }: Props) => {
    return (
        <C.Button onClick={onClick}>
            {icon &&
                <C.ButtonIcon>
                    <C.ButtonImg src={icon} alt="" />
                </C.ButtonIcon>
            }            
            <C.ButtonContent>{content}</C.ButtonContent>
        </C.Button>
    );
}