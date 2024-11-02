function Book() {
    return (
      <div>
        <section className="h-full w-full bg-blue-ncs m-auto flex justify-center p-[8em]">
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col gap-3">
              <label
                className="tracking-wide font-poppins text-lg text-white"
                htmlFor="destination"
              >
                Search Destination*
              </label>
              <input
                className="text-[#838383] pt-4 pb-4 pl-3 pr-10 rounded-full focus:outline-none"
                type="text"
                placeholder="Enter Destination"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                className="tracking-wide font-poppins text-lg text-white"
                htmlFor="people"
              >
                Pax Number*
              </label>
              <input
                className="text-[#838383] pt-4 pb-4 pl-3 pr-10 rounded-full focus:outline-none"
                type="text"
                placeholder="No Of People"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                className="tracking-wide font-poppins text-lg text-white"
                htmlFor="destination"
              >
                Checkin Date*
              </label>
              <input
                className="text-[#838383] pt-4 pb-4 pl-3 pr-20 rounded-full focus:outline-none"
                type="date"
                placeholder="Enter Checkin Date"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                className="tracking-wide font-poppins text-lg text-white"
                htmlFor="destination"
              >
                Checkout Date*
              </label>
              <input
                className="text-[#838383] pt-4 pb-4 pl-3 pr-20 rounded-full focus:outline-none"
                type="date"
                placeholder="Enter Checkout Date"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Book;
  