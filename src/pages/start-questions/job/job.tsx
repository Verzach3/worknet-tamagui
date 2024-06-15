import React, { useState } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonSearchbar,
    IonButton,
    IonCheckbox,
    IonLabel,
    IonItem,
    IonList,
} from '@ionic/react';
import './job.css';

const job: React.FC = () => {
    const [search, setSearch] = useState('');
    const [selectedJobs, setSelectedJobs] = useState<string[]>([]);

    const occupations = [
        'Desarrollador de Software',
        'Ingeniero de Sistemas',
        'Arquitecto de Software',
        'Ingeniero de DevOps',
        'Administrador de Bases de Datos',
        'Analista de Sistemas',
        'Desarrollador Full Stack',
        'Ingeniero de Seguridad Informática',
        'Ingeniero de Redes',
        'Especialista en Big Data',
        'Ingeniero de Machine Learning',
        'Desarrollador de Aplicaciones Móviles',
        'Ingeniero de Hardware',
        'Ingeniero de Cloud Computing',
        'Científico de Datos'
    ];

    const handleCheckboxChange = (job: string) => {
        setSelectedJobs(prevSelectedJobs => {
            if (prevSelectedJobs.includes(job)) {
                return prevSelectedJobs.filter(j => j !== job);
            } else if (prevSelectedJobs.length < 5) {
                return [...prevSelectedJobs, job];
            } else {
                alert('Solo puedes seleccionar hasta 5 trabajos');
                return prevSelectedJobs;
            }
        });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>¿Cuál es tu oficio?</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonSearchbar
                    placeholder="Buscar oficio"
                    value={search}
                    onIonInput={(e) => setSearch(e.detail.value!)}
                />
                <IonList>
                    {occupations
                        .filter(job => job.toLowerCase().includes(search.toLowerCase()))
                        .map((job, index) => (
                            <IonItem key={index} className={selectedJobs.includes(job) ? 'selected' : ''}>
                                <IonCheckbox
                                    slot="start"
                                    checked={selectedJobs.includes(job)}
                                    onIonChange={() => handleCheckboxChange(job)}
                                />
                                <IonLabel>{job}</IonLabel>
                            </IonItem>
                        ))}
                </IonList>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonButton expand="block" size="large">Siguiente</IonButton>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default job;
