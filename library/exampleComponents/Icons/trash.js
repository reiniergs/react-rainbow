import React from 'react';
import PropTypes from 'prop-types';

const Trash = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="17px"
            height="20px"
            viewBox="0 0 17 20"
            version="1.1"
        >
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Button-Menu"
                    transform="translate(-1044.000000, -3044.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group-33" transform="translate(204.000000, 2851.000000)">
                        <g id="Group-32" transform="translate(823.000000, 110.000000)">
                            <g id="trash" transform="translate(17.000000, 83.000000)">
                                <path
                                    d="M10.7352624,3.47564695 L6.23394503,3.47564695 C5.90409104,3.47564695 5.63675533,3.2133484 5.63675533,2.88970945 L5.63675533,1.09542848 C5.63675533,0.491485586 6.13721276,0 6.75244256,0 L10.2166094,0 C10.8318391,0 11.3324521,0.491485586 11.3324521,1.09542848 L11.3324521,2.88970945 C11.3324521,3.2133484 11.0649608,3.47564695 10.7352624,3.47564695 L10.7352624,3.47564695 Z M6.83113472,2.30377195 L10.1380727,2.30377195 L10.1380727,1.171875 L6.83113472,1.171875 L6.83113472,2.30377195 Z"
                                    id="Shape"
                                    fill="#BEC3D2"
                                />
                                <path
                                    d="M15.196145,4.79156492 C15.0830833,4.6713257 14.9239882,4.60296633 14.7572728,4.60296633 L2.21193466,4.60296633 C2.0452192,4.60296633 1.88596861,4.6713257 1.77290691,4.79156492 C1.6598452,4.91180422 1.6032366,5.07293703 1.61661118,5.23605348 L2.69652921,18.3374023 C2.77335516,19.2697144 3.57971675,20 4.53210994,20 L12.436942,20 C13.3894906,20 14.1956967,19.2697144 14.2725227,18.3374023 L15.3524407,5.23605348 C15.3659708,5.07293703 15.3092067,4.91180422 15.196145,4.79156492 Z"
                                    id="Path"
                                    fill="#BEC3D2"
                                />
                                <path
                                    d="M16.9384148,5.00335695 L16.1566251,2.7043152 C16.0752891,2.46505738 15.847144,2.30377195 15.590228,2.30377195 L1.3788239,2.30377195 C1.12190795,2.30377195 0.893607269,2.46505738 0.812426815,2.7043152 L0.0306370656,5.00335695 C-0.030014993,5.18203734 0.00046655644,5.37857055 0.112750649,5.53131102 C0.224879265,5.6842041 0.405280319,5.77468871 0.597189696,5.77468871 L16.3718622,5.77468871 C16.5639271,5.77468871 16.7441727,5.6842041 16.8564567,5.53131102 C16.9685854,5.37857055 16.9990669,5.18203734 16.9384148,5.00335695 Z"
                                    id="Path"
                                    fill="#DCE1EB"
                                />
                                <path
                                    d="M11.4394485,18.2022095 C11.4290288,18.2022095 11.4186091,18.2020569 11.4078783,18.2014465 C11.0786464,18.1846619 10.8254629,17.9089355 10.8425699,17.5857544 L11.4033683,7.02331543 C11.4204753,6.7001343 11.7008746,6.45141602 12.0307286,6.46865844 C12.360116,6.48544313 12.613144,6.76116945 12.596037,7.08435059 L12.0353941,17.6467895 C12.0187536,17.9595947 11.7549949,18.2022095 11.4394485,18.2022095 L11.4394485,18.2022095 Z"
                                    id="Path"
                                    fill="#9196AA"
                                />
                                <path
                                    d="M5.55604144,18.2022095 C5.24111716,18.2022095 4.97766943,17.9605102 4.96040691,17.6481629 L4.37301487,7.08572387 C4.35513027,6.76254273 4.60753624,6.48635863 4.93676815,6.46881102 C5.26584456,6.45111086 5.54779895,6.69876098 5.56568355,7.02194215 L6.15292008,17.5843811 C6.17096019,17.9075623 5.91855422,18.1837463 5.5891668,18.2012939 C5.578125,18.2019043 5.5670832,18.2022095 5.55604144,18.2022095 Z"
                                    id="Path"
                                    fill="#9196AA"
                                />
                                <path
                                    d="M8.49113548,18.2022095 C8.161437,18.2022095 7.89394578,17.9399109 7.89394578,17.616272 L7.89394578,7.05383301 C7.89394578,6.7301941 8.161437,6.46789551 8.49113548,6.46789551 C8.82098946,6.46789551 9.08832517,6.7301941 9.08832517,7.05383301 L9.08832517,17.616272 C9.08832517,17.9399109 8.82098946,18.2022095 8.49113548,18.2022095 Z"
                                    id="Path"
                                    fill="#9196AA"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Trash.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Trash.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Trash;
