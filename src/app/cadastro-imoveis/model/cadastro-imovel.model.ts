export class CadastroImovelModel {
    id: number;
    nome: string;
    tipo: string;
    valor: number;
    condominio: number;
    quartos: number;
    banheiros: number;
    mobiliado: boolean;
    area: number;
    venda: boolean;
    aluguel: boolean;
    dataAnuncio: Date;
    proprietarioId: number;
}