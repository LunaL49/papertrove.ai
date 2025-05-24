export default function Error() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full h-4/5 rounded-[4rem] overflow-hidden border my-5 bg-gray-50 border-gray-200 shadow-2xl">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-xl font-bold text-gray-700 text-center mb-2">
            All done.
          </div>

          <div className="text-md text-gray-500 text-center mb-2 w-3/4">
            Best of luck with your journey ahead!
          </div>
        </div>
      </div>
    </div>
  );
}
