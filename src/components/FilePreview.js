import React, { useState } from 'react';
import ContentPreview from 'box-ui-elements/es/elements/content-preview';
import messages from 'box-ui-elements/i18n/en-US';
import get from "lodash/get";

const BoxFilePreview = ({FILE_ID_DOC, FILE_ID_TEXT, token, setLoadedFileExtension}) => {
  const language = 'en-US';

  console.log({FILE_ID_TEXT})

  return (
        <ContentPreview
          hasHeader
          fileId={FILE_ID_TEXT}
          token={token}
          language={language}
          messages={messages}
          onLoad={e => {
            setLoadedFileExtension(get(e,"file.extension",""))
          }}
          collection={[FILE_ID_TEXT, 
              // FILE_ID_DOC, 
              // FILE_ID_VIDEO, FILE_ID_3D, FILE_ID_EXCEL, FILE_ID_AUDIO
          ]}
          />
      );
};

export default BoxFilePreview;