import Form from "./_components/Form";

export default function App() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full h-4/5 rounded-[4rem] overflow-hidden border my-5 bg-gray-50 border-gray-200 shadow-2xl">
        <div className="flex items-center justify-center h-full">
          <Form />
        </div>
      </div>
    </div>
  );
}
