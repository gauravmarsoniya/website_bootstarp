import Hero from './Hero';
import Banner from './Banner';
import Features from './Features';
import OurServices from './OurServices';
import Technologies from './Technologies';
import Testimonial from './Testimonial';
import Who from './Who';
import CallToAction from '@client/ui/core/CallToAction/CallToAction';
const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />

      <Features />
      <Who />
      <CallToAction />
      <Testimonial />
      <main>
        {/* <Banner />
        <Features />
        <OurServices />
        <Technologies />
        <Testimonial /> */}
      </main>
    </>
    // <OurServices />
  );
};

export default Home;
