import { Form } from '@/components/form'
import { HowWorksDialog } from '@/components/how-works-dialog'
import { Logo } from '@/components/logo'

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

        <Form />

        <HowWorksDialog />
      </main>
    </div>
  )
}
