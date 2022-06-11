import Botao from "../button";
import Relogio from "./relogio";
import style from './cronometro.module.scss';
import tempoParaSegundos from "../../common/utils/time";
import { tarefaProps } from "../../interfaces";
import { useEffect, useState } from "react";

interface Props{
    selecionado:tarefaProps | undefined
    finalizandoTarefa:()=> void
}

export default function Cronometro({selecionado,finalizandoTarefa}:Props){

    const[tempo,setTempo] = useState<number>();

    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    },[selecionado]);

    function regressiva(contador:number = 0){
        setTimeout(()=>{
            if(contador>0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }else{
                finalizandoTarefa();
            }
        }, 1000);
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card para iniciar</p>
            Tempo Em Segundos:{tempo}
            <div>
                <Relogio tempo={tempo}/>
            </div>
            <Botao 
                texto={"Começar"}
                onClick={()=> regressiva(tempo) }
            />
        </div>
    );
}