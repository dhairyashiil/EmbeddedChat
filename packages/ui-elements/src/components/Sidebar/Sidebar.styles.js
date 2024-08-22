import { css } from '@emotion/react';
import useTheme from '../../hooks/useTheme';

const useSidebarStyles = () => {
  const { theme } = useTheme();

  const sidebarContainer = css`
    min-width: 350px;
    height: 100%;
    box-shadow: ${theme.shadows[2]};
    z-index: ${theme.zIndex?.sidebar || 1200};
    display: flex;
    flex-direction: column;
  `;

  const content = css`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
    overflow-x: hidden;
  `;

  const header = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    margin-bottom: 0.5rem;
  `;

  const title = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
  `;

  const icon = css`
    font-size: 1.25rem;
  `;

  const searchContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${theme.colors.border};
    padding: 0 0.5rem;
    border-radius: ${theme.radius};
    position: relative;
    margin: 0 1rem 1rem;
    &.focused {
      outline: 1px solid ${theme.colors.ring};
    }
  `;

  const textInput = css`
    border: none;
    flex: 1;
    padding: none;
    &:focus {
      outline: none;
    }
  `;

  const noInfoIcon = css`
    padding: 0.125em;
    cursor: pointer;
  `;

  const titleContainer = css`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 0.5rem;
  `;

  return {
    sidebarContainer,
    content,
    header,
    title,
    icon,
    searchContainer,
    textInput,
    noInfoIcon,
    titleContainer,
  };
};

export default useSidebarStyles;
