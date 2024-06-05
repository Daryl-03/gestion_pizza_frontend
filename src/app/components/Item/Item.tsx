import React from "react";
import { Space, Button, Input } from "antd";
import { MinusOutlined, CloseOutlined } from "@ant-design/icons";
import { ItemOrder as ItemOrderType } from "@/app/types/ItemOrder";

type ItemProps = {
	item: ItemOrderType;
};

export const Item = ({item}: ItemProps) => {

	console.log(item);
	return (
		<>
			<div>
			<Space>
				<p>{item.name}</p>
				<Button type="default" disabled={item.quantity<=0} >
					-
				</Button>

				<Input defaultValue={item.quantity} style={{width:40}}>

				</Input>

				<Button type="primary" >
					+
				</Button>

				<p>{item.price} €</p>

				<p style={{fontWeight: "bold"}} >
					{item.quantity*item.price} €
				</p>

				<Button type="primary" danger icon={<CloseOutlined/>}>
					
				</Button>
			</Space>

				<p >
					Crème fraîche, mozzarella, bacon, oignons, champignons, olives
				</p>
			
				</div>
		</>
	);
}