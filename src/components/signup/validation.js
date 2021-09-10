import React from "react";
    
import {
    PasswordContainer,
    PasswordTitle,
    PasswordText,
    PasswordItems
}
from './validationElements'

const Validation = ({
    validity: { minChar, number, specialChar }
}) => {
    return (
        <PasswordContainer>
            <PasswordTitle>Your Password Must:</PasswordTitle>
                <PasswordText>
                    <PasswordStrengthIndicatorItem
                        isValid={minChar}
                        text="be at least 8 characters long"
                        icon='beer'
                    />
                    <PasswordStrengthIndicatorItem
                        isValid={number}
                        text="have at least one number"
                    />
                    <PasswordStrengthIndicatorItem
                        isValid={specialChar}
                        text="have at least one special character"
                    />
                </PasswordText>
        </PasswordContainer>
    );
};

const PasswordStrengthIndicatorItem = ({ isValid, text}) => {
    const highlightClass = isValid
        ? "text-success"
        : isValid !== null
        ? "text-danger"
        : "";
    return <PasswordItems className={highlightClass}>{text}</PasswordItems>;
};

export default Validation;