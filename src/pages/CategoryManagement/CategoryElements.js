import styled from "styled-components/macro";

export const DashboardContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#F2F2F2")};
  /* margin-left: 280px; */
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (max-width: 780px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 0px;
  }
`

export const DashboardWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 100vh;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`
export const DashboardWrapperDetails = styled.div`
  display: flex;
  z-index: 1;
  height: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

export const DashboardHeading = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #FFFFFF;
  padding: 0.75rem 0.8rem;
`

export const DashTableHead = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99%;
  background: #FFFFFF;
  padding: 0.75rem 0.8rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`

export const FetchDetailsButton = styled.button`
  border-radius: 5px;
  opacity: 1;
  white-space: nowrap;
  border: none;
  background: #EDE5FF;
  font-family: Helvetica;
  
  font-weight: 500;
  color: #6C2BD9;
  font-size: 0.85rem;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`


export const DashTableRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
export const DashButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem;
`

export const BottomContainerBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding-top: 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

`
export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0.5rem 0rem;
  height: 100%;
`
export const DetailsNameRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 1rem;
`
export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1.5rem;
  background: #FFFFFF;
  height: 100vh;
`
export const CompanyScreenshot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 1.5rem;
  background: #FFFFFF;
  height: 100vh;
`
export const ScreenshotRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`

export const SelectedText = styled.h5`
  font-size: 1rem;
  padding: 0.5rem 4rem 0.5rem 0.5rem;
  color: #334155;
`

export const HomeText = styled.h5`
  font-size: 0.9rem;
  padding: 0rem 2rem 0.5rem 0.5rem;
  color: #334155;
  margin-bottom: 0rem;
`

export const ScrapButton = styled.button`
  border-radius: 5px;
  opacity: 1;
  white-space: nowrap;
  border: none;
  background: #FFFFFF;
  font-family: Helvetica;
  margin-right: 1rem;
  color: ${({ isActive }) => (isActive ? "#6C2BD9" : "#A2A2A2")};

  border: 1px solid #ECECEC;

  font-weight: 500;
  font-size: 0.85rem;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`
export const DetailsHeading = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  width: 100%;
  margin-bottom: 0rem;
`

export const DetailNameIcon = styled.div`
  margin-right: 0.5rem;
  color: #000000;
`
export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const ChatSection = styled.div`
  width: 100%;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 1rem;
`
export const ChatRow = styled.div`
  width: 100%;
  font-size: 1rem;
`
export const InputRow = styled.div`
  margin-top: 1rem;
  width: 100%;
  border: 1px solid #000000;
  border-radius: 5px;
`
export const InputButton = styled.input`
  padding: 1rem;
`
export const QuesSubmit = styled.div`
  padding: 1rem;
`

export const MenuOfServicesCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 5px 10px #BD98FF27;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.15rem;
`
export const MenuServicesHeading = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: "Red Hat Display";
    letter-spacing: 0px;
    color: #130C10;
    opacity: 1;
    padding: 0rem 1.8rem;
    @media (max-width: 321px) {
        font-size: 1rem;
    }
`
export const ExploreButton = styled.button`
    box-shadow: 0px 5px 10px #BD98FF27;
    border-radius: 15px;
    text-align: center;
    opacity: 1;
    white-space: nowrap;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    justify-content: center;
    font-family: "Red Hat Display";

    
    background: #E4D9F8;
    border: none;
    color: #160219;

    padding: 0.45rem 1.4rem;
    font-size: 0.8rem;
    
`