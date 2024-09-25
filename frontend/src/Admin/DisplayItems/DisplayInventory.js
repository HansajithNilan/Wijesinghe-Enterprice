import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./DisplayInventory.css";

import NavBar from "../../Components/Nav/Nav";
import Footer from "../../Components/Nav/Footer";
import { Link, useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/items";

const fetchHandler = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return { items: [] };
    }
}

function DisplayInventory() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchHandler().then((data) => setItems(data.items || []));
    }, []);

    const deleteHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/items/${id}`);
            setItems(items.filter(item => item._id !== id)); // Update local state
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    }

    return (
        <div className="Site">
            <NavBar />
            <div className="inventory">
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Item Name</th>
                                <th>Get Price</th>
                                <th>Sell Price</th>
                                <th>Pieces</th>
                                <th>Date</th>
                                <th>Actions</th> {/* Added header for Actions */}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item._id}</td>
                                    <td>{item.itemname}</td>
                                    <td>{item.getprice}</td>
                                    <td>{item.sellprice}</td>
                                    <td>{item.pices}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <button onClick={() => deleteHandler(item._id)} className="delete" type="button">Delete</button>
                                        <Link to={`/Inventory/${item._id}`}>Update</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DisplayInventory;
