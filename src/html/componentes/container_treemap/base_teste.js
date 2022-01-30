export class BaseTestesTreeMap{

    static base = {
        "descricao": "Conjunto de telas salvas",
        "telas": [
        {   "id": 1,
            "descricao": "Contatos de A a J",            
            "componentes": [
                {
                    "descricao": "Componente 1",
                    "url": "/componentes/contatos/contatos_view.js",
                    "nome": "contatos-view",
                    "importancia": 10
                },
                { 
                    "descricao": "Componente 2",
                    "url": "/componentes/contatos/contato_view.js",
                    "nome": "contato-view",
                    "importancia": 8
                }
            ]            
        },
        {
            "id": 2,
            "descricao": "Todos os contatos",
            "componentes": [            
                {
                    "descricao": "Componente 4",
                    "url": "/componentes/contatos/contatos_view.js",
                    "nome": "contatos-view",
                    "importancia": 6
                },
                {
                    "descricao": "Componente 5",
                    "url": "/componentes/contatos/contato_view.js",
                    "nome": "contato-view",
                    "importancia": 4
                },
                {
                    "descricao": "Componente 6",
                    "url": "/componentes/contatos/contato_view.js",
                    "nome": "contato-view",
                    "importancia": 8
                },            
            ]
        }
        ]
    };
}