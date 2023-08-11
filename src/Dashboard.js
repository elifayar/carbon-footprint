import React, { useState } from 'react';
import { 
    DashboardContainer, LeftNav, NavButton, TopRight, ProfileOption,ContentArea,ContentWrapper,InputWrapper,Label,Input,
    SubmitButton,InfoBox,InfoTitle,InfoParagraph,InfoList,InfoListItem,InfoHeader
} from './DashboardStyle.js';

export const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("My Carbon Footprint");
  const [userData, setUserData] = useState({
    carModel: '',
    gasType: '',
    monthlyDistance: '',
    co2e: ''
  });
  const [co2eValue, setCo2eValue] = useState(0);

  return (
    <DashboardContainer>
      <LeftNav>
        <NavButton onClick={() => setSelectedOption("My Carbon Footprint")}>
          My Carbon Footprint
        </NavButton>
        <NavButton onClick={() => setSelectedOption("Calculator")}>
          Calculator
        </NavButton>
        <NavButton onClick={() => setSelectedOption("Information")}>
          Information
        </NavButton>
      </LeftNav>

      <ContentArea>
        {selectedOption === "My Carbon Footprint" && <MyCarbonFootprint userData={userData} />}
        {selectedOption === "Calculator" && <Calculator setCo2eValue={setCo2eValue} setUserData={setUserData} setSelectedOption={setSelectedOption} />}
        {selectedOption === "Information" && <Information />}
      </ContentArea>

      <TopRight>
        <ProfileOption>Profile</ProfileOption>
        <ProfileOption>Settings</ProfileOption>
        <ProfileOption>Logout</ProfileOption>
      </TopRight>
    </DashboardContainer>
  );
};

const MyCarbonFootprint = ({ userData }) => {
    return (
        <ContentWrapper>
            <InfoTitle>My Carbon Footprint</InfoTitle>
            {Object.entries(userData).map(([key, value]) => (
                value && <InfoBox key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</InfoBox>
            ))}
        </ContentWrapper>
    );
};
  
const Calculator = ({ setCo2eValue, setUserData }) => {
    const [carModel, setCarModel] = useState('');
    const [gasType, setGasType] = useState('');
    const [monthlyDistance, setMonthlyDistance] = useState('');
    const [selectedOption, setSelectedOption] = useState("My Carbon Footprint");

    const handleCalculate = (e) => {
        e.preventDefault();
        const co2e = monthlyDistance * 0.19;
        setCo2eValue(co2e);
        setUserData({
          carModel: carModel || "N/A",
          gasType: gasType || "N/A",
          monthlyDistance: monthlyDistance || "0",
          co2e: co2e.toString() || "0"
        });
        setSelectedOption("My Carbon Footprint");
      };
      
  
    return (
        <ContentWrapper>
            <InfoTitle>CO2e Calculator</InfoTitle>
            <form onSubmit={handleCalculate}>
                <InputWrapper>
                    <Label>Car Model:</Label>
                    <Input value={carModel} onChange={(e) => setCarModel(e.target.value)} />
                </InputWrapper>
                <InputWrapper>
                    <Label>Gas Type:</Label>
                    <Input value={gasType} onChange={(e) => setGasType(e.target.value)} />
                </InputWrapper>
                <InputWrapper>
                    <Label>Average Monthly Distance:</Label>
                    <Input value={monthlyDistance} onChange={(e) => setMonthlyDistance(e.target.value)} />
                </InputWrapper>
                <SubmitButton type="submit">Calculate</SubmitButton>
            </form>
        </ContentWrapper>
    );
};

const Information = () => {
    return (
        <ContentWrapper>
            <InfoTitle>Information on Carbon Footprint</InfoTitle>
            
            <h2>What is a Carbon Footprint?</h2>
            <p>A carbon footprint represents the total amount of greenhouse gases, particularly carbon dioxide, emitted directly or indirectly by human activities. This can be calculated for an individual, a household, an organization, or even a product. It's expressed as a CO2 equivalent (CO2e) to factor in the various greenhouse gases and their potency.</p>
            
            <h2>Why is it Important?</h2>
            <p>As the global climate continues to change, it's more important than ever to understand and reduce our carbon footprint. Human activities, like burning fossil fuels or deforestation, release vast amounts of CO2 into the atmosphere. This buildup acts like a blanket, trapping heat and resulting in global warming. Addressing our carbon footprint is vital for stabilizing global temperatures, preserving ecosystems and biodiversity, and ensuring the health and safety of future generations.</p>
            
            <h2>How Can It Be Reduced?</h2>
            <ul>
                <li><strong>Carbon Offsetting:</strong> Investing in projects that capture or prevent the emission of equivalent CO2, such as reforestation or renewable energy projects.</li>
                <li><strong>Sustainable Transportation:</strong> Opting for public transport, carpooling, biking, or walking can drastically reduce the emissions associated with personal travel.</li>
                <li><strong>Energy Efficiency:</strong> Using energy-efficient appliances and insulation can lower electricity consumption, thus reducing the carbon footprint of households.</li>
                <li><strong>Dietary Changes:</strong> A plant-based diet typically has a lower carbon footprint than diets rich in meat and dairy, which are resource-intensive to produce.</li>
                <li><strong>Supporting Renewables:</strong> Advocating for and using renewable energy sources like wind, solar, and hydroelectric power helps decrease our reliance on fossil fuels.</li>
            </ul>
            
            <h2>Deforestation and its Impact</h2>
            <p>Deforestation is the act of clearing vast expanses of forests, often to make way for agriculture or urban development. This not only releases the carbon stored in trees but also eliminates a significant carbon sink, as forests absorb CO2 from the atmosphere. Deforestation contributes to loss of biodiversity, disruption of water cycles, soil erosion and desertification, and amplification of global warming.</p>
            
            <h2>Tips for a Sustainable Future:</h2>
            <ul>
                <li><strong>Educate & Advocate:</strong> Knowledge is power. The more people understand about carbon footprints and climate change, the more change we can collectively instigate.</li>
                <li><strong>Reduce, Reuse, Recycle:</strong> Minimize waste by following these principles in daily life.</li>
                <li><strong>Support Sustainable Brands:</strong> Opt for products from companies with strong environmental ethics.</li>
                <li><strong>Plant Trees:</strong> Reforestation is crucial. Consider supporting or joining tree-planting initiatives in your community.</li>
                <li><strong>Stay Informed:</strong> Climate science is evolving. Regularly update yourself on new findings and adjust your actions accordingly.</li>
            </ul>
        </ContentWrapper>
    );
};




