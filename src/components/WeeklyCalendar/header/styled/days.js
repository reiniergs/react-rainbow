import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledDays = attachThemeAttrs(styled.div)`
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex: 1 1 auto;
    overflow-y: hidden;
    overflow-x: hidden;

    > div:first-child {
        width: 11px;
        min-width: 11px;
        height: 100%;
        border-right: 1px solid ${props => props.palette.border.divider};
    }
    > div:last-child {
        border-right: none;
    }
`;

export default StyledDays;
