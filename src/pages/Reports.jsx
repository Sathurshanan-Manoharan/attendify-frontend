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
              id: 'f69b8681-70b9-4488-8add-f9e41169fb6c',
              embedUrl: "https://app.powerbi.com/reportEmbed?reportId=405f5a08-4acd-4858-ba3d-efca298f8fa8&groupId=06a7f9fb-e4be-46ee-b1e8-3ee7b94355f6&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJkaXNhYmxlQW5ndWxhckpTQm9vdHN0cmFwUmVwb3J0RW1iZWQiOnRydWV9fQ%3d%3d",
              accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTA0NDg1NTEtNTVlMC00MWZjLTgxNmYtMjllY2M4YThlNTdlLyIsImlhdCI6MTcxMDY0NzA3OSwibmJmIjoxNzEwNjQ3MDc5LCJleHAiOjE3MTA2NTIxMjEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFDajc5RXVDOGJYcXlodGdLR3QzOWJuZzZkUDFHM003aDZpdXNTYzEraFVKZngwT1Zjb3ZDcDdDYWVKYS80VkdhIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQXBzYXJhIiwiZ2l2ZW5fbmFtZSI6Ik5ldGhtaW5pIiwiaXBhZGRyIjoiMjIzLjIyNC42LjI3IiwibmFtZSI6Ik5ldGhtaW5pIEFwc2FyYSIsIm9pZCI6ImZlZmQyOGQxLWI5MzktNGEyMi1hYTg0LTI0ODlhYjE2OTg3MCIsInB1aWQiOiIxMDAzMjAwMzYyQkM1QTk5IiwicmgiOiIwLkFTc0FVWVZFRU9CVl9FR0JieW5zeUtqbGZna0FBQUFBQUFBQXdBQUFBQUFBQUFEQ0FMSS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJUS1U5YnJvOUFnMlg3UHQ5Q29neFJaYXFkT1V3ZVFzVGNHaTd6WjhsQ0Y0IiwidGlkIjoiMTA0NDg1NTEtNTVlMC00MWZjLTgxNmYtMjllY2M4YThlNTdlIiwidW5pcXVlX25hbWUiOiJOZXRobWluaUFwc2FyYUBhdHRlbmRpZnkub25taWNyb3NvZnQuY29tIiwidXBuIjoiTmV0aG1pbmlBcHNhcmFAYXR0ZW5kaWZ5Lm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IlhhaXZuaC1MT0VPQnIwVkVPcE1FQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJlbiJ9.VxcZFtB_ufz07DBZZlDBoGwtBnbVioCNKChR4QGDgFbsQ3eX1pvPo9TUkqs7D-5YsIcLU5EF17dMLcL23Fj_TERyq3083F6KHZtXrMwquilD8DH_dG-Cdw4KOW8F1h1VJSy_NlfIthMU4QUT1Gf0u1L2AP21sSeI7UXtGFMhgnYL7tMbaXESTMqAeubHYfVxStNYdA9VqCXXWYhx9f6JKRVzFkfzn1F42F7aqeteVc6LmhacEy5sug70Cz_PZD_dKlb0bfv9lbPzKBkr4tWzd0thzgdNfSE87A_YHIdyib_bLivX5HndL872v7s-bSkJ-C4E_QKJegSqWzUldhGALg",
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