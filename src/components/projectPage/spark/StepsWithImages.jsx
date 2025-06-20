const StepsWithImages = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1: Login with Autodesk ID",
      description: "Sign up with your email and password.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Step 2: Authenticate you data",
      description:
        "Secure Access: The application authenticates users via Autodesk ID. After signing in, users are required to authorize the app to access data. Once the permission is granted, the app retrieves data directly from BIM 360, ensuring accuracy and security.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      title: "Step 3: Model Browser",
      description:
        "The app is automatically showing you all the users projects for each group and making them easy to browse with clickable cards. When you click on things like Go to Model,it quickly loads and displays what you selected, so you can work with your projects smoothly and easily.",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      title: "Step 3: Model Browser",
      description:
        "The app is automatically showing you all the users projects for each group and making them easy to browse with clickable cards. When you click on things like Go to Model,it quickly loads and displays what you selected, so you can work with your projects smoothly and easily.",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-8 p-6">
      {steps.map((step) => (
        <div
          key={step.id}
          className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-white shadow-lg rounded-lg p-4 w-full max-w-3xl"
        >
          <img
            src={step.image}
            alt={step.title}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepsWithImages;
