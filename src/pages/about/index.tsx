import { Nav } from "../../Components/nav/nav";
import coin from "../../assets/imgs/Sheriff-Coin 1-min.png";
import bulletDown from "../../assets/imgs/bulet-down-min.png";
import { Container } from "../../Components/container/container";
import { ArrowButton } from "../../Components/arrow-button/arrow-button";

export const About = () => {
  return (
    
    <Container>
      <Nav />
      <div className="text-center md:mb-32 mb-20">
        <h1 className=" lg:text-7xl md:text-5xl text-4xl text-primary uppercase font-cowBoys">SHERIFF TOKEN</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-4 lg:px-32 md:px-16 px-4 mx-auto font-serif mb-24 justify-center lg:grid-rows-1 grid-rows-2">
      <img src={coin} alt="" className="" />
        <div className="flex flex-col md:items-start items-center  md:justify-center justify-start md:pt-0 pt-8">
          <h2 className="mb-4 text-5xl text-primary md:text-left text-center font-cowBoys">about <br/> SHERIFF TOKEN</h2>
          <p className="text-xl m-0 leading-10 md:text-left text-center mb-6">
            “There’s a new sheriff in town!”.
            In a space like the BSC, at times it sure can feel like the lawless days of the Wild West.
            Introducing Shiba $heriff, your solution to the rugs and scams that plague this network.
          </p>
          <ArrowButton>Connect Wallet</ArrowButton>
        </div>
      </div>
      <div className="bullet absolute sm:right-56 right-12 bottom-6 w-4">
        <img src={bulletDown} className='' alt="" />
      </div>
    </Container>
  );
};
