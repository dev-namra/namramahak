const ChallengesSolutionsTable = ({
  challenges = [],
  solutions = [],
  challengeHeading = "Challenges",
  solutionHeading = "How We Solved These",
}) => {
  return (
    <div className="max-w-6xl mx-auto overflow-x-auto">
      <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-semibold text-red-600 border-r border-gray-300 font-Berlleigh">
              {challengeHeading}
            </th>
            <th className="px-6 py-3 text-left text-lg font-semibold text-green-600 font-Berlleigh">
              {solutionHeading}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 bg-white font-spaceGrotesk">
          {challenges.map((challenge, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 align-top border-r border-gray-300 font-spaceGrotesk">
                {challenge}
              </td>
              <td className="px-6 py-4 align-top font-spaceGrotesk">
                {solutions[idx]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChallengesSolutionsTable;
