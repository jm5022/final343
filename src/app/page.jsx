export default function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 text-center"
      style={{
        backgroundImage: "url('https://i.imgur.com/ckzNDYd.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Text content with white color and z-index to appear above overlay */}
      <div className="relative z-10 text-white">
        <h1 className="text-8xl md:text-9xl font-bold mb-6 drop-shadow-lg">Final Exam 343</h1>
        <h2 className="text-6xl md:text-7xl font-semibold mb-4 drop-shadow-md">Mei, Jason</h2>
        <h3 className="text-5xl md:text-6xl drop-shadow-sm">Spring 2025</h3>
      </div>

      {/* Photography Package Price List section */}
      <div className="relative z-10 w-full p-8 mt-8">
        <div className="backdrop-blur-sm bg-black/70 p-8 rounded-lg max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-500 mb-6 text-center">
            Photography Package Price List
          </h1>
          <p className="text-yellow-300 text-lg mb-8 text-center">
            Driven by passion, focused on perfection - Showcase your vehicle with world-class automotive photography.
          </p>
          
          <ol className="list-decimal list-inside space-y-4 text-yellow-200">
            <li className="bg-yellow-500/10 p-3 rounded-lg text-center backdrop-blur-sm
                          hover:bg-yellow-200/80 hover:text-gray-900 transition-colors duration-300">
              Basic Package: $120<br />
              <span className="text-sm text-yellow-300/80 hover:text-gray-700">
                15-20 edited photos at 2-3 locations
              </span>
            </li>

            <li className="bg-yellow-500/10 p-3 rounded-lg text-center backdrop-blur-sm
                          hover:bg-yellow-200/80 hover:text-gray-900 transition-colors duration-300">
              Standard Package: $150<br />
              <span className="text-sm text-yellow-300/80 hover:text-gray-700">
                20-30 edited photos with at least 3 locations including a 30 second edited reel at each location
              </span>
            </li>

            <li className="bg-yellow-500/10 p-3 rounded-lg text-center backdrop-blur-sm
                          hover:bg-yellow-200/80 hover:text-gray-900 transition-colors duration-300">
              Premium Package: $250<br />
              <span className="text-sm text-yellow-300/80 hover:text-gray-700">
                20-30 edited photos with at least 3 locations including a 30 second edited reel at each location and roller footage in between locations
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}