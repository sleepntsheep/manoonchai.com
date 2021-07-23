export default function Hero() {
  return (
    <section className="text-center py-20 mx-16">
      <h1 className="text-6xl font-bold sm:text-8xl">มนูญชัย</h1>
      <p className="text-2xl text-gray-500 my-8">
        แป้นพิมพ์ภาษาไทยยุคใหม่
        สร้างจากปัญญาประดิษฐ์และฐานข้อมูลขนาดใหญ่ของการพิมพ์ภาษาไทยในยุคปัจจุบัน
        พิมพ์ง่ายกว่าแป้นพิมพ์เกษมณีถึง 45%
      </p>
      <div className="mt-12">
        <a
          href="#download"
          className="border-2 border-gray-500 bg-gray-500 text-white text-xl px-8 py-4 mx-2 rounded hover:bg-gray-700 transition duration-200 ease-in-out delay-600"
        >
          ดาวน์โหลด
        </a>
        <a
          href="https://manoontype.web.app"
          className="border-2 border-gray-500 bordered text-xl px-8 py-4 mx-2 rounded hover:bg-gray-700 hover:text-white transition duration-200 ease-in-out delay-600"
          target="_blank"
          rel="noreferrer"
        >
          ทดลองพิมพ์
        </a>
      </div>
    </section>
  );
}
