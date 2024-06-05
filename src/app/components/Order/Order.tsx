import {useEffect, useState} from "react";
import { Order as OrderType } from "@/app/types/Order";
import { Space, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Item } from "../Item/Item";
import { PlusOutlined } from "@ant-design/icons";
import { ItemOrder as ItemType } from "@/app/types/ItemOrder";
import axios from "axios";

type OrderProps = {
	order: OrderType;
};

export const Order = ({order}: OrderProps) => {
	
	

	return (
		<>
			<Space direction="vertical">
				<Space>
					<h2> {"Commande n°"+order.number} </h2>

					<Button icon={<DeleteOutlined />} danger type="primary">
						Supprimer la commande
					</Button>
				</Space>
				<Space>
					<p>Réalisée le { new Date(order.date).toLocaleDateString() } </p>
				</Space>
				<Space>
					{/* texte gras */}
					<p style={{ fontWeight: "bold" }}>
						Statut : done
					</p>
				</Space>
				
				
				{	
					(order.items.map((item, id) => (
						<Item key={item._id} item={item} /> 
					)))
				}

				<p>
					<span style={{ fontWeight: "bold" }}>
						{" "}
						Prix total : {order.items.reduce((total, item) => total + item.price, 0)} € 
					</span>
				</p>

				<Button type="primary" icon={<PlusOutlined />}>
					Ajouter un article
				</Button>
			</Space>
		</>
	);
};
