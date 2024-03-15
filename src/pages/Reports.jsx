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
              accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTA0NDg1NTEtNTVlMC00MWZjLTgxNmYtMjllY2M4YThlNTdlLyIsImlhdCI6MTcxMDUxNDcyOSwibmJmIjoxNzEwNTE0NzI5LCJleHAiOjE3MTA1MTg5MDUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUEwNm9DSi9HTU43V2ZVQXQ5N2FjYlpjSjRDdTNQQ3dPeFRDeERXQ1pJMjRKRGxXNUxDL2J0eFlaZFh5dE4wclhuIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQXBzYXJhIiwiZ2l2ZW5fbmFtZSI6Ik5ldGhtaW5pIiwiaXBhZGRyIjoiNDMuMjI4LjEwOC4xNTciLCJuYW1lIjoiTmV0aG1pbmkgQXBzYXJhIiwib2lkIjoiZmVmZDI4ZDEtYjkzOS00YTIyLWFhODQtMjQ4OWFiMTY5ODcwIiwicHVpZCI6IjEwMDMyMDAzNjJCQzVBOTkiLCJyaCI6IjAuQVNzQVVZVkVFT0JWX0VHQmJ5bnN5S2psZmdrQUFBQUFBQUFBd0FBQUFBQUFBQURDQUxJLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlRLVTlicm85QWcyWDdQdDlDb2d4UlphcWRPVXdlUXNUY0dpN3paOGxDRjQiLCJ0aWQiOiIxMDQ0ODU1MS01NWUwLTQxZmMtODE2Zi0yOWVjYzhhOGU1N2UiLCJ1bmlxdWVfbmFtZSI6Ik5ldGhtaW5pQXBzYXJhQGF0dGVuZGlmeS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJOZXRobWluaUFwc2FyYUBhdHRlbmRpZnkub25taWNyb3NvZnQuY29tIiwidXRpIjoiQ1N5UTJWejhUMEt6STM5VGlsTnhBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImVuIn0.MFrzpsEpH9C7obmJLM06iPUWQJmNblk48c3rkyksx6eLrnxXW_AyMLLzkjEfKl1IeZUqkPRSm2i5ddSPmDwQod24PbSLpTDfLiv5n8C5sh6ZyHYZ9qgdCi7HO6n-jMbpQ-K01sz8gOI4H66ldrPljTou2fz2ZxZeoPaqdoMjFwG-cq10AYUwgX4TTWmWlzMPk6rYWRHzA-7j0fjDOXpZv0C_EqC8yB2PWcygMjTX-zSnwtt_vGEHrL_f50wRQESDtJJwzv5XK83UQnuJJWKLIOokzvFxDpukzv0T_yjToS2dU254ygby2v3YSwAC0Uv5O5n8raJ3pIOYzMIC__1IXQ',
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