import { createTheme, ThemeProvider } from '@material-ui/core';
import { PaginationItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Pagination from '@mui/material/Pagination';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageContext from '../contexts/PageContext';

const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          ul: {
            li: {
              button: { color: '#40220f' },
            },
          },
        },
      },
    },
  },
});

export default function MyPagination({ totalPages, page, setPage }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode } = useContext(SwitchButtonContext);
  const { cate } = useContext(PageContext);
  const useStyles = makeStyles((theme) => ({
    selected: {
      background: `${
        mode === 'dog'
          ? 'url(/images/bone.png) no-repeat center center'
          : 'url(/images/fish.png) no-repeat center center'
      }`,
      backgroundColor: 'transparent !important',
    },
  }));
  const classes = useStyles();
  return (
    <>

        <Pagination
          count={totalPages}
          theme={theme}
          className={classes.root}
          showFirstButton
          showLastButton
          siblingCount={1}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              classes={{ selected: classes.selected }}
            />
          )}
          page={page}
          onChange={(e, p) => {
            console.log({ p });
            setPage(p);
            if (p > totalPages) {
              return navigate(
                `${location.pathname}${
                  cate
                    ? `?cate=${cate}&page=${totalPages}`
                    : `?page=${totalPages}`
                }`
              );
            } else if (p < 1) {
              return navigate(
                `${location.pathname}${
                  cate ? `?cate=${cate}&page=${1}` : `?page=${1}`
                }`
              );
            } else {
              return navigate(
                `${location.pathname}${
                  cate ? `?cate=${cate}&page=${p}` : `?page=${p}`
                }`
              );
            }
          }}
        />

    </>
  );
}
