export default function useIntersecting(Alpine) {
    Alpine.magic('useIntersecting', (el, { interceptor }) => {
        return interceptor((options, getter, setter) => {
            const target = options instanceof Element
                ? options
                : options.target;

            const root = (options.root instanceof Element || options.root instanceof Document)
                ? options.root
                : null;

            const rootMargin = options.rootMargin || '0px';

            const threshold = options.threshold || 0;

            const initial = options.initial || false;

            console.log('options', { target, root, rootMargin, threshold, initial });

            const observer = new IntersectionObserver(
                ([entry]) => setter(entry.isIntersecting),
                { root, rootMargin, threshold },
            );

            setter(initial);

            observer.observe(target);

            return getter();
        });
    });
}
