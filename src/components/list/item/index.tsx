import style from './item.module.scss';
import {tarefaProps} from '../../../interfaces';

interface Props extends tarefaProps{
    selecionaTarefa:(tarefaSelecionada:tarefaProps) => void;
}

export default function Item({tarefa,id,selecionado,completado,tempo, selecionaTarefa}:Props){
    return(
        <li 
            className={`
                ${style.item} 
                ${selecionado ? style.itemSelecionado : '' }
                ${completado? style.itemCompletado : ''}
            `} 
            onClick={()=> !completado && selecionaTarefa({
                tarefa,
                id,
                selecionado,
                completado,
                tempo
            })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
           
        </li>
    );
}