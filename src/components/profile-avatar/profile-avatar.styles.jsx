import styled from 'styled-components';

export const ProfileAvatarContainer = styled.div`
  width: 21%;
  height: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileAvatarTitle = styled.h2`
  margin: 10px 0;
`;

export const UserAvatar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-image: ${({ avatarUrl }) => `url(${avatarUrl})`};
`;

export const FileInput = styled.input`
  display: none;
`;
