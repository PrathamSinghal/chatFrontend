import React, { useState, useEffect } from "react";
import {
  DashboardContainer,
  DashboardWrapper,
  DashboardHeading,
  DashTableHead,
  FetchDetailsButton,
  DashTableRow,
  SelectedText,
  DashButtons,
  ScrapButton
} from "./CategoryElements";
import Input from "../../components/Input";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "../../axios";
import Overlay from "../../components/Overlay";
import { toast } from "react-toastify";
import { get, isEmpty } from "lodash";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { withRouter } from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import { SearchContainer, SearchBar, SearchIcon, SearchInput } from "../../components/SearchBar/SearchElements";
import Nodata from "../../components/Nodata";

const useStyles = makeStyles((theme) => ({
  textMiddle: {
    verticalAlign: "middle !important",
    textAlign: "center",
    color: "#6B7280"
  },
  tablePadding: {
    padding: "0.5rem",
    textAlign: "center",
    fontSize: "0.8rem",
    fontWeight: "800",
  },
  paperTableHeight: {
    height: "650px",
    width: "99%",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  "@media (max-width: 780px)": {
    paperTableHeight: {
      marginLeft: "0.75rem",
    },
  },
  "@media (max-width: 480px)": {
    paperTableHeight: {
      marginLeft: "0.75rem",
    },
  },
  tablePaginationStyle: {
    border: "1px solid #0000001a",
    borderRadius: "0rem 0rem 0.4rem 0.4rem",
    overflowY: "hidden",
  },
  tableContainerHeight: {
    height: "calc(100% - 52px)"
  },
  tableFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchDesign: {
    borderRadius: "20px",
    boxShadow: "none",
    width: "21%",
  },
}));

const OfferManagement = ({ history, setUsers, userData, socket }) => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);
  const [domainValue, setDomainValue] = useState("");
  const [tableData, setTableData] = useState([]);
  const [deleteArray, setDeleteArray] = useState([]);

  useEffect(() => {
    pdfList();
  }, []);

  // For Pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    pdfList(newPage + 1, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    pdfList(1, event.target.value);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const pdfList = async (page = 1, rowsPerPage = 10) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`user/pdfList?page=${page}&pageSize=${rowsPerPage}`);
      setTableData(data.data.docs);
      setPage(page - 1);
      setRowsPerPage(rowsPerPage);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const handleDeleteScrapData = async (values) => {
    setIsLoading(true);
    try {

      let deleteData = {
        ids: values
      }

      const { data } = await axios.post(`user/pdfDelete`,deleteData);
      setDeleteArray([]);
      toast.success(`Deleted Succesfully`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsLoading(false);
      pdfList();
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      if(err?.response?.data?.errors) {
        toast.error(`${err.response.data.errors[0]?.msg}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(`${err.response.data.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  const fileUpload = async (file) => {
    setIsLoading(true);
    var formData = new FormData();
    formData.append("file", file);
    formData.append("fileFolder", "272860814189");
    try {
      const { data } = await axios.post("http://167.71.231.59:3000/fileUploadBox", formData);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>


      <div>
        <DashboardContainer>
          <DashboardWrapper>
            <DashboardHeading>

              <div style={{ display: "flex", gap: "1rem" }}>
                <SearchContainer>
                  <SearchBar>
                    <SearchIcon>
                      <FaIcons.FaSearch style={{ color: "#6B7280" }} />
                    </SearchIcon>
                    <SearchInput
                      type="text"
                      value={domainValue}
                      onChange={(e) => {
                        setDomainValue(e.target.value)
                      }}
                      placeholder="Search Pdf"
                    ></SearchInput>
                  </SearchBar>
                </SearchContainer>
                  <FetchDetailsButton
                    onClick={() => {

                    }}
                  >
                    Search
                  </FetchDetailsButton>
              </div>
              <div>
                <label
                    htmlFor="file-input"
                    style={{ cursor: "pointer" }}
                    className="temp-center temp-upload p-3"
                >
                    <Input
                    className="tempImage"
                    style={{ cursor: "pointer" }}
                    type="file"
                    name="image"
                    accept=".pdf"
                    id="file-input"
                    onChange={async (e) => {
                      await fileUpload(e.target.files[0]);                        
                      pdfList();
                      e.target.value = "";
                    }}
                    />
                    <div
                        style={{color: "#000000"}}
                    >
                      Upload Pdf
                    </div>
                </label>
              </div>
            </DashboardHeading>
            <DashTableHead>
              {tableData.length > 0 ? (
                <>
                  <DashTableRow>
                    <SelectedText>
                        {deleteArray.length} Selected
                    </SelectedText>
                    <DashButtons>
                      <ScrapButton
                        isActive={deleteArray.length>0 ? true : false}
                        onClick={() => {
                          handleDeleteScrapData(deleteArray);
                        }}
                      >
                        Delete
                      </ScrapButton>
                    </DashButtons>
                  </DashTableRow>
                </>
              ) : ""}
            </DashTableHead>
            <Paper className={classes.paperTableHeight} style={{ overflow: "hidden", height: "100%"}}>
              <TableContainer className={classes.tableContainerHeight}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tablePadding} style={{ fontWeight: "800" }}>
                        <div style={{paddingLeft: "1rem"}}>
                          <Input
                              type="checkbox"
                              checked={deleteArray.length>0 && (deleteArray.length===tableData.length) ? true: false}
                              onChange={(e) => {
                                if(deleteArray.length===tableData.length) {
                                  // all delete
                                  setDeleteArray([]);
                                } else {
                                  // all push
                                  let array = []
                                  tableData.map(item => array.push(item._id));
                                  setDeleteArray(array);
                                }
                              }}
                              noBorderBottom={true}
                          />
                        </div>
                      </TableCell>
                      <TableCell className={classes.tablePadding}>
                        Pdf Name
                      </TableCell>
                      <TableCell className={classes.tablePadding}>
                        Pdf Size
                      </TableCell>
                      <TableCell className={classes.tablePadding}>
                        Actions
                      </TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((category, index) => (
                      <TableRow key={category._id}>
                        <TableCell component="th" scope="row" className={classes.textMiddle}>
                          <div style={{paddingLeft: "1rem"}}>
                            <Input
                                type="checkbox"
                                checked={deleteArray.includes(category._id) ? true: false}
                                onChange={(e) => {
                                  if(deleteArray.includes(category._id)) {
                                    // remove kardo
                                    const newArray = deleteArray.filter(item => item !== category._id);
                                    setDeleteArray(newArray)
                                  } else {
                                    setDeleteArray([
                                      ...deleteArray,
                                      category._id
                                    ])
                                  }
                                }}
                                noBorderBottom={true}
                            />
                          
                          </div>
                        </TableCell>
                        <TableCell className={classes.textMiddle}>
                          <div>
                            {category?.name ? (
                              <>
                                <div style={{color: "#6C2BD9", cursor: "pointer"}}
                                  onClick={() => {
                                    history.push(`/pdfDetails/${category._id}`);
                                  }}
                                >
                                  {category?.name}
                                </div>
                              </>
                            ) : "N/A"}
                          </div>
                        </TableCell>
                        <TableCell className={classes.textMiddle}>
                          <div>
                            {category?.size ? (
                              <>
                                <div style={{color: "#6C2BD9", cursor: "pointer"}}
                                  onClick={() => {
                                    history.push(`/pdfDetails/${category._id}`);
                                  }}
                                >
                                  {category?.size}
                                </div>
                              </>
                            ) : "N/A"}
                          </div>
                        </TableCell>
                        <TableCell className={classes.textMiddle}>
                          <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                            <FaIcons.FaEye
                              onClick={() => {
                                history.push(`/pdfDetails/${category._id}`);
                                localStorage.setItem("userName", "pdfuser")
                                socket.emit("newUser", {userName: "pdfuser", socketID: socket.id})
                              }}
                              style={{cursor: "pointer"}}
                            />
                          </div>
                        </TableCell>
                        

                        
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {tableData.length === 0 ? <Nodata TextToDisplay="No Data Found." fontSize="24px" /> : false}
              <TablePagination
                className={classes.tablePaginationStyle}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </DashboardWrapper>
        </DashboardContainer>
      </div>
      {isLoading && <Overlay />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (updatedValue) => {
      dispatch({
        type: actionTypes.UPDATE_USER,
        updatedUser: updatedValue,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OfferManagement));
