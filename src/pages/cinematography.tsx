// import TrailingImage from '@/components/trailingImage';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Cinematography = () => (
  <Main meta={<Meta title="Cinematography" description="Cinematography" />}>
    {/* <TrailingImage /> */}
    <div className=" my-10 text-xl font-bold">
      <h1> Work as Camera Assistant </h1>
    </div>

    <div className=" my-10 object-center " id="Nataly music video">
      <iframe
        src="https://www.youtube.com/embed/FHrPQUn8md4"
        // title="YouTube video player"
        className="aspect-video w-full"
        frameBorder="1"
        height="400px"
        width="600px"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className=" my-10 object-center " id="Moet Proof of concept">
      <iframe
        src="https://www.youtube.com/embed/dYJqEJXvOLg"
        // title="YouTube video player"
        className="aspect-video w-full"
        frameBorder="1"
        height="400px"
        width="600px"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className=" my-10 object-center " id="Cartier Proof of concept">
      <iframe
        src="https://www.youtube.com/embed/_yljDl1DffQ"
        // title="YouTube video player"
        className="aspect-video w-full"
        frameBorder="1"
        height="400px"
        width="600px"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className=" my-10 object-center " id="Worship in the city">
      <iframe
        src="https://www.youtube.com/embed/jzrYKLWRaVU"
        // name="myiFrame"
        className="aspect-video w-full"
        frameBorder="1"
        height="400px"
        width="600px"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className=" my-10 object-center " id="Euphoria - Stephen the artist">
      <iframe
        src="https://www.youtube.com/embed/X52cKIhJTdI"
        // name="myiFrame"
        className="aspect-video w-full"
        frameBorder="1"
        height="400px"
        width="600px"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className=" my-10 object-center " id="Raja for Mayor Ad">
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

    <div className=" my-10 text-xl font-bold">
      <h1> Work as Assistant Director </h1>
    </div>

    <div className=" my-10 object-center " id="Hippeas Snacks">
      <iframe
        src="https://player.vimeo.com/video/646149188?h=0e046ba386"
        // title="YouTube video player"
        className="aspect-video w-full"
        frameBorder="1"
        height="800px"
        width="400px"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </Main>
);

export default Cinematography;
