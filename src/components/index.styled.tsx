import styled from 'styled-components';

export const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  position: relative;

  & a {
    color: blue;
  }

  @media (max-width: 500px) {
    padding: 24px 12px;
  }
`;

export const BannerImage = styled.img`
  max-height: 400px;
  object-fit: cover;
  width: 100%;
`;

export const ProfilePic = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 100%;
  position: absolute;
  top: -60px;
  left: 60px;

  @media (max-width: 500px) {
    left: 30px;
  }
`;
