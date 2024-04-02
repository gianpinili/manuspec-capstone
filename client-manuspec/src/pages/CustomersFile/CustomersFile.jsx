import React, { useState, useEffect } from "react";
import "./CustomersFile.scss";
import CustomerFiles from "../../components/CustomerFiles/CustomerFiles";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { TextField, Button, Snackbar } from "@mui/material";

function CustomersFile() {
  const dataUrl = "http://localhost:8080/customers";
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  const [singleCustomer, setSingleCustomer] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [vin, setVin] = useState("");
  const [car, setCar] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const getSingleCustomer = async (id) => {
      try {
        const response = await axios.get(`${dataUrl}/${id}`);
        const customerData = response.data;
        setSingleCustomer(customerData);
        setName(customerData.name);
        setPhone(customerData.phone);
        setEmail(customerData.email);
        setVin(customerData.vin);
        setCar(customerData.car);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      getSingleCustomer(id);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${dataUrl}/${id}`, {
        name,
        phone,
        email,
        vin,
        car,
      });
      console.log("Customer data updated:", response.data);
      toggleModal();
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Error updating customer data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${dataUrl}/${id}`);
      console.log("Customer deleted:", response.data);
      setShowDeleteAlert(true);
      setTimeout(() => {
        setShowDeleteAlert(false);
        navigate("/customers");
      }, 1500);
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <>
      <div className="customer-info">
        <div className="customer-info__left">
          <div className="customer-info__image">
            <div className="customer-info__img"></div>
          </div>
          <p className="customer-info__name">{singleCustomer.name}</p>
        </div>
        <div className="customer-info__middle">
          <p className="customer-info__number">{singleCustomer.phone}</p>
          <p className="customer-info__email">{singleCustomer.email}</p>
        </div>
        <div className="customer-info__right">
          <p className="customer-info__vin">{singleCustomer.vin}</p>
          <p className="customer-info__vehicle">{singleCustomer.car}</p>
        </div>
        <div className="customer-info__edit" onClick={toggleModal}>
          <FaRegEdit />
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal__title">
            <h2>Edit Customer Information</h2>
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
          </div>
          <form onSubmit={handleSubmit} className="modal__form">
            <TextField
              type="text"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={singleCustomer.name}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              type="text"
              label="Phone"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={singleCustomer.phone}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              type="text"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={singleCustomer.email}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              type="text"
              label="VIN"
              variant="outlined"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
              placeholder={singleCustomer.vin}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              type="text"
              label="Car"
              variant="outlined"
              value={car}
              onChange={(e) => setCar(e.target.value)}
              placeholder={singleCustomer.car}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <Button type="submit" variant="contained" color="success">
              Save
            </Button>
          </form>
        </div>
      )}
      <CustomerFiles handleDelete={handleDelete} />
      {showSuccessAlert && (
        <Snackbar
          open={showSuccessAlert}
          autoHideDuration={3000}
          onClose={() => setShowSuccessAlert(false)}
          message="Customer has been updated successfully"
          anchorOrigin={{ vertical: "top", horizontal: "middle" }}
        />
      )}
      {showDeleteAlert && (
        <Snackbar
          open={showDeleteAlert}
          autoHideDuration={3000}
          onClose={() => setShowDeleteAlert(false)}
          message="Customer has been deleted successfully"
          anchorOrigin={{ vertical: "top", horizontal: "middle" }}
        />
      )}
    </>
  );
}

export default CustomersFile;
