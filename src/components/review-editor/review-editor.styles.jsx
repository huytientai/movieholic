import styled from 'styled-components';

export const ReviewEditorContainer = styled.div`
  width: ${({ width }) => (width ? width : '90%')};
  display: flex;
  flex-direction: column;
`;

export const CommentBox = styled.textarea`
  min-height: 12vh;
  height: 20vh;
  border: solid darkgray 1px;
  border-radius: 3px;
  font-family: 'Roboto';
  font-size: initial;
  font-weight: lighter;
  line-height: 1.5;
  resize: vertical;
`;

export const OptionBar = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const RatingAndLabel = styled.div`
  width: 53%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 500;
`;
