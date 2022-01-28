export class BaseTestesTreeMap{

    static base = {
        "nome": "Voos",
        "filhos": [
        {
            "nome": "Voo 1",
            "filhos": [
            {
                "nome": "Passageiros",
                "filhos": [
                {"nome": "Passageiro 1", "importancia": 3938},
                {"nome": "Passageiro 2", "importancia": 3000}
                ]
            }
            ]
        },
        {
            "nome": "Voo 2",
            "filhos": [
            {
                "nome": "Passageiros",
                "filhos": [
                {"nome": "Passageiro 4", "importancia": 3500},
                {"nome": "Passageiro 5", "importancia": 500}
                ]
            }
            ]
        }
        ]
    };
}