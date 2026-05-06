import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/swiper.css";
import { projects } from "../../static/projectData";
import ProjectSlide from "./ProjectSlide";

const ProjectCarousel: React.FC = () => {
  return (
    <section className="py-16 bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={50}
          slidesPerView={1}
          className="project-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectSlide project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectCarousel;
