import useHover from './hooks/useHover'
import useFocus from './hooks/useFocus'
import useHash from './hooks/useHash'
import useWindowSize from './hooks/useWindowSize'
import useIntersecting from './hooks/useIntersecting'

export default function (Alpine) {
    Alpine.plugin(useHover);
    Alpine.plugin(useFocus);
    Alpine.plugin(useHash);
    Alpine.plugin(useWindowSize);
    Alpine.plugin(useIntersecting);
};

export { useHover, useFocus, useHash, useWindowSize, useIntersecting };
