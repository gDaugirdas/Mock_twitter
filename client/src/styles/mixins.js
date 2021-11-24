import { css } from 'styled-components';

const breakpoints = {
	sm_up: 768,
	md_up: 992,
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}px) {
			${css(...args)};
		}
	`;
	return acc;
}, {});

export default media;
