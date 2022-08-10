import * as C from './styles';

type Props = {
    content: string;
    value: string;
}
export const InfoItem = ({ content, value }: Props) => {
    return (
        <C.Container>
            <C.Content>{content}</C.Content> 
            <C.Value>{value}</C.Value>
        </C.Container>
    );
}