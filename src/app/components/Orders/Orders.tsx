"use client";
import {useState, useEffect} from "react";
import { Space, Button, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Order } from "../Order/Order";
import { Item } from "../Item/Item";
import Link from 'next/link'
import axios from "axios";
import { Order as OrderType } from "@/app/types/Order";

export const Orders = () => {

	const [orders, setOrders] = useState<OrderType[]>([]);
	const [selectedOrder, setSelectedOrder] = useState<OrderType>();

	const handleSelectChange = (value: string) => {
		// console.log(`selected ${value}`);
		const order = orders.find((order) => order._id.toString() === value);
		setSelectedOrder(order);
	};

	// retrieve orders from the database
	const getOrders = async () => {
		const response = await axios.get("http://localhost:5000/orders");
		setOrders(response.data);
	}

	const deleteOrder = async (id: string) => {
		// await axios.delete(`http://localhost:5000/orders/${id}`);
		// orders.splice(orders.indexOf(selectedOrder), 1);
	}

	const editOrder = async (order: OrderType) => {
		await axios.put(`http://localhost:5000/orders/${order._id}`, order);
		orders[orders.indexOf(selectedOrder!)] = order;
	}

	useEffect(() => {
		getOrders();
	}, []); // useEffect is called when the component is mounted and when the state of the component changes (here, the state of the orders array changes)

	return (
		<div>
			<Space direction="vertical">
				<Link href="/NewOrder">
					<Button type="primary" icon={<PlusOutlined />}>
						Créer une nouvelle commande
					</Button>
				</Link>

				
					
					{
						orders.length > 0 ?
						(
							<>
							<Space>
							<h2>Liste des commandes : </h2>
						<Select
							defaultValue={orders[0]._id.toString()}
							onChange={handleSelectChange}
							style={{ width: 150 }}
							options={
								orders.map((order, id) => {
									return {
										label: "Commande n°" + (order.number),
										value: order._id
									}
								})
							}
						/>
						</Space>
						<Order order={selectedOrder ?? orders[0]} />
						</>) : 
						<span> 
							
							Aucune commande na été trouvée
						</span>
						
					}
					
					
				

				{/* {
					selectedOrder ?
					<Order order={selectedOrder} position={orders.indexOf(selectedOrder)+1}/>
					:
					<span> Veuillez sélectionner une commande </span>
				} */}

				
			</Space>
		</div>
	);
};
