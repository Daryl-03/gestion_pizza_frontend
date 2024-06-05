"use client"
import { Form } from "antd";
import {useState} from "react";

const NewOrder = () => {

	const [nom, setNom] = useState<string>("");
	const [prenom, setPrenom] = useState<string>("");

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
		>
			<Form.Item
				label="Nom"
				name="nom"
				rules={[{ required: true, message: "Veuillez saisir votre nom !" }]}
			>
				<input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
			</Form.Item>

			<Form.Item
				label="Prénom"
				name="prenom"
				rules={[{ required: true, message: "Veuillez saisir votre prénom !" }]}
			>
				<input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
			</Form.Item>
		</Form>
	);
};

export default NewOrder;