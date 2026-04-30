import { MapPin, ArrowUpRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const districts = [
  { name: "Пресненский", metro: "Деловой центр", price: "от 18 млн ₽", trend: "+4.2%", color: "bg-violet-600" },
  { name: "Хамовники", metro: "Фрунзенская", price: "от 22 млн ₽", trend: "+3.8%", color: "bg-indigo-600" },
  { name: "Раменки", metro: "Мичуринский пр.", price: "от 12 млн ₽", trend: "+5.1%", color: "bg-teal-600" },
  { name: "Митино", metro: "Митино", price: "от 7 млн ₽", trend: "+6.3%", color: "bg-amber-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <MapPin className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Экспертные гиды по районам</h3>
      <p className="mb-4 text-sm text-gray-400">Аналитика цен, инфраструктура, прогнозы роста — чтобы вы выбирали осознанно</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Смотреть все районы <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {districts.map((district, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <div className={`h-9 w-9 flex items-center justify-center rounded-lg ${district.color}`}>
                <Icon name="MapPin" className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{district.name}</p>
                <p className="text-xs text-gray-500">м. {district.metro}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-white">{district.price}</p>
              <p className="text-xs text-green-400">{district.trend} за год</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
