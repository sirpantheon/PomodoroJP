import style from './relogio.module.scss';

interface Props{
    tempo:number|undefined
}

export default function Relogio({tempo = 0}:Props){

    const minutos = Math.floor(tempo/60);
    const segundos = tempo% 60;
    const [minutoDezana,minutosUnidade] = String(minutos).padStart(2,'0');
    const [segundoDezana,segundoUnidade] = String(segundos).padStart(2, '0');

    return(
        <div className={style.relogioNumero}>
            <span className={style.relogioindividual}>{minutoDezana}</span>
            <span className={style.relogioindividual}>{minutosUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioindividual}>{segundoDezana}</span>
            <span className={style.relogioindividual}>{segundoUnidade}</span>           
        </div>
    );
}