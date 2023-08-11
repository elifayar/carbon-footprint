import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #eaf2e3;
`;

export const LeftNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2c3e4c;
  color: white;
  height: 100vh;  
  min-width: 200px;
  position: fixed;  
  top: 0;
  left: 0;
`;

export const NavButton = styled.button`
  background-color: #4a7d7e; 
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5E81AC;  
  }
`;

export const TopRight = styled.div`
  display: flex;
  position: absolute;
  top: 20px;  
  right: 20px;  
  gap: 20px;  
`;


export const ProfileOption = styled.div`
  background-color: #2c3e4c;  
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1b2d3b;  
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
`;

export const ContentWrapper = styled.div`
    padding: 20px;
    background-color: #f7f9fc;
    border-radius: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 20px;
`;

export const InputWrapper = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

export const SubmitButton = styled.button`
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #45a049;
    }
`;

export const InfoBox = styled.div`
    margin: 10px 0;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const InfoTitle = styled.h2`
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-size: 24px;
`;

export const InfoHeader = styled.h2`
    font-size: 1.8em;
    margin-top: 20px;
    margin-bottom: 15px;
    color: #003366; // Deep blue color to signify importance
`;

export const InfoParagraph = styled.p`
    font-size: 1.2em;
    margin-bottom: 20px;
    color: #333; // Slightly lightened black for better readability
    line-height: 1.5;
`;

export const InfoList = styled.ul`
    margin-bottom: 25px;
    font-size: 1.2em;
`;

export const InfoListItem = styled.li`
    margin-bottom: 10px;
    color: #666; // Grey color to differentiate from regular text
`;
