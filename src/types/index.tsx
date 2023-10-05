import { type } from "os";
import { ChangeEvent, FocusEventHandler, MouseEventHandler } from "react";

export type LabelInput = {
    id: number
    label: string,
    name: string,
    placeholder: string,
    value: string,
    type: string,
    errorMessage?: string
    focused?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
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

export type loginValuesProps = {
  email: string,
  password: string
}

export type registerValuesProps = {
    firstName: string,
    lastName: string,
    companyName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type inputProps = {
    id: number;
    label: string;
    name: string;
    type: string;
    placeholder: string;
    errorMessage: string;
    required: boolean;
}