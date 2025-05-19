export default function Error() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full h-4/5 rounded-[4rem] overflow-hidden border my-5 bg-gray-50 border-gray-200 shadow-2xl">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-xl font-bold text-gray-700 text-center mb-2">
            Oops, something went wrong...
          </div>

          <div className="text-md text-gray-500 text-center mb-2 w-3/4">
            Sorry about that, would you mind filling out the form again? Click
            on the logo above to start again.
          </div>
        </div>
      </div>
    </div>
  );
}
