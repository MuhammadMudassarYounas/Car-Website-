import React from 'react'

function InfoSection() {
  return (
<section className="bg-gray-100 py-16">
  <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      
      {/* Image Section */}
      <div>
        <img
          src="https://get.wallhere.com/photo/sport-sunset-car-vehicle-McLaren-sports-car-McLaren-MP4-12C-gray-performance-car-MP4-12C-supercar-land-vehicle-automotive-design-automobile-make-luxury-vehicle-mclaren-automotive-587950.jpg"
          className="rounded-lg w-full h-auto object-cover"
          alt="Car"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
        </h2>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem est esse numquam odio
          deleniti, beatae, magni dolores provident.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </div>
    </div>
  </div>
</section>

  )
}

export default InfoSection