import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import Sort from '../sort/Sort';
import { connect } from 'react-redux';
import { useStyles } from './Employees.style';
import { columns } from '../../mockData/Columns';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { useTranslation } from 'react-i18next';
import actions from '../../redux/actions';


function DataGridDemo(props) {

    const {
        _employees,
        _editStatus,
        _addStatus
    } = props;

    const {
        t
    } = useTranslation();

    const classes = useStyles();
    const [checkboxSelection, setCheckboxSelection] = useState([]);

    React.useEffect(() => {
        _addStatus()
    }, []);

    const validationEdit = () => {
        if (!checkboxSelection.length) {
            alert(t('noCheckBoxSelectAlert'))
            return false;
        }
        return true;
    }

    const executeOrCancelPayments = (addOrRemove) => {
        if (validationEdit())
            _editStatus({ checkboxSelection: checkboxSelection, addOrRemove: addOrRemove })

    }

    const addToCheckBoxVirtualList = (e) => {
        setCheckboxSelection(e)
    }



    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Sort />

            <Fab
                variant="extended"
                size="small"
                color="secondary"
                aria-label="add"
                onClick={() => executeOrCancelPayments('add')}
                className={classes.margin}
            >
                <NavigationIcon className={classes.extendedIcon} />
                {t('executePayments')}
            </Fab>
            <Fab
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
                onClick={() => executeOrCancelPayments('remove')}
                className={classes.margin}
            >
                <NavigationIcon className={classes.extendedIcon} />
                {t('cancelExecutedPayments')}
            </Fab>
            <div className={classes.dataGrid}>
                <DataGrid
                    rows={_employees}
                    columns={columns}
                    pageSize={30}
                    rowsPerPageOptions={[30]}
                    checkboxSelection
                    onSelectionModelChange={addToCheckBoxVirtualList}
                    disableSelectionOnClick
                />
            </div>
        </Grid>
    );
}

const mapStateToProps = state => ({
    ...state,
    _employees: state.employees.employees
})

const mapDispatchToProps = dispatch => ({
    _editStatus: (emplyeesIndex, addOrRemove) => dispatch(actions.editStatus(emplyeesIndex, addOrRemove)),
    _addStatus: () => dispatch(actions.addStatus()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DataGridDemo)