import React, { useEffect } from 'react';
import {PowerBIEmbed} from 'powerbi-client-react';
import {models} from 'powerbi-client';
import '../report.css';

function report() {
    return (
      <div className="App">
        <header className="App-header">
          <PowerBIEmbed
            embedConfig={{
              type: 'report',  
              id: '405f5a08-4acd-4858-ba3d-efca298f8fa8',
              embedUrl: "https://app.powerbi.com/reportEmbed?reportId=405f5a08-4acd-4858-ba3d-efca298f8fa8&groupId=06a7f9fb-e4be-46ee-b1e8-3ee7b94355f6&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJkaXNhYmxlQW5ndWxhckpTQm9vdHN0cmFwUmVwb3J0RW1iZWQiOnRydWV9fQ%3d%3d",
              accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTA0NDg1NTEtNTVlMC00MWZjLTgxNmYtMjllY2M4YThlNTdlLyIsImlhdCI6MTcxMDUxODM2NSwibmJmIjoxNzEwNTE4MzY1LCJleHAiOjE3MTA1MjI0NTAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFDK0R1YWhEbGhIdHZJRDRLSitpYlE3aDh0Z2hERTZkelpaRlROYjUxUnlpZHVRajRncForL1NhVktHL2h2TmpiIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQXBzYXJhIiwiZ2l2ZW5fbmFtZSI6Ik5ldGhtaW5pIiwiaXBhZGRyIjoiNDMuMjI4LjEwOC4xNTciLCJuYW1lIjoiTmV0aG1pbmkgQXBzYXJhIiwib2lkIjoiZmVmZDI4ZDEtYjkzOS00YTIyLWFhODQtMjQ4OWFiMTY5ODcwIiwicHVpZCI6IjEwMDMyMDAzNjJCQzVBOTkiLCJyaCI6IjAuQVNzQVVZVkVFT0JWX0VHQmJ5bnN5S2psZmdrQUFBQUFBQUFBd0FBQUFBQUFBQURDQUxJLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlRLVTlicm85QWcyWDdQdDlDb2d4UlphcWRPVXdlUXNUY0dpN3paOGxDRjQiLCJ0aWQiOiIxMDQ0ODU1MS01NWUwLTQxZmMtODE2Zi0yOWVjYzhhOGU1N2UiLCJ1bmlxdWVfbmFtZSI6Ik5ldGhtaW5pQXBzYXJhQGF0dGVuZGlmeS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJOZXRobWluaUFwc2FyYUBhdHRlbmRpZnkub25taWNyb3NvZnQuY29tIiwidXRpIjoiNVBPNFRfQU9sVWUxSDlxMG9ZZlNBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImVuIn0.qTz1wz1cCl02rbZs_t0eWAhlVDS2P2cLOFJwNZ5XmLw-wFIVjA_HhoohsymXK85WePtjpENVtkFtPQ9OX5Cq4J0bOSjtdS1vIXVFEeUlcOvsf9n7Ntz81K4AoY2blgemcJy7L9Sj-4xbLiJLKlnyNRssC1K2uH89lF0ChEaglx_JQXr-iDrrK2W5vqauakKU6u-ruooO3ifntKya8gqj3gWB9050bngjdwzGTYIxV3Fa1NZm2R16Aw-lIVhwUde7wtWPPK_EDar4fiPWMmw615UQAPn-qD45WZvfeq9UEOeKoYdlISSjJKmmXChEPKe96UBqtfurtLPXoF7KP2Jo6w',
              tokenType: models.TokenType.Aad,
              settings: {
                panes: {
                  filters: {
                    expanded: false,
                    visible: true
                  }
                },
              }
            }}
  
            eventHandlers={
              new Map([
                ['loaded', function () { console.log('Report loaded'); }],
                ['rendered', function () { console.log('Report rendered'); }],
                ['error', function (event) { console.log(event.detail); }]
              ])
            }
  
            cssClassName={"Embed-container"}
  
            getEmbeddedComponent={(embeddedReport) => {
              window.report = embeddedReport;
            }}
          />
        </header>
      </div>
    );
  }
  
  export default report;