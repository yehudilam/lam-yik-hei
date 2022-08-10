import * as React from "react";
import styled from 'styled-components';

const MdxWrapper = styled.div`
  & p {
    margin-bottom: 8px;
  }

  & ul {
    //list-style-position: inside;
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
