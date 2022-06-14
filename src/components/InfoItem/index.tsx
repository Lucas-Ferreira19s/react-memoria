import * as C from "./style"

type Props = {
    label: string;
    value: string;
}

export const InfoItem = ({label, value}: Props) =>{
    return(
        <C.container>
            <C.label>{label}</C.label>
            <C.value>{value}</C.value>
        </C.container>
    )
}