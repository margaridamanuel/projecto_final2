type StepperProps = {
  currentStep: number;
};

const steps = ["Informações", "Localização", "Serviços", "Fotografias"];

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const numero = index + 1;
          const ativo = numero <= currentStep;

          return (
            <div key={step} className="flex-1 flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300
                  ${
                    ativo
                      ? "bg-orange-600 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {numero}
                </div>

                <span
                  className={`mt-3 text-sm font-medium text-center
                  ${ativo ? "text-orange-700" : "text-gray-500"}`}
                >
                  {step}
                </span>
              </div>

              {numero !== steps.length && (
                <div
                  className={`flex-1 h-1 mx-4 rounded-full
                  ${numero < currentStep ? "bg-orange-600" : "bg-gray-300"}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
