import Table from "../components/table"

export default function Requests() {
    return (
        <>
        <div className="flex flex-col p-8 bg-[#ffffff] w-full gap-4 rounded-2xl">
            <h1 className="text-4xl font-semibold text-[#000000]">Solicitações</h1>
            <h2 className="text-xl font-semibold text-[#848484]">As solicitações de membros e verificadores aparecerão nesta aba.</h2>
            <Table />
        </div>
        </>
    )
}