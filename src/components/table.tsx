export default function Table() {
    const mockData = [
        {id: 1, name: 'Heitor Morais da Silva', function: 'membro', status: 'esperando aprovacao'},
        {id: 2, name: 'Henrique', function: 'membro', status: 'esperando aprovacao'},
        {id: 3, name: 'Gabriel', function: 'verificador', status: 'email enviado'},
    ]
    return (
        <>
        <table>
            <thead className="[&_th]:border-b">
                <th className="text-left text-lg">Nome</th>
                <th className="text-left text-lg">Função</th>
                <th className="text-left text-lg">Status</th>
                <th className="text-left text-lg">Ação</th>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
                 {mockData.map(user => (
                <tr className="border-b" key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.function}</td>
                    <td>{user.status}</td>
                    <td>aceitar ou não</td>
                </tr>
            ))}
            </tbody>
           
           
        </table>
        </>
    )
}