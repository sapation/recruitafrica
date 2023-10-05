import { type } from "os";
import { ChangeEventHandler, FocusEventHandler, MouseEventHandler } from "react";

export type LabelInput = {
    id: number
    label: string,
    name: string,
    placeholder: string,
    value: string,
    type: string,
    errorMessage?: string
    focused?: string
    onChange: ChangeEventHandler<HTMLInputElement>,
    onFocus: boolean
}

export type ProcessCardProps = {
    iconUrl: string,
    firstTitle: string,
    secondTitle: string,
    desc: string
}

export type PrimaryButtonProps = {
    title: string,
    background: boolean
}