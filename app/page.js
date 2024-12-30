import Image from "next/image";

export default function Home() {
  return (
    <main className="container m-auto px-4 min-h-screen">
      <section className="">
        <h2 className="text-3xl font-bold mt-12 text-neutral-800 mb-3 md:text-4xl text-center md:mt-32 md:mb-5">
          Achieve Your Study Goals with Study Buddy
        </h2>
        <p className="text-lg w-[90%] xl:w-[60%] text-center m-auto 2xl:w-[50%]">Stay on track and reach your academic dreams with Study Buddy! Our smart goal-tracking platform helps you set, manage, and conquer your study targets.</p>
        <div className="flex relative mt-10 md:w-[60%] m-auto lg:w-[40%]">
          <input type="text" name="" id="" className="w-full border-[1px] border-neutral-300 rounded-full py-2" />
          <button className="text-white bg-primary py-2 px-4 flex-1 rounded-full absolute right-[3px] top-[3px] text-sm">Serach User</button>
        </div>
      </section>
    </main>
  );
}
