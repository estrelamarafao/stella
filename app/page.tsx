import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="w-screen h-16 bg-black flex flex-row items-center justify-between">
        <div className="pl-12 flex flex-row h-full items-center">
          <Image className="w-14 pl-4" alt="Star icon" src={"star-icon.svg"} width={50} height={50} />
          <span className="pl-4 text-white text-2xl">STELLA</span>
        </div>
        <div className="flex flex-row">
          <button className="pr-6 text-white hover:text-red-600">NEW IN</button>
          <button className="pr-6 text-white hover:text-red-600">SHOPPING</button>
          <button className="pr-6 text-white hover:text-red-600">BEST SALLERS </button>
          <button className="pr-6 text-white hover:text-red-600">SALE</button>
        </div>
        <div></div>
      </div>
      <div>
        <Image className="w-full" alt="Star icon" src={"/imagens/capavermelha.jpg"} width={3000} height={500} />
        <div className="w-full pt-12 flex flex-col items-center">
          <h1 className="text-red-600 text-3xl">VALENTINE COLLECTION</h1>
          <div className="w-full pl-8 pt-12 pr-8 pb-12 flex flex-row items-center justify-between">
            <div className="p-1 rounded-md flex flex-col bg-black items-center">
              <Image className="w-64  " alt="Star icon" src={"/imagens/vermelho1.jpg"} width={100} height={100} />
              <span className="pt-4 text-white text-center text-md font-bold">R$ 1240,90</span>
            </div>
            <div className="p-1 rounded-md flex flex-col bg-black items-center">
              <Image className="w-64  " alt="Star icon" src={"/imagens/vermelho2.jpg"} width={100} height={100} />
              <span className="pt-4 text-white text-center text-md font-bold">R$ 990,90</span>
            </div>
            <div className="p-1 rounded-md flex flex-col bg-black items-center">
              <Image className="w-64  " alt="Star icon" src={"/imagens/vermelho3.jpg"} width={100} height={100} />
              <span className="pt-4 text-white text-center text-md font-bold">R$ 1320,90</span>
            </div>
            <div className="p-1 rounded-md flex flex-col bg-black items-center">
              <Image className="w-64  " alt="Star icon" src={"/imagens/vermelho4.jpg"} width={100} height={100} />
              <span className="pt-4 text-white text-center text-md font-bold">R$ 1111,90</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
