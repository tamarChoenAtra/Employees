import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from './Sort.styles';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { columns } from '../../mockData/Columns';
import { actions } from '../../redux/actions';

function GroupedSelect(props) {

    const classes = useStyles();

    const {
        t
    } = useTranslation();

    const {
        _sort
    } = props;

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">{t('sortBy')}</InputLabel>
                <Select
                    native
                    defaultValue=""
                    id="grouped-native-select"
                    onChange={(event) => _sort(event.target.value)
                    }>
                    <optgroup label={t('sortBy')}>
                        <option aria-label="None" value="" />
                        {
                            columns.map((item, index) =>
                                <option
                                    key={index}
                                    value={item.field}>
                                    {item.headerName}
                                </option>
                            )
                        }
                    </optgroup>
                </Select>
            </FormControl>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state,
    _employees: state.employees.employees
})

const mapDispatchToProps = dispatch => ({
    _sort: (keySort) => dispatch(actions.sort(keySort))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupedSelect)