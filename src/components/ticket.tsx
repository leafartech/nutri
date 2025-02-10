"use client"

import { useEffect, useState } from "react"

export default function Ticket() {

    const [params, setParams] = useState<string>()

    useEffect(() => {

        if (typeof window !== 'undefined') {

            const utm_source = new URLSearchParams(window.location.search).get('utm_source') ?? 'nao-traqueado'
            const utm_campaign = new URLSearchParams(window.location.search).get('utm_campaign') ?? 'nao-traqueado'
            const utm_medium = new URLSearchParams(window.location.search).get('utm_medium') ?? 'nao-traqueado'
            const utm_content = new URLSearchParams(window.location.search).get('utm_content') ?? 'nao-traqueado'
            const utm_term = new URLSearchParams(window.location.search).get('utm_term') ?? 'nao-traqueado'

            setParams(`utm_source=${utm_source}&utm_campaign=${utm_campaign}&utm_medium=${utm_medium}&utm_content=${utm_content}&utm_term=${utm_term}`)
        }
    }, [])

    return (
        <div className="w-full max-w-md rounded-xl text-center border text-black bg-gradient-to-br from-zinc-100 to-zinc-300 b2g-[#514746]">
            <h2 className="text-3xl sm:text-4xl font-semibold border-b border-zinc-300 px-4 py-8">Oferta especial</h2>
            <div className="text-black flex flex-col items-center justify-center gap-4 px-4 pt-8 pb-6">
                <div className="text-center flex flex-col gap-1">
                    <h5 className="text-xl line-through text-red-500">De: R$ 5297,00</h5>
                    <div>
                        <h3 className="text-3xl sm:text-4xl"><span className="text-sm">12x</span> <span className="font-semibold">R$ 279,9</span></h3>
                        <h5 className="text-sm">ou R$ 2.797 à vista</h5>
                    </div>
                </div>
                <a href={`https://pay.kiwify.com.br/J8aCY6f/?${params}`} className="max-w-md w-full text-center bg-[#b3c674] border border-[#FFE8D8] uppercase text-white font-semibold text-sm py-4 px-2 rounded-xl">Quero garantir minha certificação</a>
            </div>
        </div>
    )
}