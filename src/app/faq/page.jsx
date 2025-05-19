export default function Page() {
  return (
    <div 
      className="min-h-screen p-8 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('https://i.imgur.com/XzpC6RF.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Semi-transparent overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* FAQ content with improved visibility */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-green-300 mb-4 drop-shadow-lg">
          FAQ
        </h1>
        {/* Add your FAQ content here */}
      </div>
    </div>
  );
}