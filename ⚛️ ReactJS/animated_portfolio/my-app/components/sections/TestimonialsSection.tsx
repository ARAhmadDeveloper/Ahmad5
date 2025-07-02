import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";



export default function TestimonialsSection(){

    const testimonials = [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "CEO at TechVision",
          content:
            "Working with Ahmad was an absolute pleasure. His attention to detail and creative problem-solving skills transformed our website into something truly special.",
          avatar:
            "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20confident%20businesswoman%20with%20short%20blonde%20hair%20and%20friendly%20smile%2C%20neutral%20background%2C%20corporate%20executive%20profile%20photo%20with%20soft%20lighting%2C%20high%20quality%20professional%20photography%20with%20shallow%20depth%20of%20field&width=100&height=100&seq=7&orientation=squarish",
        },
        {
          id: 2,
          name: "Michael Chen",
          role: "Product Manager at InnovateCo",
          content:
            "Ahmad delivered our mobile application ahead of schedule and exceeded all our expectations. His technical expertise and communication skills made the entire process seamless.",
          avatar:
            "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20an%20Asian%20businessman%20with%20glasses%20and%20neat%20short%20black%20hair%2C%20neutral%20background%2C%20corporate%20executive%20profile%20photo%20with%20soft%20lighting%2C%20high%20quality%20professional%20photography%20with%20shallow%20depth%20of%20field&width=100&height=100&seq=8&orientation=squarish",
        },
        {
          id: 3,
          name: "Emily Rodriguez",
          role: "Marketing Director at CreativeHub",
          content:
            "The website Ahmad created for us perfectly captures our brand essence. His understanding of UX principles and modern design trends resulted in a significant increase in user engagement.",
          avatar:
            "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20latina%20woman%20with%20long%20dark%20hair%20and%20professional%20attire%2C%20neutral%20background%2C%20corporate%20executive%20profile%20photo%20with%20soft%20lighting%2C%20high%20quality%20professional%20photography%20with%20shallow%20depth%20of%20field&width=100&height=100&seq=9&orientation=squarish",
        },
      ];


    return(
        <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 relative inline-block">
            Client Testimonials
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic flex-grow">
                    {testimonial.content}
                  </p>
                  <div className="mt-6 text-yellow-500">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    )
}