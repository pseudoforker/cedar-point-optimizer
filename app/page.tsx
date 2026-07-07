export default function Home() {
  const rides = [
    {
      name: "Steel Vengeance",
      wait: 45,
      priority: 10,
      reason: "Top priority coaster",
    },
    {
      name: "Maverick",
      wait: 25,
      priority: 9,
      reason: "Usually develops a long wait",
    },
    {
      name: "Millennium Force",
      wait: 35,
      priority: 9,
      reason: "Major must-ride",
    },
    {
      name: "Top Thrill 2",
      wait: 60,
      priority: 10,
      reason: "High demand / limited capacity",
    },
    {
      name: "Valravn",
      wait: 20,
      priority: 7,
      reason: "Good current opportunity",
    },
  ];

  const recommendedRide = [...rides].sort(
    (a, b) => b.priority / b.wait - a.priority / a.wait
  )[0];

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold">
        🎢 Cedar Point Optimizer
      </h1>

      <p className="mt-2 text-gray-600">
        Hotel Breakers • Early Entry Mode
      </p>

      <div className="mt-6 rounded-xl bg-blue-600 p-5 text-white">
        <h2 className="text-xl font-bold">
          Ride This Next
        </h2>

        <div className="mt-3 text-3xl font-bold">
          {recommendedRide.name}
        </div>

        <p className="mt-2">
          Current wait: {recommendedRide.wait} minutes
        </p>

        <p className="mt-2">
          Why: {recommendedRide.reason}
        </p>
      </div>

      <h2 className="mt-8 text-xl font-bold">
        Ride Rankings
      </h2>

      <div className="mt-4 space-y-3">
        {rides.map((ride) => (
          <div
            key={ride.name}
            className="rounded-xl bg-white p-4 shadow"
          >
            <h3 className="text-lg font-bold">
              {ride.name}
            </h3>

            <p>
              Wait: {ride.wait} minutes
            </p>

            <p>
              Priority: {ride.priority}/10
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}