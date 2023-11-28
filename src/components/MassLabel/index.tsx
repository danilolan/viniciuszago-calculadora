type Props = {
    value: number,
    unit?: string
}

export default function Masslabel({
    value, unit
} : Props) {

    return (
        <div className="flex flex-col w-full items-center justify-center mt-2">
          <p className={`text-6xl font-bold ${value === 0 && 'text-gray-100 '}`}>
            {value}
          </p>
          <p className="text-2xl text-gray-100 font-medium">
            {unit || "gramas"}
          </p>
        </div>
    )
}