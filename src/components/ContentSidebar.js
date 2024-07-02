import React, { useState } from 'react';
// import messages from 'box-ui-elements/i18n/en-US';
import { IntlProvider } from 'react-intl';
import ContentSidebar from 'box-ui-elements/es/elements/content-sidebar';
import * as CiIcons from 'react-icons/ci';


const BoxContentSidebar = ({fileId, token, showWarning}) => {
  const language = 'en-US';

  const TargetingApi = {
    canShow: true,
    onClose: (e) => {},
    onComplete: (e) => {},
    onShow: (e) => {},
    }

    const UseTargetingApi = () => TargetingApi;

    const [modalState, setModalState] = useState({
        isWarning: "",
    });

  return (
    <>
        <IntlProvider locale="en">
            <ContentSidebar
                className="be bcs"
                isDefaultOpen={false}
                detailsSidebarProps={{
                    hasProperties: true,
                    // hasNotices: true,
                    // hasAccessStats: true,
                    hasClassification: true,
                    hasRetentionPolicy: true,
                }}
                // features={FEATURES}
                fileId={fileId}
                token={token}
                // hasActivityFeed
                // hasMetadata
                hasSkills
                hasVersions
                hasAdditionalTabs={showWarning? true : false}
                additionalTabs={[
                    {
                        callback: (e) => {
                            setModalState({
                                isWarning: true
                            })
                        },
                        ftuxTooltipData: {
                            targetingApi: UseTargetingApi,
                            text: "Warning",
                        },
                        iconUrl: "https://thoolieimages.s3.us-east-2.amazonaws.com/1705664515007.png",
                        id: 1,
                        title: "Warning",
                    }
                ]}
                // {...PROPS}
            />
        </IntlProvider>

    </>
    );
};

export default BoxContentSidebar;