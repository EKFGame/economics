import React from 'react';
import { WebView } from "react-native-webview";

const WebBrowser = ({outsideuri}) => (
    <WebView
        style={{ flex: 1 }}
        source={{
          uri: outsideuri,
        }}
    />
);

export default WebBrowser;