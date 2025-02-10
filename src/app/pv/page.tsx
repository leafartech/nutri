import Bonus from "@/components/bonus";
import Section from "@/components/section";
import Image from "next/image";
import { bonusData, dropdownData } from "../../../public/data";
import Dropdown from "@/components/dropdown";
import Ticket from "@/components/ticket";

export default function Page() {
    return (
        <>
            <header className="h-screen w-full flex items-center justify-center radial-01 b2g-gradient-to-r from-zinc-700 to-zinc-950 px-4">
                <div className="max-w-3xl flex flex-col items-center gap-4 text-white text-center">
                    <h1 className="text-3xl sm:text-3xl sm:text-4xl font-semibold">Torne-se uma <strong className="text-[#B9E89B]">profissional certificada</strong> em Suplementação Materno Infantil</h1>
                    <h4 className="text-xl">E <strong className="text-[#B9E89B]">cobre 3x</strong> mais nas suas consultas!</h4>
                    <p className="text-xl">Receba acesso a um conhecimento avançado e prático de Suplementação, e efetue atendimentos mais eficientes.</p>
                    <a href="#preco" className="max-w-md w-full text-center bg-[#b3c674] border border-[#FFE8D8] uppercase text-white font-semibold py-4 px-6 rounded-xl">Quero garantir minha certificação</a>
                    <svg className="absolute bottom-12 w-12 h-12 fill-zinc-200 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m480-313 156-155q11-11 27.5-11.5T692-468q11 11 11 28t-11 28L508-228q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L268-412q-11-11-11.5-27.5T268-468q11-11 28-11t28 11l156 155Zm0-240 156-155q11-11 27.5-11.5T692-708q11 11 11 28t-11 28L508-468q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L268-652q-11-11-11.5-27.5T268-708q11-11 28-11t28 11l156 155Z" /></svg>
                </div>
            </header>
            <main className="bg-[#514746]">
                <Section classNameS="py-12 sm:py-24 px-4 bg-gradient-to-b from-zinc-100 to-zinc-300">
                    <div className="flex flex-col gap-16">
                        <div className="sm:grid sm:grid-cols-2 flex flex-col items-center gap-4">
                            <div className="flex flex-col gap-8 items-start justify-center text-black">
                                <h2 className="text-3xl sm:text-4xl font-semibold">Para quem é a Certificação?</h2>
                                <ul className="w-full flex flex-wrap justify-center items-start gap-4">
                                    <li className="relative flex flex-col gap-2 items-center ps-10">
                                        <svg className="absolute left-0 w-8 h-8 fill-zinc-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z" /></svg>
                                        <p className="text-lg">Para Nutricionistas que buscam conquistar segurança e conhecimento para Suplementar.</p>
                                    </li>
                                    <li className="relative flex flex-col gap-2 items-center ps-10">
                                        <svg className="absolute left-0 w-8 h-8 fill-zinc-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-400h80q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480h-80q-17 0-28.5 11.5T400-440q0 17 11.5 28.5T440-400Zm0-120h240q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H440q-17 0-28.5 11.5T400-560q0 17 11.5 28.5T440-520Zm0-120h240q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H440q-17 0-28.5 11.5T400-680q0 17 11.5 28.5T440-640ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Z" /></svg>
                                        <p className="text-lg">Para estudantes e profissionais que buscam um maior reconhecimento na área.</p>
                                    </li>
                                    <li className="relative flex flex-col gap-2 items-center ps-10">
                                        <svg className="absolute left-0 w-8 h-8 fill-zinc-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M392-90q-137-31-224.5-140T80-480q0-141 87.5-250T392-870q19-5 33.5 7t14.5 32q0 14-8 25t-22 14q-110 25-180 112t-70 200q0 113 70 200t180 112q14 3 22 14t8 25q0 20-14.5 32T392-90Zm176 0q-19 5-33.5-7T520-129q0-14 8-25t22-14q27-6 52.5-16.5T651-210q11-8 24.5-6t23.5 12q14 14 12 32.5T693-142q-29 18-60.5 31T568-90Zm188-170q-10-10-12-23.5t6-24.5q15-23 25.5-49t16.5-53q3-14 14-21.5t25-7.5q20 0 32 14.5t7 33.5q-8 33-21 64.5T818-266q-11 16-29.5 18T756-260Zm75-260q-14 0-25-8t-14-22q-6-27-16.5-52.5T750-651q-8-12-6-25.5t12-23.5q14-14 32.5-12t29.5 19q18 29 31 60.5t21 64.5q5 19-7 33.5T831-520ZM651-750q-23-15-48.5-25.5T550-792q-14-3-22-14t-8-25q0-20 14.5-32t33.5-7q33 8 64.5 21t60.5 31q17 11 19 29.5T700-756q-10 10-23.5 12t-25.5-6ZM479-280q-17 0-28.5-11.5T439-320v-205l-75 76q-12 12-28.5 12T307-449q-12-12-12.5-28.5T306-506l145-146q11-11 28-11t28 11l143 143q12 12 12.5 29T651-451q-12 12-29 12t-29-12l-74-74v205q0 17-11.5 28.5T479-280Z" /></svg>
                                        <p className="text-lg">Para quem está comprometido em se dedicar e levar a suplementação para um próximo nível</p>
                                    </li>
                                </ul>
                                <a href="#preco" className="max-w-md w-full text-center bg-[#b3c674] border border-[#FFE8D8] uppercase text-white font-semibold py-4 px-6 rounded-xl">Quero garantir minha certificação</a>
                            </div>
                            <div className="relative w-full h-[462px]">
                                <Image
                                    src="/images/fabiana.png"
                                    alt="Foto da Fabiana"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                    </div>
                </Section>
                <Section classNameS="py-12 sm:py-24 px-4">
                    <div className="flex flex-col gap-8 text-white items-center">
                        <h2 className="text-3xl sm:text-4xl font-semibold text-center max-w-2xl">Se inscrevendo AGORA você ainda receberá os seguintes bônus:</h2>
                        <div className="sm:grid sm:grid-cols-2 flex flex-col gap-4">
                            {bonusData.map(item => (
                                <Bonus
                                    key={item.title}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                    </div>
                </Section>
                <Section classNameS="py-16 py-32 px-4 border-y radial-02 2bg-[#3b3434]" id="preco">
                    <Ticket />
                </Section>
                <Section classNameS="py-12 sm:py-24 px-4">
                    <div className="sm:grid sm:grid-cols-3 flex flex-col gap-4">
                        <div className="relative w-full h-[431px]">
                            <Image
                                src="/images/fabiana02.png"
                                alt="Foto da Fabiana"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-xl"
                            />
                        </div>
                        <div className="col-span-2 text-white flex flex-col items-start justify-center gap-4">
                            <p className="text-[#B9E89B]">Sobre a Criadora da Certificação</p>
                            <h2 className="text-3xl sm:text-4xl font-semibold">Afinal, quem é Fabiana Montanholi?</h2>
                            <div className="flex flex-col gap-4 text-lg">
                                <p>Nutricionista Materno Infantil, com grande destaque e reconhecimento na área da suplementação.</p>
                                <p>Atualmente Professora de Pós-Graduações em Nutrição Materno Infantil, ministrando o módulo de <strong className="text-[#B9E89B]">Suplementação Materno Infantil</strong>, é também mentora de Nutricionistas.</p>
                                <p>Já impactou a vida de centenas de famílias nos seus atendimentos, através da suplementação e hoje divide sua jornada de trabalho auxiliando e ensinando profissionais de saúde com o seu método, para que essas profissionais conquistem segurança, confiança e reconhecimento através da Suplementação Materno Infantil</p>
                                <p>Tem como missão transformar a carreira de Profissionais de Saúde Materno Infantil, fazendo com que eles dominem a suplementação e consigam aplicar com excelência.</p>
                            </div>
                            <a href="#preco" className="max-w-md w-full text-center bg-[#b3c674] border border-[#FFE8D8] uppercase text-white font-semibold py-4 px-6 rounded-xl">Quero garantir minha certificação</a>
                        </div>
                    </div>
                </Section>
                <Section classNameS="py-12 sm:py-24 px-4 bg-zinc-100">
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col items-center gap-8">
                            <h2 className="text-3xl sm:text-4xl font-semibold">Veja o que dizem as pessoas que já aplicam este método:</h2>
                            <iframe className="rounded-xl w-full sm:max-w-3xl h-[424px]" src="https://www.youtube.com/embed/N09zI8rZvzY?si=E20hJUyfw4o-eWYi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <a href="#preco" className="max-w-md w-full text-center bg-[#b3c674] border border-[#FFE8D8] uppercase text-white font-semibold py-4 px-6 rounded-xl">Quero garantir minha certificação</a>
                        </div>
                        <div className="flex flex-col gap-6 items-center">
                            <h2 className="text-3xl sm:text-4xl font-semibold">Ainda está com dúvidas?</h2>
                            <ul className="sm:grid sm:grid-cols-2 flex flex-col gap-4">
                                {dropdownData.map(item => (
                                    <Dropdown
                                        key={item.title}
                                        {...item}
                                    />
                                ))}
                            </ul>
                        </div>

                    </div>
                </Section>
            </main>
            <footer className="text-white text-center py-4 bg-zinc-900 text-sm">
                <p>Montanholi Nutrição e Treinamentos - todos os direitos reservados.</p>
            </footer>
        </>
    )
}