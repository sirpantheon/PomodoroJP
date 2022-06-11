export interface tarefaProps{
    tarefa:string
    tempo:string
    selecionado:boolean
    completado:boolean
    id:string
}
export interface buttonProps{
    type?:'button' | 'submit' | 'reset' | undefined
    texto:string
    onClick?:()=>void
}

