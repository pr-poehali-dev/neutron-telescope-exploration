import { Zap, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Zap className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Запись на показ в 1 клик</h3>
      <p className="mb-4 text-sm text-gray-400">Персональный менеджер свяжется с вами менее чем за 3 минуты и подберёт удобное время</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Смотреть доступные квартиры <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div>
          <label className="mb-2 block text-xs text-gray-400">Ваш телефон</label>
          <div className="flex items-center rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <span className="text-gray-500 mr-2 text-sm">+7</span>
            <input
              type="text"
              placeholder="(000) 000-00-00"
              className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs text-gray-400">
            Пожелания <span className="text-violet-400">*</span> (необязательно)
          </label>
          <div className="relative">
            <textarea
              placeholder="Например: 2-комнатная, до 10 млн, метро рядом..."
              className="w-full rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none resize-none h-16"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <Switch className="data-[state=checked]:bg-violet-600" />
          <span className="text-sm text-gray-400">Подобрать с ипотекой</span>
        </div>

        <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
          Записаться на показ
        </Button>
      </div>
    </div>
  )
}
