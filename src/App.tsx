import MultiStepForm from "./components/MultiStepForm";
import "./index.css";

function App() {

  return (
    <div className="w-screen h-screen bg-white flex flex-col p-4">
      <h1 className="text-gray-900 text-lg md:text-2xl font-bold mb-4">
        Noovid - Multi Step Form Challenge | Pablo
      </h1>
      <MultiStepForm isLastStep isSaving={false}  />
    </div>
  );
}

export default App;
