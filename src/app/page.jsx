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
    </div>
  );
}