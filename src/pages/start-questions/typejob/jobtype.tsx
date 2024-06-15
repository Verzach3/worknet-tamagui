import React, { useState } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonButton,
    IonCard,
    IonCardContent,
} from '@ionic/react';
import './jobtype.css';

const jobtype: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tipo de Trabajo</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h2>¿Estás buscando un trabajo o estás buscando un empleador?</h2>
                <IonCard
                    className={selectedOption === 'trabajo' ? 'selected' : ''}
                    onClick={() => handleOptionClick('trabajo')}
                >
                    <IonCardContent>
                        <h3>Encontrar un trabajo</h3>
                        <p>Quiero encontrar un trabajo</p>
                    </IonCardContent>
                </IonCard>
                <IonCard
                    className={selectedOption === 'empleador' ? 'selected' : ''}
                    onClick={() => handleOptionClick('empleador')}
                >
                    <IonCardContent>
                        <h3>Encontrar un empleado</h3>
                        <p>Quiero encontrar un empleado</p>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonButton
                        expand="block"
                        size="large"
                        disabled={!selectedOption}
                    >
                        Siguiente
                    </IonButton>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default jobtype;


