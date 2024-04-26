'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { ArrowRight, TriangleAlert } from 'lucide-react'
import { useState } from 'react'

export function Form() {
  const [height, setHeight] = useState<number>()
  const [weight, setWeight] = useState<number>()
  const [age, setAge] = useState<number>()
  const [sex, setSex] = useState<'male' | 'female'>()
  const [result, setResult] = useState<number>()
  const [open, setOpen] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  function calculateGEB() {
    if (height && weight && age && sex) {
      if (sex === 'male') {
        setResult(
          Math.round(66.437 + 5.0033 * height + 13.7516 * weight - 6.755 * age)
        )
      } else {
        setResult(
          Math.round(
            655.0955 + 1.8496 * height + 9.5634 * weight - 4.6756 * age
          )
        )
      }
      setOpen(true)
    }
    setError('Preencha todos os campos')
  }

  return (
    <form className="flex flex-col gap-3">
      <div className="space-y-2">
        <Label
          className="font-semibold text-blue-900 flex items-center justify-between gap-2"
          htmlFor="height"
        >
          <span>Altura (cm)</span>
          <span className="font-normal text-xs">Obrigatório</span>
        </Label>
        <Input
          onChange={(e) => setHeight(Number(e.target.value))}
          id="height"
          className="text-slate-900 placeholder:text-slate-900/60 rounded-lg text-base py-2.5 px-3.5 font-semibold bg-slate-100 border-blue-900/50 ring-0"
          min={0}
          placeholder="165"
          type="number"
        />
      </div>
      <div className="space-y-2">
        <Label
          className="font-semibold text-blue-900 flex items-center justify-between gap-2"
          htmlFor="weight"
        >
          <span>Peso (kg)</span>
          <span className="font-normal text-xs">Obrigatório</span>
        </Label>
        <Input
          onChange={(e) => setWeight(Number(e.target.value))}
          id="weight"
          className="text-slate-900 placeholder:text-slate-900/60 rounded-lg text-base py-2.5 px-3.5 font-semibold bg-slate-100 border-blue-900/50 ring-0"
          min={0}
          placeholder="60"
          type="number"
        />
      </div>
      <div className="space-y-2">
        <Label
          className="font-semibold text-blue-900 flex items-center justify-between gap-2"
          htmlFor="age"
        >
          <span>Idade (anos)</span>
          <span className="font-normal text-xs">Obrigatório</span>
        </Label>
        <Input
          onChange={(e) => setAge(Number(e.target.value))}
          id="age"
          className="text-slate-900 placeholder:text-slate-900/60 rounded-lg text-base py-2.5 px-3.5 font-semibold bg-slate-100 border-blue-900/50 ring-0"
          min={0}
          placeholder="25"
          type="number"
        />
      </div>
      <div className="space-y-2">
        <Label
          className="font-semibold text-blue-900 flex items-center justify-between gap-2"
          htmlFor="sex"
        >
          <span>Sexo</span>
          <span className="font-normal text-xs">Obrigatório</span>
        </Label>
        <Select onValueChange={(value: 'male' | 'female') => setSex(value)}>
          <SelectTrigger
            id="sex"
            className={`rounded-lg text-base py-2.5 px-3.5 font-semibold bg-slate-100 ${
              sex ? 'text-slate-900' : 'text-slate-900/60'
            } border-blue-900/50 ring-0 transition-all duration-200`}
          >
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent className="rounded-lg font-semibold border-blue-900/50 ring-0">
            <SelectItem className="text-base text-slate-900" value="male">
              Masculino
            </SelectItem>
            <SelectItem className="text-base text-slate-900" value="female">
              Feminino
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="transition-all duration-300">
        {error && !(height && weight && age && sex) && (
          <p className="text-red-700 font-semibold flex gap-2 items-center">
            <TriangleAlert />
            {error}
          </p>
        )}
      </div>

      <Button
        onClick={calculateGEB}
        type="button"
        className="group flex gap-2 text-base h-full font-bold text-white bg-blue-900 rounded-lg p-3 hover:bg-blue-800 focus:bg-blue-800 focus-visible:ring-2 focus-visible:ring-blue-900 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 transition-all duration-300"
      >
        Calcular GEB
        <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex flex-col gap-4 p-8 pl-7 pt-6 w-[calc(100vw-30px)] max-w-sm">
          <DialogTitle className="text-slate-900 font-semibold text-2xl">
            Resultado
          </DialogTitle>
          <p className="text-slate-900 text-lg">
            O seu Gasto Energético Basal (GEB) é:
          </p>
          <p className="text-slate-900 text-5xl">
            <span className="font-semibold">{result}</span> calorias
          </p>
        </DialogContent>
      </Dialog>
    </form>
  )
}
