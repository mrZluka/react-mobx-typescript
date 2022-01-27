/**
 * created by mrzluka on 27.01.2022
 */
import styled from "styled-components";

export const ItemContainer = styled.div`
  text-align: left;
  margin: 20px auto;
  width: 70%;
`;

export const ItemText = styled.span`
  user-select: none;

  &:hover {
    cursor: pointer
  }

  &.done {
    text-decoration: line-through;
    color: #aaaaaa;
  }
`;

export const ItemClose = styled(ItemText)`
  margin: 0 10px;

  &:hover {
    cursor: pointer
  }

`;
