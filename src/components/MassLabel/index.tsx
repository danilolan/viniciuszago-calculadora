type Props = {
  value?: string,
  unit?: string,
  setValue?: (e: string) => void,
  disabled?: boolean
}

export default function Masslabel({
    value, unit, setValue, disabled
} : Props) {

    return (
        <div className="flex flex-col items-center justify-center mx-auto">
          {
            !!setValue ?
            <input type="number" disabled={disabled} className={`p-0 disabled:bg-transparent w-full text-center text-6xl font-bold ${value === "0" && 'text-gray-100 '}`} value={value} onChange={(e) => setValue(e.target.value)}/>
            :
            <p className={`text-6xl font-bold ${value === "0" && 'text-gray-100 '}`}>
              {value}
            </p>
          }
          <p className="text-2xl text-gray-100 font-medium">
            {unit || "gramas"}
          </p>
        </div>
    )
}