function Ending() {
  return (
    <div>
        <section className="flex flex-col md:flex-row justify-center h-full w-full bg-blue-ncs py-20 px-10 items-center">
            <div className="text-center md:text-start flex flex-col gap-3">
                <span className="text-white uppercase tracking-[1px] text-[0.7em] md:text-[0.8em] text-md font-poppins">Call To Action</span>
                <h2 className="text-white font-bold text-[1.2em] md:text-[1.8em] xl:text-5xl tracking-[1px] leading-[1.1] max-w-[500px] xl:max-w-[800px] uppercase">Ready For Unforgatable Travel. Remember Us!</h2>
                <p className="max-w-[500px] tracking-[0.2px] text-white text-[0.7em] md:text-[0.8em]">Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
            </div>
            <div className="items-center mt-4">
            <button className="py-2 px-4 text-white text-md uppercase bg-none border rounded-full tracking-[1px] transition-full duration-500 hover:bg-gainsboro hover:text-blue-ncs">Contact Us !</button>
            </div>
        </section>
    </div>
  )
}

export default Ending;