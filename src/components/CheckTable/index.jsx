import React, { useEffect } from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import apis from '../../api';
import { IconButton, Tooltip } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Launch';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'adquirido', label: 'Adquirido?', align: "center", padding: "normal" },
  { id: 'nome', label: 'Nome', align: "left", padding: "normal" },
  { id: 'descricao', label: 'Descrição', align: "left", padding: "normal" }
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (prop) => (ev) => {
    onRequestSort(ev, prop);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.padding}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = () => {
  const classes = useToolbarStyles();
  return (
    <Toolbar className={classes.root}>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Nutrition
      </Typography>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('nome');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [presentes, setPresentes] = React.useState([]);

  let url = window.location.href.split('/');
  let id = url[3]; // 615b9f82b638a5406b2a1f64

  useEffect(() => {
    async function fetchPresenteAPI() {
      await apis.ListarPresentes()
      .then(res => {
        setPresentes(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
    fetchPresenteAPI();
    // eslint-disable-next-line
  }, []);

  async function adquirePresente(presente)
  {
    await apis
      .AtualizarPresente(presente._id, presente)
      .then(res => {
        console.log(res.data.message);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleRequestSort = (ev, prop) => {
    const isAsc = orderBy === prop && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(prop);
  };

  const handleChange = (event) => {
    let { value, checked } = event.target;
    var tmp = presentes.map((x) => {
      if (x._id === value) {
        x.adquirido = checked;
        x.adquiridoPor = id;
        adquirePresente(x);
      }
      return x;
    });
    setPresentes(tmp);
  };

  const handleChangePage = (ev, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (ev) => {
    setRowsPerPage(parseInt(ev.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'small'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(presentes, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const cantCheck = row.adquiridoPor !== undefined && row.adquiridoPor !== id;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={index}
                    >
                      <TableCell padding="checkbox" align='center'>
                        <Checkbox
                          onChange={handleChange}
                          disabled={cantCheck}
                          checked={row.adquirido}
                          value={row._id}
                          inputProps={{ 'aria-labelledby': row._id }}
                        />
                      </TableCell>
                      <TableCell component="th" id={row._id} scope="row" padding="none">
                        <Tooltip title="Click aqui para acessar a loja!">
                          <IconButton edge="start" 
                            color='primary'
                            aria-label="link" 
                            onClick={() => window.open(row.url, "_blank")}>
                            <LinkIcon/>
                          </IconButton>
                        </Tooltip>
                        {row.nome}
                      </TableCell>
                      <TableCell align="left">{row.descricao}</TableCell>
                    </TableRow>
                  );
                })}
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[15, 25, 50]}
          component="div"
          count={presentes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage="Linhas por página:"
          nextIconButtonText="Próxima página"
          labelDisplayedRows={from => { return `${from.from}-${from.to === -1 ? from.count : from.to} de ${from.count}` }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
