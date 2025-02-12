function Book() {
  return (
      <div className="h-full w-full bg-blue-ncs flex justify-center py-16">
          <section className="flex flex-wrap    justify-center  w-full gap-10 p-5">
              <div className="flex flex-col gap-3 w-full sm:w-1/2 md:w-1/4">
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
              <div className="flex flex-col gap-3 w-full sm:w-1/2 md:w-1/4">
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
              <div className="flex flex-col gap-3 w-full sm:w-1/2 md:w-1/4">
                  <label
                      className="tracking-wide font-poppins text-lg text-white"
                      htmlFor="checkin"
                  >
                      Checkin Date*
                  </label>
                  <input
                      className="text-[#838383] pt-4 pb-4 pl-3 pr-10 rounded-full focus:outline-none"
                      type="date"
                  /> 
              </div>
              <div className="flex flex-col gap-3 w-full sm:w-1/2 md:w-1/4">
                  <label
                      className="tracking-wide font-poppins text-lg text-white"
                      htmlFor="checkout"
                  >
                      Checkout Date*
                  </label>
                  <input
                      className="text-[#838383] pt-4 pb-4 pl-3 pr-10 rounded-full focus:outline-none"
                      type="date"
                  />
              </div>
          </section>
      </div>
  );
}

export default Book;