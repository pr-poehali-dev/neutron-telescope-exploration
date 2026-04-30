import { Shield, ArrowUpRight, CheckCircle, Info } from "lucide-react"

const conditions = [
  { label: "Цена продавца", value: "8 500 000 ₽", note: "Без наценок и комиссий агентства" },
  { label: "Юридическая чистота", value: "Проверено", note: "Документы проверены нотариусом", ok: true },
  { label: "Комиссия агента", value: "0 ₽", note: "Бесплатно для покупателя", ok: true },
  { label: "Срок сделки", value: "от 7 дней", note: "Полное сопровождение до ключей" },
]

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Shield className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Прозрачные условия сделки</h3>
      <p className="mb-4 text-sm text-gray-400">Реальные цены, статус документов и нулевая скрытая комиссия — видите всё до подписания</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-3 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        {conditions.map((item, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <div className="flex items-center gap-2">
              <Info className="h-3.5 w-3.5 text-gray-500 shrink-0" />
              <div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-xs text-gray-600">{item.note}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {item.ok && <CheckCircle className="h-3.5 w-3.5 text-green-400" />}
              <span className="text-sm font-medium text-white">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
