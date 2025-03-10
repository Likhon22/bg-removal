import { plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Choose Your Credits Plan
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Select the right credit package for your needs. More credits mean more
        images processed at a better value.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-2">{plan.id}</h2>
              <p className="text-gray-600 text-sm">{plan.desc}</p>
            </div>

            <div className="text-center mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 flex items-center justify-center gap-2">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-violet-100"></div>
              <span className="text-xl font-bold">{plan.credits} Credits</span>
            </div>

            <button
              className={`mt-auto rounded-full py-3 px-4 text-white font-medium ${
                plan.id === "Advanced"
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-500"
                  : "bg-zinc-800"
              } hover:opacity-90 transition-opacity`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
