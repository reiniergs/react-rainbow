import React from 'react';
import PropTypes from 'prop-types';

function SvgMacauSarChina({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M.524 12.195C2.636 3.643 11.284-1.572 19.837.548c8.552 2.112 13.767 10.76 11.647 19.313-2.112 8.552-10.76 13.767-19.313 11.647C3.62 29.388-1.596 20.748.524 12.195"
                    fill="#54B948"
                />
                <path
                    fill="#FFE158"
                    d="M15.774 3.216l.516 1.58h1.677l-1.354.975.515 1.572-1.354-.975-1.362.975.516-1.572-1.354-.975h1.676zM5.675 10.269l1.023.218.524-.895.105 1.024 1.024.217-.952.411.105 1.032-.701-.766-.951.411.524-.886zM9.221 5.675l.774.693.91-.516-.426.943.773.693-1.04-.113-.419.943-.217-1.007-1.04-.113.903-.508zM25.866 10.269l-1.016.218-.524-.895-.112 1.024-1.024.217.96.411-.114 1.032.702-.766.95.411-.523-.886zM22.32 5.675l-.774.693-.903-.516.427.943-.782.693 1.04-.113.427.943.218-1.007 1.04-.113-.911-.508z"
                />
                <g fill="#FFF">
                    <path d="M15.798 26.39H10.93a11.152 11.152 0 004.7 1.096H15.918a11.21 11.21 0 004.7-1.096h-4.82zM15.742 25.294H9.116c.403.306.83.58 1.282.822h10.737c.443-.242.87-.516 1.281-.822h-6.674zM15.742 24.197H7.851l.588.549H23.101l.589-.549h-7.892zM6.9 23.11l.21.5H24.43l.21-.5h-8.899zM15.798 19.716l-.024-.024-.024.024c-1.402 1.16-2.265 1.902-4.135 1.902l-5.674-.008c.145.266.298.54.467.79l5.368.008c2.58 0 3.99-1.628 3.998-1.636.008.008 1.419 1.636 3.998 1.636l5.369-.008c.16-.258.322-.524.467-.79l-5.674.008c-1.879 0-2.733-.741-4.136-1.902z" />
                    <path d="M19.853 20.61c-.177 0-.355 0-.54-.007 3.506-.307 5.876-2.217 6.593-3.982-.862-.597-1.99-.92-3.2-.92-1.443 0-3.014.46-4.417 1.444.71-.879 2.886-1.838 4.772-1.838.25 0 .492.016.725.056.29-.298.54-.669.83-.967a4.617 4.617 0 00-1.015-.105c-2.16 0-4.683 1.225-5.699 2.265.968-1.531 1.725-3.216 1.33-5.167a6.279 6.279 0 00-.653-1.757c-.29.274-.612.54-.902.814l-.008.008c1.104 2 .7 4.329-.194 5.957 1.145-2.337.758-4.65-.347-6.311a5.862 5.862 0 00-1.386-1.467c-.008.008-.016.016-.024.016a5.862 5.862 0 00-1.362 1.45c-1.105 1.661-1.492 3.975-.347 6.312-.895-1.628-1.298-3.958-.185-5.957l-.008-.008c-.29-.266-.613-.54-.903-.814a6.279 6.279 0 00-.653 1.757c-.395 1.951.37 3.636 1.33 5.167-1.016-1.032-3.539-2.265-5.699-2.265-.354 0-.693.032-1.015.105.29.298.54.669.83.967a5.29 5.29 0 01.725-.056c1.886 0 4.063.959 4.772 1.838-1.402-.984-2.966-1.443-4.417-1.443-1.21 0-2.338.322-3.2.919.717 1.765 3.087 3.675 6.593 3.982-.185.008-.37.008-.54.008-2.498 0-3.909-.798-5.183-1.685l-.87.524c1.016.758 2.281 1.757 5.69 1.757 2.41 0 3.459-1.475 4.45-2.16.991.685 2.04 2.16 4.45 2.16 3.409 0 4.674-1 5.69-1.757l-.87-.524c-1.234.887-2.644 1.685-5.143 1.685z" />
                </g>
            </g>
        </svg>
    );
}
SvgMacauSarChina.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgMacauSarChina.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgMacauSarChina;