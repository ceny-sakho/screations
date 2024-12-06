import Navigation from '../../components/Navigation';

const Cupcakes = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Cupcakes
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1587668178277-295251f900ce" 
              alt="Cupcake Example" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-2">Cupcakes Vanille</h2>
              <p className="text-gray-600 mb-4">Délicieux cupcakes à la vanille avec glaçage au beurre.</p>
              <p className="text-accent font-semibold">4€ pièce</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cupcakes;