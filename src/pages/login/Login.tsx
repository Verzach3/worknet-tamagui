import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    IonItem,
    IonLabel,
    IonIcon,
    IonText
} from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { useState } from "react";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <IonPage>
            <IonContent className="ion-padding">
				<IonTitle id = "title0">Bienvenido a</IonTitle>
				<IonTitle id = "title02">WorkNet</IonTitle>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Contraseña</IonLabel>
                    <IonInput type={showPassword ? "text" : "password"} value={password} onIonChange={(e) => setPassword(e.detail.value!)}></IonInput>
                    <IonButton slot="end" fill="clear" onClick={() => setShowPassword(!showPassword)}>
                        <IonIcon icon={showPassword ? eyeOutline : eyeOffOutline}></IonIcon>
                    </IonButton>
                </IonItem>
                <div className="ion-text-center ion-margin-top">
                    <IonButton expand="block" color="primary">Ingresar</IonButton>
                </div>
                <div className="ion-text-center ion-margin-top">
                    <IonText>
                        <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
                    </IonText>
                </div>
                <div className="ion-text-center ion-margin-top">
                    <IonText>
                        ¿No tienes una cuenta? <a href="/register">Regístrate</a>
                    </IonText>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Login;
