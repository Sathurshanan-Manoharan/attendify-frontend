import React from 'react';
import {PowerBIEmbed} from 'powerbi-client-react';
import {models} from 'powerbi-client';
import "../report.css";

function report() {
    return (
      <div>
        <PowerBIEmbed
            embedConfig={{
              type: 'report',  
              id: 'abd9abde-61b3-49dd-8193-760dfa4d9084',
              embedUrl: "https://app.powerbi.com/reportEmbed?reportId=abd9abde-61b3-49dd-8193-760dfa4d9084&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJkaXNhYmxlQW5ndWxhckpTQm9vdHN0cmFwUmVwb3J0RW1iZWQiOnRydWV9fQ%3d%3d",
              accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTA0NDg1NTEtNTVlMC00MWZjLTgxNmYtMjllY2M4YThlNTdlLyIsImlhdCI6MTcxMTAzNTg1MCwibmJmIjoxNzExMDM1ODUwLCJleHAiOjE3MTEwNDA4MDIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFnWnNRWmh5MnBHVWtzVmVySHJSVUpuS09FZDNHZlJLMUdiNFRQWVIxR0V0SWhwUlV5YU9MdFgya09qNzBIVTh5IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQXBzYXJhIiwiZ2l2ZW5fbmFtZSI6Ik5ldGhtaW5pIiwiaXBhZGRyIjoiMjIzLjIyNC4wLjUzIiwibmFtZSI6Ik5ldGhtaW5pIEFwc2FyYSIsIm9pZCI6ImZlZmQyOGQxLWI5MzktNGEyMi1hYTg0LTI0ODlhYjE2OTg3MCIsInB1aWQiOiIxMDAzMjAwMzYyQkM1QTk5IiwicmgiOiIwLkFTc0FVWVZFRU9CVl9FR0JieW5zeUtqbGZna0FBQUFBQUFBQXdBQUFBQUFBQUFEQ0FMSS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJUS1U5YnJvOUFnMlg3UHQ5Q29neFJaYXFkT1V3ZVFzVGNHaTd6WjhsQ0Y0IiwidGlkIjoiMTA0NDg1NTEtNTVlMC00MWZjLTgxNmYtMjllY2M4YThlNTdlIiwidW5pcXVlX25hbWUiOiJOZXRobWluaUFwc2FyYUBhdHRlbmRpZnkub25taWNyb3NvZnQuY29tIiwidXBuIjoiTmV0aG1pbmlBcHNhcmFAYXR0ZW5kaWZ5Lm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IlBILWN1cVA1NTA2Q01IZ2o0Sk5fQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJlbiJ9.lHrN6BBwEXEj10Ni7D7D8Okr7mvWIrjSajxDgh2vvuV7txHS93YOP0GqTDdnxou3H9d0wwXz1hfO1dNOZvrNBecscFcSfoVUp7m1EHOMV-wvWf4NPCwgb6o24cymvEMWQOY9QbSx4i_5yRYu-hY3v1W35ozJ7CnNfrpE7gFgvgoSygHM-mX4PzPo5Nlw6H-IyAR5l4-HEX7tzxf7UEKl8be-FkyvF6tfHfXleImH8SGfnmUxtoa6_djXdKSgrG_gO5WQ1Pfwwrk3GIzRRCvfY8EzBYdOD3lNfxxqxrZ4ULIBBhhSIoZUZY4IbYSBdrNHnb88vYzMsaYx4ML2odtpSw",
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
        </div>
    );


    
  }
  
  export default report;