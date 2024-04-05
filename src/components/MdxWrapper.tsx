import * as React from "react";
import styled from "styled-components";

const MdxWrapper = styled.div`
  & a {
    color: blue;
    text-decoration: underline;
  }

  & p {
    margin-bottom: 8px;
  }

  & ul {
    list-style-type: disc;
    margin-bottom: 8px;
    padding-left: 20px;
  }

  & ul > li {
  }

  & em {
    font-size: 0.9rem;
    color: grey;
  }
`;

export default MdxWrapper;
