import React, { useState, useEffect, useRef } from "react";
import {
  DashboardContainer,
  DashboardHeading,
  DashTableRow,
  HomeText,
  BottomContainer,
  BottomContainerBottom,
  CompanyDetails,
  DetailsHeading,
  DetailsSection,
  DetailsNameRow,
  DetailNameIcon,
  CompanyScreenshot,
  ScreenshotRow,
  DashboardWrapperDetails,
  ChatContainer,
  ChatSection,
  ChatRow,
  InputRow,
  InputButton,
  QuesSubmit,
  MenuOfServicesCard,
  MenuServicesHeading,
  ExploreButton
} from "./CategoryElements";
import get from "lodash/get";

import BoxFilePreview from "../../components/FilePreview";

import axios from "../../axios";
import Overlay from "../../components/Overlay";
import { toast } from "react-toastify";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { withRouter, useParams } from "react-router-dom";

import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import ChatBar from "./ChatBar";
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'



const OfferManagement = ({ history, setUsers, userData, socket }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [websiteData, setWebsiteData] = useState("");
  const [loadedFileExtension, setLoadedFileExtension] = useState("");
  console.log(socket);


  const [messages, setMessages] = useState([])
  const [typingStatus, setTypingStatus] = useState("")
  const lastMessageRef = useRef(null);

  useEffect(()=> {
    socket.on("messageResponse", data => setMessages([...messages, data]))
  }, [socket, messages])

  useEffect(()=> {
    socket.on("typingResponse", data => setTypingStatus(data))
  }, [socket])

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);




  const params = useParams();


  useEffect(() => {
    if(params?.id) {
        getWebsiteData(params?.id);
    }
}, [params?.id]);

  const getWebsiteData = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`user/getpdfDetails/${id}`);
      setWebsiteData(data.data);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  console.log(websiteData,"websiteData");

  return (
    <>
      <div>
        <DashboardContainer>
          <DashboardWrapperDetails>
            <DashboardHeading>

            </DashboardHeading>
            <DashboardHeading>
                <DashTableRow>
                    <HomeText
                      onClick={() => {
                        history.push('/');
                      }}
                      style={{cursor: "pointer"}}
                    >
                        Home
                    </HomeText>
                    <HomeText>
                        {'>'}
                    </HomeText>
                    <HomeText>
                        {websiteData?.name || "N/A"}
                    </HomeText>
                </DashTableRow>
            </DashboardHeading>

            <BottomContainer>
               
                <BottomContainerBottom>
                    <div className="col-md-5">
                      <CompanyDetails>
                        {websiteData?.boxFileId ? (
                          <>
                            <BoxFilePreview
                              FILE_ID_TEXT={websiteData?.boxFileId}
                              setLoadedFileExtension={setLoadedFileExtension}
                              token={get(websiteData,"folderAccessData.accessToken","")}
                            />
                            {/*<BoxContentSidebar
                              fileId={websiteData?.boxFileId}
                              token={get(websiteData,"folderAccessData.accessToken","")}
                              showWarning={true}
                            />*/}
                          </>
                        ) : ""}
                      </CompanyDetails>
                    </div>
                    <div className="col-md-7 mdColPadding">
                      <CompanyScreenshot>
                        <ScreenshotRow>
                          <DetailsSection>
                            <DetailsNameRow>
                              <DetailNameIcon>
                                <MdIcons.MdOutlineChatBubbleOutline/>
                              </DetailNameIcon>
                              <DetailsHeading>
                              Chat
                              </DetailsHeading>
                            </DetailsNameRow>

                              <div className="chat">
                                <div className='chat__main'>
                                  <ChatBody messages={messages} typingStatus={typingStatus} lastMessageRef={lastMessageRef}/>
                                  <ChatFooter socket={socket}
                                    pdfId={websiteData?.boxFileId}
                                  />
                                </div>
                              </div>


                              {/*<ChatContainer>
                                <ChatSection>
                                  <ChatRow>
                                  </ChatRow>
                                </ChatSection>
                                <InputRow>
                                <MenuOfServicesCard>
                                    <MenuServicesHeading>
                                      <InputButton

                                      />
                                    </MenuServicesHeading>
                                    <ExploreButton
                                      
                                    >
                                      <IoIcons.IoMdArrowUp/>
                                    </ExploreButton>
                                  </MenuOfServicesCard>
                                  
                                  <QuesSubmit>
                                  </QuesSubmit>
                                </InputRow>
                              </ChatContainer>*/}
                          </DetailsSection>
                        </ScreenshotRow>
                      </CompanyScreenshot>
                    </div>
                </BottomContainerBottom>
            </BottomContainer>
            
          </DashboardWrapperDetails>
        </DashboardContainer>
      </div>
      {isLoading && <Overlay />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (updatedValue) => {
      dispatch({
        type: actionTypes.UPDATE_USER,
        updatedUser: updatedValue,
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OfferManagement));
