import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
      <div id="carouselExampleCaptions" className="" data-bs-ride="carousel">
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50">
          <iframe
            className=""
            src="https://www.youtube.com/embed/X52cKIhJTdI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="">
            <h3 className=""> Camera assistant (AC) </h3>
          </div>
        </div>
        <div className="absolute inset-0 h-full  overflow-hidden bg-black bg-fixed opacity-0">
          <div className="">
            <iframe
              className=""
              src="https://www.youtube.com/embed/sA_Uk9Tpp8c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="">
              <h3 className=""> Camera assistant (AC)</h3>
            </div>
          </div>
        </div>
      </div>
    </p>
  </Main>
);

export default About;
