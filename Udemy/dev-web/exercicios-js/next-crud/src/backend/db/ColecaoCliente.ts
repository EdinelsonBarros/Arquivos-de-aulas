import firebase from "../confing"
import Cliente from "../../core/Cliente";
import ClienteRpositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRpositorio {

    #consversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docref = await this.colecao().add(cliente)
            const doc = await docref.get()
            return doc.data()
        }
    }
    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }
    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
        .firestore().collection('clientes')
        .withConverter(this.#consversor)
    }
}