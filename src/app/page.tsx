import { Logo } from '@/components/logo'
import { buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export default function Home() {
  return (
    <div className="mx-7 mt-[10vh]">
      <main className="max-h-[85vh] w-full max-w-md bg-white rounded-lg px-8 pt-8 pb-4 md:px-16 mx-auto overflow-auto space-y-3">
        <header className="text-center flex flex-col items-center gap-4">
          <Logo />
          <h1 className="text-slate-950 font-bold text-2xl">
            Cálculo do Gasto Energético Basal (GEB)
          </h1>
        </header>

        <form className="flex flex-col gap-3">
          <div className="space-y-1">
            <Label className="font-semibold text-blue-900" htmlFor="height">
              Altura (cm)
            </Label>
            <Input
              id="height"
              className="text-slate-900 placeholder:text-slate-900/60 rounded-lg text-base py-2.5 px-3.5 font-semibold bg-slate-100 border-blue-900/50 ring-0"
              min={0}
              placeholder="165"
              type="number"
            />
          </div>
          <div className="space-y-1">
            <Label className="font-semibold text-blue-900" htmlFor="weight">
              Peso (kg)
            </Label>
            <Input
              id="weight"
              className="text-slate-900 placeholder:text-slate-900/60 rounded-lg text-base py-2.5 px-3.5 font-semibold bg-slate-100 border-blue-900/50 ring-0"
              min={0}
              placeholder="60"
              type="number"
            />
          </div>
          <div className="space-y-1">
            <Label className="font-semibold text-blue-900" htmlFor="age">
              Idade (anos)
            </Label>
            <Input
              id="age"
              className="text-slate-900 placeholder:text-slate-900/60 rounded-lg text-base py-2.5 px-3.5 font-semibold bg-slate-100 border-blue-900/50 ring-0"
              min={0}
              placeholder="25"
              type="number"
            />
          </div>
          <div className="space-y-1">
            <Label className="font-semibold text-blue-900" htmlFor="sex">
              Sexo
            </Label>
            <Select>
              <SelectTrigger
                id="sex"
                className="rounded-lg text-base py-2.5 px-3.5 font-semibold bg-slate-100 border-blue-900/50 ring-0"
              >
                <SelectValue
                  className="text-slate-900 placeholder:text-slate-900/60"
                  placeholder="Selecione"
                />
              </SelectTrigger>
              <SelectContent className="rounded-lg font-semibold border-blue-900/50 ring-0">
                <SelectItem
                  className="text-base text-slate-900"
                  value="masculino"
                >
                  Masculino
                </SelectItem>
                <SelectItem
                  className="text-base text-slate-900"
                  value="feminino"
                >
                  Feminino
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Dialog>
            <DialogTrigger
              className={twMerge(
                buttonVariants({ variant: 'default' }),
                'group flex gap-2 text-base h-full font-bold text-white bg-blue-900 rounded-lg p-3 hover:bg-blue-800 focus:bg-blue-800 focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 transition-all duration-300'
              )}
            >
              Calcular GEB
              <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </DialogTrigger>
            <DialogContent className="flex flex-col gap-4 p-8 pt-6 w-[calc(100vw-30px)] max-w-sm">
              <DialogTitle className="text-slate-900 font-semibold text-2xl">
                Resultado
              </DialogTitle>
              <p className="text-slate-900 text-lg">
                O seu Gasto Energético Basal (GEB) é:
              </p>
              <p className="text-slate-900 text-5xl">
                <span className="font-semibold">1922</span> calorias
              </p>
            </DialogContent>
          </Dialog>
        </form>
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
              66,437 + (5,0033 x E (cm)) + (13,7516 x P (kg)) – (6,755 x I
              (anos))
            </p>
            <p className="text-slate-900 text-base font-light">
              <span>Para pessoas do sexo feminino:</span>
              <br />
              655,0955 + (1,8496 x E (cm)) + (9,5634 x P (kg)) – (4,6756 x I
              (anos))
            </p>

            <Link
              href="#"
              className={twMerge(
                buttonVariants({ variant: 'link' }),
                'group p-0 text-left w-fit text-base'
              )}
            >
              Acessar artigo explicativo
              <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </Link>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}
