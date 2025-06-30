const StepsListIoTAtlas = () => {
  const steps = [
    {
      id: 1,
      title: "Sign In",
      description:
        "Log in securely with your organization credentials to access the IoT Atlas dashboard.",
    },
    {
      id: 2,
      title: "Device Onboarding",
      description:
        "Add new IoT devices using guided forms with built-in validation, ensuring accurate and efficient onboarding.",
    },
    {
      id: 3,
      title: "Real-Time Monitoring",
      description:
        "View live data streams from all connected devices. Instantly visualize metrics and device status on interactive dashboards.",
    },
    {
      id: 4,
      title: "Search & Manage Devices",
      description:
        "Easily search, filter, and manage large numbers of devices and data streams with advanced management tools.",
    },
  ];

  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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

export default StepsListIoTAtlas;
