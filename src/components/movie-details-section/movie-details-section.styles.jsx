import styled from 'styled-components';

export const MovieDetailsSectionContainer = styled.div`
  height: 525px;
  margin-bottom: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  position: relative;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ backdrop_path }) => `url(${backdrop_path})`};
  filter: brightness(0.45);
`;

export const Details = styled.div`
  height: 85%;
  width: 95%;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  color: white;
`;

export const Poster = styled.img`
  border-radius: 10px;
`;

export const Description = styled.div`
  height: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: xx-large;
`;

export const ReleaseDate = styled.span`
  font-size: x-large;
`;

export const GenresAndDuration = styled.div`
  font-size: 15px;
`;

export const Genre = styled.span`
  padding: 4px;
  border-radius: 6px;
  background-color: black;
  margin-right: 5px;
`;

export const Duration = styled.span`
  border-left: solid white 1px;
  margin-left: 5px;
  padding-left: 10px;
`;

export const RatingsAverage = styled.div`
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: xx-large;
`;

export const Tagline = styled.span`
  font-style: italic;
`;

export const Overview = styled.p`
  font-weight: lighter;
  font-size: 16px;
  line-height: 20px;
`;

export const ProductionCompanies = styled.div`
  min-height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
`;
