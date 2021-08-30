import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import Language from '@material-ui/icons/Language';
import { useTranslation } from 'react-i18next';
import { useStyles } from './NabBar.styles';
import Drawer from './Drawer';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import TranslateMenu from './TranslateMenu';
import logo from '../../assets/logo.png';
import DrawerUploadImage from '../uploadImage/DrawerUploadImage';
import Avatar from '@material-ui/core/Avatar';
import { TrafficRounded } from '@material-ui/icons';

function PrimarySearchAppBar(props) {

    const {
        t
    } = useTranslation();

    const {
        _setOpenDrawer,
        _uploadedUrl,
        _setOpenDrawerUploadImage,
        _base64
    } = props;

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <TranslateMenu
            anchorEl={anchorEl}
            id={menuId}
            open={isMenuOpen}
            onClose={handleMenuClose}
        />
    );


    return (
        <>
            <Drawer />
            <DrawerUploadImage />
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            onClick={() => _setOpenDrawer(true)}
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <img className={classes.img} src={logo} />

                        <Typography className={classes.title} variant="h6" noWrap>
                            {t('navBarTitle')}
                        </Typography>

                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={() => _setOpenDrawerUploadImage(TrafficRounded)}
                                color="inherit"
                            >
                                <Avatar alt="Remy Sharp" src={_uploadedUrl ? _uploadedUrl : _base64} />
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <Badge badgeContent={2} color="secondary">
                                    <Language />
                                </Badge>
                            </IconButton>


                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    ...state,
    _openDrawer: state.nav.openDrawer,
    _uploadedUrl: state.nav.uploadedUrl,
    _base64: state.nav.base64
})

const mapDispatchToProps = dispatch => ({
    _setOpenDrawer: (open) => dispatch(actions.setOpenDrawer(open)),
    _setOpenDrawerUploadImage: (open) => dispatch(actions.setOpenDrawerUploadImage(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(PrimarySearchAppBar)
