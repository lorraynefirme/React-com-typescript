import IProfissinal from "./IProfissional";

export default interface IConsulta extends IProfissinal{
    id: number,
    data: string,
    horario: string,
    profissional: IProfissinal[],
    especialidade: string,
    paciente: string,
    modalidade: string
}