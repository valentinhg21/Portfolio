import { useState } from 'react';
import {ProyectsContainer,ProyectsTitle, ProyectosContent,
    ProyectsList, ProyectButton
} from './StyleProyects';

import ProyectItem from '../ProyectItem/ProyectItem'
import data from '../../db.json';
import { TiPlus } from 'react-icons/ti'

const Proyects = () => {
    const [ visible, setVisible] = useState(3);

    const showMoreProjects = () => {
        setVisible((preValue) => preValue + 3);
    }

    return (
        <ProyectsContainer id="proyectos">
            <ProyectsTitle>
                Proyec<span className="Highlight">tos</span>
            </ProyectsTitle>
            <ProyectosContent>
                <ProyectsList>
                    {data.slice(0, visible).map((project) => (
                        <ProyectItem project={project} key={project.id}/>
                    ))}
                </ProyectsList>
            </ProyectosContent>
            {visible < data.length &&
            <ProyectButton type="button" onClick={showMoreProjects}>
                     Cargar más
                     <TiPlus className="IconShowMore"/>
            </ProyectButton>}

        </ProyectsContainer>
    )
}

export default Proyects
