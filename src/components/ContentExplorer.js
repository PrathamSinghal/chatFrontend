import React, { useState } from 'react';
import ContentExplorer from 'box-ui-elements/es/elements/content-explorer';
import messages from 'box-ui-elements/i18n/en-US';

const BoxContentExplorer = ({ tokenFolder, rootFolderId, onDelete,
    onDownload,
    onPreview,
    onRename,
    onCreate,
    onSelect,
    onUpload,
    onNavigate }) => {
  const language = 'en-US';

  return (
        <ContentExplorer
            token={tokenFolder}
            logoUrl={""}
            rootFolderId={rootFolderId}
            language={language}
            sortBy={"name"}
            sortDirection={"ASC"}
            messages={messages}
            canPreview={false}
            canDelete={true}
            canDownload={true}
            canRename={true}
            canShare={true}
            canUpload={true}
            canCreateNewFolder={true}
            canSetShareAccess={true}

            onDelete={onDelete}
            onDownload={onDownload}
            onPreview={onPreview}
            onRename={onRename}
            onCreate={onCreate}
            onSelect={onSelect}
            onUpload={onUpload}
            onNavigate={onNavigate}

            contentOpenWithProps={
                {
                    show: true
                }
            }
        />
  );
};

export default BoxContentExplorer;