import React from "react";
import {
  CompanyInfoContainer,
  CompanyInfoText,
  CopyrightText,
} from "./styles/company_info_styles";

class CompanyInformation extends React.Component {
  render() {
    return (
      <CompanyInfoContainer>
        <CompanyInfoText>Terms</CompanyInfoText>
        <CompanyInfoText>Privacy</CompanyInfoText>
        <CompanyInfoText>About</CompanyInfoText>
      </CompanyInfoContainer>
    );
  }
}

export default CompanyInformation;
