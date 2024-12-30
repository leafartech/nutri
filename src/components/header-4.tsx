import Image from "next/image";
import { Form2 } from "./form-2";
import { ReactNode } from "react";

interface FormProps {
    searchParams: {
        utm_content?: string
        utm_campaign?: string
        utm_term?: string
        utm_source?: string
        utm_medium?: string
    }
    title: ReactNode
    description: ReactNode
    form?: boolean
}

export function Header4({ searchParams, description, title, form }: FormProps) {
    return (
        <header className="relative sm:min-h-screen w-full flex sm:items-center justify-center sm:px-4 pt-24 sm:py-12 bg-my overflow-hidden">
            <div className="sm:hidden absolute top-0 -right-0 h-32 w-24 blur-[96px] bg-white"></div>
            <div className="fixed top-0 left-0 w-full py-1 text-center font-medium flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 text-white z-[99999]">
                <h5>Exclusivo para brasileiros <br className="sm:hidden"/>que moram na Europa</h5>
            </div>
            <div className="w-full sm:max-w-6xl sm:grid sm:grid-cols-2 gap-12 sm:gap-12 flex flex-col">
                <div id="forms" className="flex flex-col gap-6 justify-center items-center sm:items-start sm:justify-start sm:text-left text-center px-4 sm:px-0">
                    <svg className="hidden sm:block sm:w-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1169 228" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M142.1 60.8L119 169.8C113.1 198 111.3 214.3 113.9 225.4H68.8L79.7 173.9C66.2 209.8 46.1 227.5 26 227.5C8.3 227.5 0 214.7 0 194.4C0 160 29.5 112.1 78 112.1C82.7 112.1 87.6 112.3 92.5 112.9C96.4 94.6 94.9 79.6 93.4 73.4L142.1 60.8ZM89.9 122.2C84.8 119.2 80.3 117.9 76 117.9C53.4 117.9 39.2 156.2 39.2 180.1C39.2 190.8 42.2 198.5 49.1 198.5C60 198.5 78.2 176.9 89.9 122.2ZM254.6 169.8C248.6 198.1 246.9 214.3 249.4 225.4H204.3L218 160C194 215.6 171.8 227.6 155.6 227.6C139.3 227.6 131.4 216 135.5 196.3L141.2 169.8C147.2 141.6 148.9 125.4 146.4 114.2H191.7L175.7 189.1C174.2 196.6 176.1 200 180.6 200C192.8 200 211.6 167.3 227.6 114.2H266.3L254.6 169.8ZM386.3 169.8C380.3 198.1 378.6 214.3 381.2 225.4H336.1L346.8 175C333.3 210.3 313.4 227.6 293.5 227.6C275.8 227.6 267.4 214.7 267.4 194.4C267.4 160 296.9 112.1 345.5 112.1C360.4 112.1 377.6 115.3 396.4 122.6L386.3 169.8ZM357.4 122.1C352.3 119.1 347.8 117.8 343.5 117.8C320.8 117.8 306.7 156.1 306.7 180.1C306.7 190.7 309.7 198.4 316.6 198.4C327.5 198.4 345.6 176.8 357.4 122.1ZM392.9 214.5L399.1 186C415.1 210.8 426.7 221.1 438.2 221.1C446.1 221.1 452.5 217 452.5 209.6C452.5 189.2 409.8 182.8 409.8 150.1C409.8 127.5 427.3 112.1 455.5 112.1C468.8 112.1 483.1 116.1 492.7 122.3L487.4 148C476.9 130.2 466.9 117.4 454 117.4C445.7 117.4 440.4 121.9 440.4 130C440.4 152.3 483.1 159.5 483.1 190.5C483.1 212.1 464.5 227.3 435.9 227.3C420.9 227.3 404.7 222.4 392.9 214.5ZM816.5 169.8C810.5 198 808.8 214.3 811.4 225.4H766.2L779.9 160C756 215.5 733.7 227.5 717.5 227.5C701.2 227.5 693.3 216 697.4 196.3L703.2 169.8C709.2 141.6 710.9 125.3 708.3 114.2H753.6L737.6 189C736.1 196.5 738 199.9 742.5 199.9C754.7 199.9 773.5 167.2 789.6 114.2H828.2L816.5 169.8ZM1033.1 143.1L1027.4 169.8C1021.4 198 1019.7 214.3 1022.2 225.4H977.1L992.9 150.6C994.7 143.1 992.5 139.7 988.2 139.7C976.1 139.7 957 172.4 941.2 225.4H902.5L918.5 150.6C920 143.1 918.1 139.7 913.6 139.7C901.4 139.7 882.6 172.4 866.6 225.4H827.9L839.6 169.8C845.8 141.6 847.6 125.3 844.8 114.2H890.1L876.4 179C900.1 124 922.6 112.1 938.6 112.1C954.9 112.1 962.8 123.4 958.5 143.1L950.8 179.6C974.6 124 997 112.1 1013 112.1C1029.5 112.1 1037.4 123.4 1033.1 143.1ZM1158.2 169.8C1152.2 198 1150.5 214.3 1153.1 225.4H1108L1118.7 174.9C1105.2 210.2 1085.3 227.5 1065.4 227.5C1047.7 227.5 1039.3 214.7 1039.3 194.4C1039.3 160 1068.8 112.1 1117.4 112.1C1132.3 112.1 1149.4 115.3 1168.3 122.6L1158.2 169.8ZM1129.3 122.1C1124.2 119.1 1119.7 117.8 1115.4 117.8C1092.7 117.8 1078.6 156.1 1078.6 180C1078.6 190.7 1081.6 198.4 1088.5 198.4C1099.4 198.4 1117.5 176.8 1129.3 122.1Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M539.6 142.5C551.2 142.5 558.3 147.9 558.3 157.9C558.3 173 547.5 181.1 531.5 181.1H523.6L519.9 201.9H509.1L519.5 142.5H539.6ZM546.8 159.2C546.8 152 541.7 151.2 535.2 151.2H528.9L525.1 172.5H531.6C540.3 172.5 546.8 169.1 546.8 159.2ZM564.1 180.8C564.1 178.1 564.2 174.5 564.9 171.2C568.9 148.3 583.3 141.5 596.1 141.5C608.2 141.5 617 148.3 617 163.3C617 166 616.8 169.4 616.3 172.8C612.8 193.4 601 203 585.1 203C571.8 203 564.1 195.1 564.1 180.8ZM605 172.8C605.2 170.4 605.7 167.7 605.7 165.2C605.7 157.6 603.2 150.7 594.6 150.7C583.9 150.7 578 160.8 576.1 171.6C575.7 174.2 575.4 177.3 575.4 180C575.4 187.7 578 194 587.1 194C597.9 194 603.3 183.7 605 172.8ZM653.2 142.5C665.3 142.5 672.4 146.8 672.4 156.6C672.4 167.5 665.4 172.6 658.7 174.7C661 175.7 661.9 177.2 662.9 180.7L668.9 201.9H657.2L652.2 182.9C651.3 180 650.2 178.3 647 178.3H638.2L634 201.9H623.1L633.5 142.5H653.2ZM661.1 158.3C661.1 152.2 656.7 151.2 650.2 151.2H643L639.6 170.3H648.5C656 170.3 661.1 165.8 661.1 158.3Z" fill="white"></path><path d="M0 10.8L1.70001 1.10001H47.9L46.1 10.8H28.4L19.4 62.1H8.29999L17.2 10.8H0Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.4 1.10001C88.9 1.10001 96.1 5.50001 96.1 15.6C96.1 26.8 88.9 32 82.1 34.1C84.5 35.1 85.4 36.7 86.4 40.3L92.5 62.1H80.5L75.4 42.5C74.5 39.5 73.3 37.8 70.1 37.8H61L56.7 62.1H45.5L56.2 1.10001H76.4ZM84.5 17.2C84.5 11 80 10 73.3 10H65.9L62.4 29.6H71.6C79.3 29.6 84.5 25 84.5 17.2ZM147.6 1.10001L145.9 10.8H120.2L117.6 26.1H139.6L137.8 35.8H115.8L113 52.4H139.2L137.5 62.1H100.1L110.8 1.10001H147.6ZM168.9 1.10001L158.1 62.1H146.9L157.7 1.10001H168.9ZM193.2 1.10001L211.5 43.6H211.6L219 1.10001H230.1L219.4 62.1H208.7L190 19.1H189.8L182.3 62.1H171.2L181.9 1.10001H193.2Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M271.1 1.10001L281.9 62.1H270.5L267.7 45.9H246.5L238.3 62.1H226.8L258 1.10001H271.1ZM263.2 11.4H263L250.1 37.4H267.1L263.2 11.4ZM315.3 1.10001L323.4 41.1H323.7L346.3 1.10001H358.7L351.3 62.1H340.7L345.8 20.1H345.5L325.2 55.2H316.8L309.3 20.5H309.1L299.4 62.1H288.8L303 1.10001H315.3ZM411 1.10001L409.3 10.9H383.7L381 26.2H403L401.3 35.8H379.3L376.4 52.4H402.6L400.9 62.1H363.5L374.2 1.10001H411ZM432.2 1.10001L450.5 43.6H450.6L458.1 1.10001H469.2L458.4 62.1H447.7L429 19.1H428.8L421.3 62.1H410.2L420.9 1.10001H432.2ZM475.1 10.9L476.8 1.10001H523L521.2 10.9H503.6L494.5 62.1H483.4L492.4 10.9H475.1Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M519.5 40.3C519.5 37.6 519.7 33.9 520.3 30.5C524.5 7 539.2 0 552.4 0C564.8 0 573.9 7.09999 573.9 22.4C573.9 25.2 573.7 28.7 573.1 32.2C569.6 53.4 557.5 63.2 541 63.2C527.5 63.2 519.5 55.1 519.5 40.3ZM561.5 32.2C561.8 29.7 562.2 27 562.2 24.4C562.2 16.6 559.7 9.39999 550.9 9.39999C539.9 9.39999 533.8 19.8 531.9 30.9C531.4 33.7 531.1 36.8 531.1 39.5C531.1 47.5 533.8 53.9 543.2 53.9C554.3 53.9 559.8 43.4 561.5 32.2Z" fill="white"></path>
                    </svg>
                    <svg className="w-48 sm:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1169 228" fill="none"><path d="M297.1 10.8L298.8 1.09998H345L343.2 10.8H325.5L316.5 62.0999H305.4L314.3 10.8H297.1Z" fill="white" /><path fill-rule="evenodd" clip-rule="evenodd" d="M373.5 1.09998C386 1.09998 393.2 5.49998 393.2 15.6C393.2 26.8 386 32 379.2 34.1C381.6 35.1 382.5 36.7 383.5 40.3L389.6 62.0999H377.6L372.5 42.5C371.6 39.5 370.4 37.8 367.2 37.8H358.1L353.8 62.0999H342.6L353.3 1.09998H373.5ZM381.6 17.2C381.6 11 377.1 9.99997 370.4 9.99997H363L359.5 29.6H368.7C376.4 29.6 381.6 25 381.6 17.2ZM444.7 1.09998L443 10.8H417.3L414.7 26.1H436.7L434.9 35.8H412.9L410.1 52.4H436.3L434.6 62.0999H397.2L407.9 1.09998H444.7ZM466 1.09998L455.2 62.0999H444L454.8 1.09998H466ZM490.3 1.09998L508.6 43.6H508.7L516.1 1.09998H527.2L516.5 62.0999H505.8L487.1 19.1H486.9L479.4 62.0999H468.3L479 1.09998H490.3Z" fill="white" /><path fill-rule="evenodd" clip-rule="evenodd" d="M568.2 1.09998L579 62.0999H567.6L564.8 45.9H543.6L535.4 62.0999H523.9L555.1 1.09998H568.2ZM560.3 11.4H560.1L547.2 37.4H564.2L560.3 11.4ZM612.4 1.09998L620.5 41.1H620.8L643.4 1.09998H655.8L648.4 62.0999H637.8L642.9 20.1H642.6L622.3 55.2H613.9L606.4 20.5H606.2L596.5 62.0999H585.9L600.1 1.09998H612.4ZM708.1 1.09998L706.4 10.9H680.8L678.1 26.2H700.1L698.4 35.8H676.4L673.5 52.4H699.7L698 62.0999H660.6L671.3 1.09998H708.1ZM729.3 1.09998L747.6 43.6H747.7L755.2 1.09998H766.3L755.5 62.0999H744.8L726.1 19.1H725.9L718.4 62.0999H707.3L718 1.09998H729.3ZM772.2 10.9L773.9 1.09998H820.1L818.3 10.9H800.7L791.6 62.0999H780.5L789.5 10.9H772.2Z" fill="white" /><path fill-rule="evenodd" clip-rule="evenodd" d="M816.6 40.3C816.6 37.6 816.8 33.9 817.4 30.5C821.6 7 836.3 0 849.5 0C861.9 0 871 7.09999 871 22.4C871 25.2 870.8 28.7 870.2 32.2C866.7 53.4 854.6 63.2 838.1 63.2C824.6 63.2 816.6 55.1 816.6 40.3ZM858.6 32.2C858.9 29.7 859.3 27 859.3 24.4C859.3 16.6 856.8 9.39999 848 9.39999C837 9.39999 830.9 19.8 829 30.9C828.5 33.7 828.2 36.8 828.2 39.5C828.2 47.5 830.9 53.9 840.3 53.9C851.4 53.9 856.9 43.4 858.6 32.2Z" fill="white" /><path fill-rule="evenodd" clip-rule="evenodd" d="M142.1 60.8L119 169.8C113.1 198 111.3 214.3 113.9 225.4H68.8L79.7 173.9C66.2 209.8 46.1 227.5 26 227.5C8.3 227.5 0 214.7 0 194.4C0 160 29.5 112.1 78 112.1C82.7 112.1 87.6 112.3 92.5 112.9C96.4 94.6 94.9 79.6 93.4 73.4L142.1 60.8ZM89.9 122.2C84.8 119.2 80.3 117.9 76 117.9C53.4 117.9 39.2 156.2 39.2 180.1C39.2 190.8 42.2 198.5 49.1 198.5C60 198.5 78.2 176.9 89.9 122.2ZM254.6 169.8C248.6 198.1 246.9 214.3 249.4 225.4H204.3L218 160C194 215.6 171.8 227.6 155.6 227.6C139.3 227.6 131.4 216 135.5 196.3L141.2 169.8C147.2 141.6 148.9 125.4 146.4 114.2H191.7L175.7 189.1C174.2 196.6 176.1 200 180.6 200C192.8 200 211.6 167.3 227.6 114.2H266.3L254.6 169.8ZM386.3 169.8C380.3 198.1 378.6 214.3 381.2 225.4H336.1L346.8 175C333.3 210.3 313.4 227.6 293.5 227.6C275.8 227.6 267.4 214.7 267.4 194.4C267.4 160 296.9 112.1 345.5 112.1C360.4 112.1 377.6 115.3 396.4 122.6L386.3 169.8ZM357.4 122.1C352.3 119.1 347.8 117.8 343.5 117.8C320.8 117.8 306.7 156.1 306.7 180.1C306.7 190.7 309.7 198.4 316.6 198.4C327.5 198.4 345.6 176.8 357.4 122.1ZM392.9 214.5L399.1 186C415.1 210.8 426.7 221.1 438.2 221.1C446.1 221.1 452.5 217 452.5 209.6C452.5 189.2 409.8 182.8 409.8 150.1C409.8 127.5 427.3 112.1 455.5 112.1C468.8 112.1 483.1 116.1 492.7 122.3L487.4 148C476.9 130.2 466.9 117.4 454 117.4C445.7 117.4 440.4 121.9 440.4 130C440.4 152.3 483.1 159.5 483.1 190.5C483.1 212.1 464.5 227.3 435.9 227.3C420.9 227.3 404.7 222.4 392.9 214.5ZM816.5 169.8C810.5 198 808.8 214.3 811.4 225.4H766.2L779.9 160C756 215.5 733.7 227.5 717.5 227.5C701.2 227.5 693.3 216 697.4 196.3L703.2 169.8C709.2 141.6 710.9 125.3 708.3 114.2H753.6L737.6 189C736.1 196.5 738 199.9 742.5 199.9C754.7 199.9 773.5 167.2 789.6 114.2H828.2L816.5 169.8ZM1033.1 143.1L1027.4 169.8C1021.4 198 1019.7 214.3 1022.2 225.4H977.1L992.9 150.6C994.7 143.1 992.5 139.7 988.2 139.7C976.1 139.7 957 172.4 941.2 225.4H902.5L918.5 150.6C920 143.1 918.1 139.7 913.6 139.7C901.4 139.7 882.6 172.4 866.6 225.4H827.9L839.6 169.8C845.8 141.6 847.6 125.3 844.8 114.2H890.1L876.4 179C900.1 124 922.6 112.1 938.6 112.1C954.9 112.1 962.8 123.4 958.5 143.1L950.8 179.6C974.6 124 997 112.1 1013 112.1C1029.5 112.1 1037.4 123.4 1033.1 143.1ZM1158.2 169.8C1152.2 198 1150.5 214.3 1153.1 225.4H1108L1118.7 174.9C1105.2 210.2 1085.3 227.5 1065.4 227.5C1047.7 227.5 1039.3 214.7 1039.3 194.4C1039.3 160 1068.8 112.1 1117.4 112.1C1132.3 112.1 1149.4 115.3 1168.3 122.6L1158.2 169.8ZM1129.3 122.1C1124.2 119.1 1119.7 117.8 1115.4 117.8C1092.7 117.8 1078.6 156.1 1078.6 180C1078.6 190.7 1081.6 198.4 1088.5 198.4C1099.4 198.4 1117.5 176.8 1129.3 122.1Z" fill="white" /><path fill-rule="evenodd" clip-rule="evenodd" d="M539.6 142.5C551.2 142.5 558.3 147.9 558.3 157.9C558.3 173 547.5 181.1 531.5 181.1H523.6L519.9 201.9H509.1L519.5 142.5H539.6ZM546.8 159.2C546.8 152 541.7 151.2 535.2 151.2H528.9L525.1 172.5H531.6C540.3 172.5 546.8 169.1 546.8 159.2ZM564.1 180.8C564.1 178.1 564.2 174.5 564.9 171.2C568.9 148.3 583.3 141.5 596.1 141.5C608.2 141.5 617 148.3 617 163.3C617 166 616.8 169.4 616.3 172.8C612.8 193.4 601 203 585.1 203C571.8 203 564.1 195.1 564.1 180.8ZM605 172.8C605.2 170.4 605.7 167.7 605.7 165.2C605.7 157.6 603.2 150.7 594.6 150.7C583.9 150.7 578 160.8 576.1 171.6C575.7 174.2 575.4 177.3 575.4 180C575.4 187.7 578 194 587.1 194C597.9 194 603.3 183.7 605 172.8ZM653.2 142.5C665.3 142.5 672.4 146.8 672.4 156.6C672.4 167.5 665.4 172.6 658.7 174.7C661 175.7 661.9 177.2 662.9 180.7L668.9 201.9H657.2L652.2 182.9C651.3 180 650.2 178.3 647 178.3H638.2L634 201.9H623.1L633.5 142.5H653.2ZM661.1 158.3C661.1 152.2 656.7 151.2 650.2 151.2H643L639.6 170.3H648.5C656 170.3 661.1 165.8 661.1 158.3Z" fill="white" /></svg>
                    <h1 className="font-extrabold text-my2 text-[20px] sm:text-[32px] leading-6 sm:leading-9">{title}</h1>
                    <p className="text-white text-[13px] sm:text-lg font-medium">{description}</p>
                    <Form2 searchParams={searchParams} />
                    {/* <form className="w-full sm:max-w-[412px] flex flex-col gap-3">
                        <input type="text"
                            placeholder="Seu nome"
                            className="outline-none border border-zinc-200 bg-transparent rounded-full px-4 py-3 sm:py-4 font-semibold text-white"
                        />
                        <input type="text"
                            placeholder="Seu melhor e-mail"
                            className="outline-none border border-zinc-200 bg-transparent rounded-full px-4 py-3 sm:py-4 font-semibold text-white"
                        />
                        <input type="text"
                            placeholder="DDD + Whatsapp"
                            className="outline-none border border-zinc-200 bg-transparent rounded-full px-4 py-3 sm:py-4 font-semibold text-white"
                        />
                        <Button type="submit" />
                    </form> */}
                </div>
                <div className="relative">
                    <svg className="w-20 h-20 absolute -top-4 -right-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 389 375" fill="none"><path d="M0 190.279C0 80.7911 83.8969 0 196.495 0C307.548 0 388.354 80.7911 388.354 190.279C388.354 294.91 307.548 374.156 196.495 374.156C83.8969 374.156 0 294.91 0 190.279Z" fill="white"></path><path d="M40.4023 189.617C40.4023 103.086 106.857 39.0713 196.053 39.0713C283.924 39.0713 347.95 103.086 347.95 189.617C347.95 272.394 283.924 335.085 196.053 335.085C106.857 335.085 40.4023 272.394 40.4023 189.617Z" fill="#201C3C"></path><path d="M151.678 282.99C220.562 255.176 285.03 192.707 285.03 145.91C285.03 124.719 271.783 116.11 255.224 116.11C233.588 116.11 219.016 133.328 219.016 139.288C219.016 141.274 239.991 145.91 239.991 170.191C239.991 192.707 225.64 220.962 210.406 234.868C204.445 198.005 198.042 160.258 193.185 125.822C192.081 121.187 190.536 121.187 188.107 121.187H128.054C125.626 121.187 122.314 122.07 123.418 127.147L151.678 282.99Z" fill="#5385FF"></path></svg>
                    <Image
                        width={536}
                        height={668}
                        src="/images/bg1.webp"
                        alt="Imagem de fundo"
                        className="sm:rounded-[32px]"
                    />
                    <svg className="w-20 h-20 absolute -bottom-4 -left-4" viewBox="0 0 80 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 39.1319C0 16.6151 17.2539 0 40.4103 0C63.2489 0 79.8671 16.6151 79.8671 39.1319C79.8671 60.6499 63.2489 76.9473 40.4103 76.9473C17.2539 76.9473 0 60.6499 0 39.1319Z" fill="white" />
                        <path d="M8.30896 38.9957C8.30896 21.2001 21.9757 8.03516 40.3194 8.03516C58.3905 8.03516 71.5578 21.2001 71.5578 38.9957C71.5578 56.0193 58.3905 68.912 40.3194 68.912C21.9757 68.912 8.30896 56.0193 8.30896 38.9957Z" fill="#201C3C" />
                        <g clip-path="url(#clip0_207_21)">
                            <mask id="mask0_207_21" maskUnits="userSpaceOnUse" x="23" y="19" width="35" height="44">
                                <path d="M57.187 19H23V63H57.187V19Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_207_21)">
                                <path d="M24.6652 43.4932C24.9244 43.0697 25.309 42.8332 25.7036 42.8332C25.8518 42.8332 25.9999 42.868 26.1438 42.9358L31.0396 45.2495C31.2205 45.3357 31.4214 45.321 31.5952 45.2128L52.7299 32.0862C53.7954 31.4555 55.0675 32.0532 55.5632 33.4282C56.0603 34.8105 55.5945 36.4678 54.5262 37.1242L34.6806 49.3653C32.5125 50.6945 29.9485 50.4103 27.9899 48.6192L25.0341 45.9132C24.7122 45.6198 24.4971 45.1633 24.4401 44.6628C24.3917 44.232 24.4715 43.8158 24.668 43.4932H24.6652Z" fill="#5484FF" />
                                <path d="M31.7875 28.7752C31.6052 28.5662 31.5197 28.2692 31.5539 27.9575C31.5881 27.6458 31.7348 27.391 31.9556 27.259L33.0638 26.5898C33.7732 26.1627 34.6065 26.2727 35.2717 26.9088L44.9139 34.9058L39.8414 38.0573L31.7875 28.7752Z" fill="#5484FF" />
                                <path d="M25 54L56 54" stroke="#5484FF" stroke-width="2" stroke-linecap="round" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_207_21">
                                <rect width="35" height="44" fill="white" transform="translate(23 19)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </header>
    )
}