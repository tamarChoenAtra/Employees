import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { useTranslation } from 'react-i18next';

export default function DisableElevation() {

    const {
        t,
        i18n
    } = useTranslation();

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: '5%' }}
        >
            <ButtonGroup disableElevation variant="contained" color="primary">

                <Button
                    onClick={() => i18n.changeLanguage("he")}
                    color="secondary">
                    {t('hebrew')}
                </Button>
                <Button
                    onClick={() => i18n.changeLanguage("en")}
                >
                    {t('english')}
                </Button>
            </ButtonGroup>
        </Grid>
    );
}