import style from "../list/list.module.scss";
import Item from "./item";
import { tarefaProps } from "../../interfaces";

interface selectProps{
    tarefas:tarefaProps[]
    selecionaTarefa:(tarefaSelecionada:tarefaProps)=> void
}

export default function List({tarefas, selecionaTarefa}:selectProps){

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>

            <ul>
                {tarefas.map((item)=>(
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}

            </ul>
        </aside>
    );
}