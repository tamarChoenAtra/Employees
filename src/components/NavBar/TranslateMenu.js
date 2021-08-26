import React from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default (props) => {

    const {
        i18n
    } = useTranslation();

    const {
        anchorEl,
        id,
        open,
        onClose
    } = props;


    return (
        <Menu
            anchorEl={anchorEl}
            // anchorOrigin={classes.anchorOrigin}
            id={id}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={onClose}
        >
            {[
                { i18: 'he', display: 'hebrew' },
                { i18: 'en', display: 'english' }]
                .map((lan, index) =>
                    <MenuItem key={index} onClick={() => i18n.changeLanguage(lan.i18)}>
                        {lan.display}
                    </MenuItem>
                )}
        </Menu>
    )
}