import React from "react";
import style from "../button/button.module.scss";
import {buttonProps} from '../../interfaces';

export default function Botao(buttonProps:buttonProps){
        return(
            <button className={style.botao} type={buttonProps.type} onClick={buttonProps.onClick}>
                {buttonProps.texto}
            </button>
        );
    }