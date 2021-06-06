import React from "react";

const CaptchaIcon = () => {
    return (
        <svg
            width="54"
            height="47"
            viewBox="0 0 54 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="54" height="47" fill="url(#pattern0)" />
            <defs>
                <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0"
                        transform="scale(0.0185185 0.0212766)"
                    />
                </pattern>
                <image
                    id="image0"
                    width="54"
                    height="47"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};

export default CaptchaIcon;
