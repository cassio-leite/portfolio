import { css } from 'styled-components';

export const sizes = {
    mobile: 576,
    tablet: 968,
    desktop: 992,
    largeDesktop: 1200,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
    ${css(...args)};
    }
`;
    return acc;
}, {});