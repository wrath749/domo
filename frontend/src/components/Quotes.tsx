function Quote() {
  return (
    <div className="flex justify-center items-center h-screen bg-white text-black ">
      <div className="max-w-lg ">
        <div className="font-bold text-3xl py-4">
          "Wellness is the complete integration of body, mind, and spirit - the
          realization that everything we do, think, feel, and believe affects
          our state of well-being"
        </div>
        <div className="font-semibold text-xl">Greg Anderson</div>
        {/* <div className="text-md">CEO | Acme Inc</div> */}
      </div>
    </div>
  );
}

export default Quote;
