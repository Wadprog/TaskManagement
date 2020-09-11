import Api from "./api";
import axios from "axios";
import script_url from "./baseUrl";

const req = {};

req.getAllTask = async (CB, CBERR) => {
  let url = script_url + "?action=read";
  try {
    const res = await Api.get(url);
    CB(res.data.records);
  } catch (error) {
    const alert = { msg: error, type: "danger" };
    CBERR(alert);
  }
};

req.editTask = async (data, CB, CBERR) => {
  console.log(data);
  let url = script_url + "?action=update";
  const config = {
    crossDomain: true,
  };
  const body = JSON.stringify({ ...data });
  try {
    const res = await axios.post(url, body, config);
    CB(res);
  } catch (error) {
    const alert = { msg: error, type: "danger" };
    CBERR(alert);
  }
};

req.addNewTask = async (data, CB, CBERR) => {
  console.log(data);
  let url = script_url + "?action=create";
  const config = {
    crossDomain: true,
  };
  const body = JSON.stringify({ ...data });
  try {
    const res = await axios.post(url, body, config);
    CB(res);
  } catch (error) {
    const alert = { msg: error, type: "danger" };
    CBERR(alert);
  }
};

export default req;
