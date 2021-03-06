import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import PageButtons from './pageButtons';
import ButtonsContainer from './styled/buttonsContainer';

export default function PageButtonsContainer(props) {
    const { pages, activePage, onChange, variant } = props;
    const isShaded = variant === 'shaded';
    return (
        <>
            <RenderIf isTrue={isShaded}>
                <ButtonsContainer>
                    <PageButtons
                        onChange={onChange}
                        pages={pages}
                        activePage={activePage}
                        variant={variant}
                    />
                </ButtonsContainer>
            </RenderIf>
            <RenderIf isTrue={!isShaded}>
                <PageButtons
                    onChange={onChange}
                    pages={pages}
                    activePage={activePage}
                    variant={variant}
                />
            </RenderIf>
        </>
    );
}

PageButtonsContainer.propTypes = {
    pages: PropTypes.number.isRequired,
    activePage: PropTypes.number,
    onChange: PropTypes.func,
    variant: PropTypes.oneOf(['default', 'shaded']),
};

PageButtonsContainer.defaultProps = {
    activePage: undefined,
    onChange: () => {},
    variant: 'default',
};
