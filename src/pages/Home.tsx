
import banner from '@/assets/images/banner.png';
import hero from '@/assets/images/hero.png';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Footer from '../layout/Footer';


export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            Best  Books
          </h1>
          <p className="text-secondary font-semibold text-xl">
            A book is a number of pieces of paper, usually with words printed on them,<br /> which are fastened together and fixed inside a cover of stronger paper or cardboard
          </p>
          <div className="text-primary mt-20">
            <p>The books are available in a digitized form for reading .<br/> on different devices such as computers, laptops, tablets, and smartphones</p>
           
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="relative -right-14">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mb-96">
        <div>
          <img className="mx-auto" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            The future of Books is here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/allbooks">Brows all Books</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
