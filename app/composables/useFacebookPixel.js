export const useFacebookPixel = () => {
    const { $fbTrack } = useNuxtApp();

    const trackEvent = (event, params = {}) => {
        if (typeof $fbTrack === "function") {
            $fbTrack(event, params);
        }
    };

    return {
        trackEvent,
    };
};
