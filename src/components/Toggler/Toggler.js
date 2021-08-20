import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Toggle = ({theme, toggleTheme }) => {
    return (
        <div className="toggle animate__animated animate__bounceIn" onClick={toggleTheme}>
            <div className={theme === 'light' ? "toggle-circle text-uppercase" : "toggle-circle toggle-circle-dark text-uppercase"}>
                {theme === 'light' ? 'off' : 'on'}
            </div>
        </div>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;