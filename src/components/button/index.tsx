import * as C from "./style";

type Props ={
    label: string;
    Icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({label, Icon, onClick}: Props) => {
    return(
        <C.container onClick={onClick}>
            {Icon &&
                <C.IconArea>
                    <C.Icon src={Icon}/>
                </C.IconArea>
            }
            <C.label>{label}</C.label>
        </C.container>
    )
}