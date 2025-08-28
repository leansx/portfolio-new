// import "../styles/Tag.css";
import styled, { css } from "styled-components";

// Need to make variations here depending on where these are displayed.
const size = {
  large: css`
    padding: 0.6rem;
    font-size: var(--font-tag);
  `,
  small: css`
    padding: 0.4rem;
    font-size: var(--font-tag-small);
  `,
};

const color = {
  light: css`
    border: var(--border) solid var(--gray);
    color: var(--gray);
  `,
  dark: css`
    border: var(--border) solid var(--dark);
    color: var(--text);
  `,
};

const StyledTag = styled.div`
  ${(props) => size[props.size]}
  ${(props) => color[props.color]}
  border-radius: var(--radius-full);
  /* padding: 10px; */
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: var(--letter-body);
  cursor: default;
`;

StyledTag.defaultProps = {
  color: "light",
  size: "large",
};

function Tag({ title, size, color }) {
  return (
    <StyledTag size={size} color={color}>
      {title}
    </StyledTag>
  );
}

export default Tag;
