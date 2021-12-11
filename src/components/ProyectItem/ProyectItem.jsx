import {ItemContainer, ItemCard, CardHeader, CardBody, CardFooter,CardTitle, CardDescription, CardTecnology } from './StyleProyectItem'
import { FiFolder } from 'react-icons/fi'
import { useState } from 'react'
import { motion } from "framer-motion";
const ProyectItem = ({project}) => {
    const [changeColor, setChangeColor ] = useState(false);
    const {nameProject, description, preview, tech} = project
    return (    
        <ItemContainer>
            <ItemCard href={preview} target="_blank" onMouseEnter={() => setChangeColor(true)} onMouseLeave ={() => setChangeColor(false)} 
                as={motion.a}
                initial={{ scale: .9 }}
                animate={{ scale: 1 }}
                transition={{ duration: .5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: .9 }}
            >
                <CardHeader>
                    <FiFolder className="CardHeader__logo"/>
                </CardHeader>
                <CardBody>
                 {changeColor ? <CardTitle style={{color: '#b72ffc'}}>{nameProject}</CardTitle>  :  <CardTitle>{nameProject}</CardTitle>}
                 
                 <CardDescription>{description}</CardDescription>
                </CardBody>
                <CardFooter>
                    <CardTecnology>{tech[0]}</CardTecnology>
                    <CardTecnology>{tech[1]}</CardTecnology>
                    <CardTecnology>{tech[2]}</CardTecnology>
                    <CardTecnology>{tech[3]}</CardTecnology>
                    <CardTecnology>{tech[4]}</CardTecnology>
                </CardFooter>
            </ItemCard>
        </ItemContainer>
    )
}

export default ProyectItem
