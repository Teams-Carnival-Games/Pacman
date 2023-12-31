import React from "react";
import { app, pages } from "@microsoft/teams-js";

class TabConfig extends React.Component {
  componentDidMount() {
    app.initialize().then(async () => {
      //  When the user clicks "Save", save the updated configuration
      pages.config.registerOnSaveHandler(async (saveEvent) => {
        const baseUrl = `https://${window.location.hostname}:${window.location.port}`;
        await pages.config.setConfig({
          suggestedDisplayName: "Pacman Game",
          entityId: "Pacman",
          contentUrl: baseUrl + "/index.html#/tab?inTeams=true",
          websiteUrl: baseUrl + "/index.html#/tab?inTeams=true",
        });
        saveEvent.notifySuccess();
      });

      // OK all set up, enable the "save" button
      pages.config.setValidityState(true);
    });
  }

  render() {
    return (
      <div>
        <h1>Tab Configuration</h1>
        <div>
          <br />
          There are no configuration options for the Pacman tab. Please
          click "Save" to set up your tab.
          <br />
          <br />
          Nothing to see here folks!
        </div>
      </div>
    );
  }
}

export default TabConfig;
