
import valut from "../../assets/imgs/valut-min.png";
import { BulletHeading } from "../../Components/bullet-heading/bullet-heading";
import { BulletHole } from "../../Components/bullet-holes/bullet-holes";
import { Container } from "../../Components/container/container";
import { Nav } from "../../Components/nav/nav";
import Select from "react-select";
import { components } from "react-select";
import { useState } from "react";
import bulletDown from "../../assets/imgs/buulet-down.png"

export const BuyChart = () => {
  const options = [
    { value: 'Token 1', label: 'Token 1' },
    { value: 'Token 2', label: 'Token 2' },
    { value: 'Token 3', label: 'Token 3' },
    { value: 'Token 4', label: 'Token 4' },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles, 
      backgroundColor: '#754C24',
      borderRadius: 10, borderColor: 'transparent',
      color: '#fff',
      height: '40px'
    }),
    container: (styles: any) => ({ ...styles, backgroundColor: '#754C24', borderRadius: 10, color: '#fff', height: '40px' }),
    menu: (styles: any) => ({ ...styles, backgroundColor: '#754C24', borderRadius: 10, }),
    menuList: (styles: any) => ({ ...styles, backgroundColor: '#754C24', borderRadius: 10, }),
    option: (styles:any, { isDisabled, isFocused, isSelected }:any) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? "#754C24"
          : isSelected
          ? '#754C24'
          : isFocused
          ? "#754C24"
          : "#754C24",
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? '#fff'
          : "#fff",
        cursor: isDisabled ? 'not-allowed' : 'default',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius: 0,
  
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? "#754C24"
              : "#754C24"
            : undefined,
          color: isDisabled
          ? '#ccc'
          : isSelected
          ? '#fff'
          : "#fff",
        },
      };
    },
  };

  const { DropdownIndicator } = components;
  const [selectedOption, setSelectedOption] = useState(null);
  const CustomDropdownIndicator = (props:any) => {
    const {
      selectProps: { menuIsOpen }
    } = props;
    return (
      <DropdownIndicator className="indicator" {...props}>
        {menuIsOpen ? <img src={bulletDown} className="w-2 mr-4" alt=""/> : <img src={bulletDown} className="rotate-180 w-2 mr-4" alt=""/>}
      </DropdownIndicator>
    );
  };

  return (
    <Container>
      <Nav />
      <BulletHole numbers={5} />
      <div className="text-center md:mb-40 mb-24">
        <h1 className=" lg:text-7xl md:text-5xl text-4xl text-primary uppercase">SHERIFF TOKEN</h1>
        <h2 className=" lg:text-6xl md:text-4xl text-3xl text-primary uppercase">rewards dashboard</h2>
      </div>

      <div className="text-center mb-8">
        <h2 className="lg:text-5xl md:text-3xl text-2xl text-primary uppercase">bounty vault</h2>
      </div>
      <div className="flex justify-center mb-16">
        <img className="w-80 mx-auto" src={valut} alt="" />
      </div>

      <div className="text-center mb-40">
        <p className=" text-3xl text-primary uppercase">(TOTAL VALUE HERE)</p>
        <p className=" text-lg text-primary uppercase">(PER PERSON SHARE HERE)</p>
      </div>

      <div className="flex flex-col items-center  justify-center mb-16 lg:w-2/6 md:w-3/6 w-5/6 mx-auto">
        <label className="mb-4 text-lg font-serif" htmlFor="">Enter Wallet Address Here</label>
        <Select
          defaultValue={selectedOption}
          components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: () => null }}
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          onChange={() => { setSelectedOption }}
          options={options}
          className="react-select-container font-serif"
          styles={colourStyles}
        />

      </div>

      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 xl:px-72 lg:px-56 md:px-36 sm:px-12 px-0 mx-auto font-serif mb-36 justify-items-center">
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">01</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">02</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">03</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">04</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">05</h1>
        </div>
        <div className=" bg-contain bg-center text-primary bg-star hover:bg-starFilled hover:text-white bg-no-repeat sm:h-48 sm:w-48 h-36 w-36 flex items-center justify-center">
          <h1 className="text-4xl  m-0 leading-6 font-serif">06</h1>
        </div>
      </div>

      <div className="text-center mb-8">
        <BulletHeading>ADD TO WALLET</BulletHeading>
      </div>
    </Container>
  );
};
