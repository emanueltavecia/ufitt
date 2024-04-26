import { buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export function HowWorksDialog() {
  return (
    <Dialog>
      <DialogTrigger
        className={twMerge(
          buttonVariants({ variant: 'link' }),
          'group flex gap-2 text-base h-full p-0 text-slate-950 transition-all duration-300'
        )}
      >
        Entender como funciona
        <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
      </DialogTrigger>

      <DialogContent className="flex flex-col gap-4 p-7 pt-6 pb-4 w-[calc(100vw-30px)] max-w-xl">
        <DialogTitle className="text-slate-900 font-semibold text-2xl">
          Como funciona
        </DialogTitle>
        <p className="text-slate-900 text-base">
          O Gasto Energético Basal (GEB) é calculado através da fórmula a
          seguir, definida no artigo de Harris-Benedict:
        </p>
        <p className="text-slate-900 text-base font-light">
          <span>Para pessoas do sexo masculino:</span>
          <br />
          66,437 + (5,0033 x E (cm)) + (13,7516 x P (kg)) - (6,755 x I (anos))
        </p>
        <p className="text-slate-900 text-base font-light">
          <span>Para pessoas do sexo feminino:</span>
          <br />
          655,0955 + (1,8496 x E (cm)) + (9,5634 x P (kg)) - (4,6756 x I (anos))
        </p>

        <Link
          href="#"
          className={twMerge(
            buttonVariants({ variant: 'link' }),
            'group p-0 text-left w-fit text-base flex gap-2 items-center'
          )}
        >
          Acessar artigo explicativo
          <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </Link>
      </DialogContent>
    </Dialog>
  )
}
