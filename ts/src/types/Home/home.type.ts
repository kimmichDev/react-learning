import React from "react";

export type propType = {
    style:React.CSSProperties;
    handleProp: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: string;
}

