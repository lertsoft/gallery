import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Cinematography = () => (
  // return ();
  <Main meta={<Meta title="Cinematography" description="Cinematography" />}>
    <div className=" my-10 ml-14 text-xl font-bold">
      <h1> Work as Camera Assistant </h1>
    </div>

    <div className=" my-10 ml-14 object-center ">
      <iframe
        src="https://www.youtube.com/embed/X52cKIhJTdI"
        // name="myiFrame"
        scrolling="no"
        className="aspect-video w-full"
        frameBorder="1"
        height="400px"
        width="600px"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className=" my-10 ml-14 object-center ">
      <iframe
        src="https://www.youtube.com/embed/sA_Uk9Tpp8c"
        // title="YouTube video player"
        className="aspect-video w-full"
        frameBorder="1"
        height="400px"
        width="600px"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </Main>
);

export default Cinematography;
