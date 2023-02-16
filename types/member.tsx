import { Dispatch, Key, SetStateAction } from "react";

export interface memberProps {
    nickName : string,
    level: number,
    isHead: boolean,
}
export interface applyMemberProps {
    key: Key,
    nickName : string,
    level: number,
    elapsedHour: number,
    intro: string,
    q1: string,
    q2: string,
    getMsgBoxValue: Dispatch<SetStateAction<number>>,
}