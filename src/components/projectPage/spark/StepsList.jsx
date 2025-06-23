const StepsList = () => {
  const steps = [
    {
      id: 1,
      title: "Login",
      description: "Sign up with your email and password.",
    },
    {
      id: 2,
      title: "Authenticate your data",
      description:
        "Secure Access: The application authenticates users via Autodesk ID. After signing in, users are required to authorize the app to access data. Once the permission is granted, the app retrieves data directly from BIM 360, ensuring accuracy and security.",
    },
    {
      id: 3,
      title: "Model Browser",
      description:
        "Browse all your projects easily. Click on cards to quickly load and display your selected model.",
    },
    {
      id: 4,
      title: "Viewer",
      description:
        "Interact with the 3D model, view specific elements, and analyze properties on the main screen.",
    },
  ];

  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {/* Cards + connector line */}
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        {/* Horizontal line */}
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
        </div>

        {/* Step Cards */}
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative z-10 p-5 transition-transform duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-lg font-bold leading-5 text-gray-900">
                {step.title}
              </p>
              <p className="flex items-center justify-center w-6 h-6 font-bold rounded-full bg-blue-100 text-blue-800">
                {step.id}
              </p>
            </div>
            <p className="text-sm text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsList;
