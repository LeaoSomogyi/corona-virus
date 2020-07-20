export class TextMain {
    about: string;
    description: string;
    contact: string;
    twitter: string;
    linkedin: string;
    h1: string;
    main_description: string;
    doc: string;
    back: string;
    language: string;

    constructor() {
        this.about = 'Sobre';
        this.description = 'Apenas um site feito em Angular 9 e Bootstrap para mostrar a evolução da nova doença que assola o mundo. Além de praticar a linguagem, é uma maneira de manter a população informada e ciente da gravidade da situação.<br>Para maiores informações sobre o vírus, acesse o site da <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">OMS</a> ';
        this.contact = 'Contato';
        this.twitter = 'Siga-me no Twitter';
        this.linkedin = 'Adicione-me no LinkedIn';
        this.h1 = 'Estatísticas do novo COVID-19';
        this.main_description = 'Esse site tem como objetivo mostrar os dados da nova doença ao redor do globo. Todos os dados exibidos são disponibilizados pela <a href="https://thevirustracker.com/api" target="_blank">Virus Tracker API</a>';
        this.doc = 'Documentação para Desenvolvedores';
        this.back = 'Voltar ao início';
        this.language = 'br';
    }
}