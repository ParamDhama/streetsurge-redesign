import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="w-full h-64" style={{ perspective: '1000px' }}>
      <div className="group relative w-full h-full">
        {/* Inner container for flip animation */}
        <div
          className="card relative w-full h-full transition-transform duration-700"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 bg-bottom bg-cover rounded-lg shadow-md flex flex-col items-center justify-center p-4"
            style={{ 
              backfaceVisibility: 'hidden',
              backgroundImage: `url(${service.icon})`
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="absolute z-10 text-center text-white">
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          </div>
          {/* Back Side */}
          <div
            className="absolute inset-0 rounded-lg shadow-md bg-gray-700 flex items-center justify-center p-4"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="text-white text-center">{service.description}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .group:hover .card {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
