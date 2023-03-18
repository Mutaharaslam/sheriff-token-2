import { Nav } from "../../Components/nav/nav";
import coin from "../../assets/imgs/Sheriff-Coin 1-min.png";
import { Container } from "../../Components/container/container";
import { BulletHole } from "../../Components/bullet-holes/bullet-holes";
import { ArrowButton } from "../../Components/arrow-button/arrow-button";

export const About = () => {
  return (
    <Container>
      <Nav />
      <BulletHole numbers={6}/>
      <div className="text-center md:mb-40 mb-20">
        <h1 className=" lg:text-7xl sm:text-5xl text-4xl text-primary uppercase">SHERIFF TOKEN</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-4 lg:px-32 md:px-16 px-4 mx-auto font-serif mb-36 justify-center lg:grid-rows-1 grid-rows-2">
        <div className="">
          <img src={coin} alt="" className="" />
        </div>
        <div className="flex flex-col md:items-start items-center  justify-center">
          <h2 className="mb-4 text-5xl font-sans text-primary md:text-left text-center">about <br/> SHERIFF TOKEN</h2>
          <p className="text-xl m-0 leading-10 md:text-left text-center mb-6">
            “There’s a new sheriff in town!”.
            In a space like the BSC, at times it sure can feel like the lawless days of the Wild West.
            Introducing Shiba $heriff, your solution to the rugs and scams that plague this network.
          </p>
          <ArrowButton>Connect Wallet</ArrowButton>
        </div>
      </div>
    </Container>
  );
};
