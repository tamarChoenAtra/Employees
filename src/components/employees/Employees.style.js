import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    root: {
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingLeft: 20,
    },
    grid: {
        marginTop: '5%'
    },
    dataGrid: {
        height: 450,
        width: '95%',
        marginTop: '2%'
    },
    margin: {
        marginTop: '2%',
        marginRight: '8px'
    }
});