import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const IconSearch = attachThemeAttrs(styled.svg)`
    fill: ${props => props.palette.brand.main}
`;

const SearchIcon = props => {
    const { className } = props;
    return (
        <svg
            className={className}
            width="36px"
            height="36px"
            viewBox="0 0 36 36"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Components-InternalDropdown" transform="translate(-531.000000, -582.000000)">
                    <g id="Group-35" transform="translate(347.000000, 493.000000)">
                        <g id="Group-34" transform="translate(108.000000, 89.000000)">
                            <g
                                id="search"
                                transform="translate(94.000000, 18.000000) scale(-1, 1) translate(-94.000000, -18.000000) translate(76.000000, 0.000000)"
                            >
                                <path
                                    d="M17.4968262,20.0948181 L15.9051819,18.5031738 C15.6854553,18.2834473 15.328949,18.2834473 15.1092224,18.5031738 L11.4513244,22.1610718 C11.2315979,22.3807984 11.2315979,22.73703 11.4513244,22.9570312 L13.0429688,24.5486756 C13.1531067,24.6585388 13.2970276,24.7134705 13.4409485,24.7134705 C13.5851441,24.7134705 13.7290649,24.6585388 13.8389282,24.5486756 L17.4971008,20.8907776 C17.7168274,20.671051 17.7168274,20.3145447 17.4968262,20.0948181 L17.4968262,20.0948181 Z"
                                    id="Path"
                                    fillOpacity="0.774147727"
                                    fill="#D9DBE5"
                                />
                                <path
                                    d="M24.1817322,-1.47437618e-12 C30.6985473,-1.47437618e-12 36,5.30145267 36,11.8182678 C36,18.3348084 30.6985473,23.636261 24.1817322,23.636261 C17.6651916,23.636261 12.363739,18.3348084 12.363739,11.8182678 C12.363739,5.30145267 17.6651916,-1.47437618e-12 24.1817322,-1.47437618e-12 Z M24.1817322,2.11047363 C18.8289184,2.11047363 14.473938,6.46517946 14.473938,11.8182678 C14.473938,17.1710816 18.8289184,21.526062 24.1817322,21.526062 C29.5348205,21.526062 33.8895264,17.1710816 33.8895264,11.8182678 C33.8895264,6.46517946 29.5348205,2.11047363 24.1817322,2.11047363 Z"
                                    id="Combined-Shape"
                                    fill="#A4A7B5"
                                />
                                <path
                                    d="M14.473938,11.8182678 C14.473938,17.1710816 18.8289184,21.526062 24.1817322,21.526062 C29.5348205,21.526062 33.8895264,17.1710816 33.8895264,11.8182678 C33.8895264,6.46517946 29.5348205,2.11047363 24.1817322,2.11047363 C18.8289184,2.11047363 14.473938,6.46517946 14.473938,11.8182678 Z"
                                    id="Path"
                                    fillOpacity="0.235467657"
                                    fill="#D9DBE5"
                                />
                                <IconSearch>
                                    <path
                                        d="M12.2272339,20.9871826 C12.0075074,20.7674561 11.651001,20.7674561 11.4312744,20.9871826 L0.738830531,31.6799011 C-0.00823978125,32.4266968 -0.213958758,33.5953674 0.237853969,34.5514527 C0.362274188,34.8148498 0.532836914,35.0554504 0.738830531,35.2611695 C1.45678711,35.9794006 2.58782963,36.1994019 3.52249144,35.8016968 C3.81994629,35.6750793 4.09158323,35.4896851 4.32009886,35.2611695 L15.0128174,24.5687256 C15.2325439,24.348999 15.2325439,23.9924926 15.0128174,23.7727661 L12.2272339,20.9871826 Z"
                                        id="Path"
                                    />
                                </IconSearch>
                                <path
                                    d="M15.0128174,23.7727661 L13.6057434,22.3659668 C13.8257446,22.5856934 13.8257446,22.941925 13.6057434,23.1616516 L2.91329958,33.8543701 C2.68478395,34.0828857 2.41314694,34.2680054 2.11569216,34.3946228 C1.49578861,34.6585693 0.790191633,34.6492309 0.175506609,34.4045105 C0.194732648,34.453949 0.21478275,34.5031128 0.237853969,34.5514527 C0.362274188,34.8148498 0.532836914,35.0554504 0.738830531,35.2611695 C1.45678711,35.9794006 2.58782962,36.1994019 3.52249144,35.8016968 C3.81994629,35.6750793 4.09158323,35.4896851 4.32009886,35.2611695 L15.0128174,24.5687256 C15.2325439,24.348999 15.2325439,23.9924926 15.0128174,23.7727661 L15.0128174,23.7727661 Z"
                                    id="Path"
                                    fillOpacity="0.15"
                                    fill="#000000"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

SearchIcon.propTypes = {
    className: PropTypes.string,
};

SearchIcon.defaultProps = {
    className: undefined,
};

export default SearchIcon;
