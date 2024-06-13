import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonAvatar,
	IonItem,
	IonInput,
} from "@ionic/react";
import { useState } from "react";

function UserProfile() {
	const [isTouched, setIsTouched] = useState(false);
	const [isValid, setIsValid] = useState<boolean>();
  
	const validateEmail = (email: string) => {
	  return email.match(
		/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
	  );
	};
  
	const validate = (ev: Event) => {
	  const value = (ev.target as HTMLInputElement).value;
  
	  setIsValid(undefined);
  
	  if (value === '') return;
  
	  validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
	};
  
	const markTouched = () => {
	  setIsTouched(true);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="#" />
					</IonButtons>
					<IonTitle>Perfil</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className="w-full flex justify-center mt-10">
					<div>
						<IonAvatar style={{ width: '120px', height: '120px'}}>
							<img
								src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
								alt="avatar"
							/>
						</IonAvatar>
					</div>
				</div>
				<div className="mt-10 ml-10 mr-10 rounded" >
					<IonItem className="rounded-2xl">
        				<IonInput label="Nombre" labelPlacement="floating" placeholder="Ingrese su nombre" />
      				</IonItem>
					  <IonItem className="mt-10 rounded-2xl">
        				<IonInput 
							className={`${isValid && 'ion-valid'} ${isValid === false && 'ion-invalid'} ${isTouched && 'ion-touched'}`} 
							type="email" 
							onIonInput={(event) => validate(event)} 
							onIonBlur={() => markTouched()} 
							errorText="Correo invalido" 
							label="Correo" 
							labelPlacement="floating" 
							placeholder="Ingrese su correo electrónico" />
      				</IonItem>
					  <IonItem className="mt-10 rounded-2xl">
        				<IonInput 
							label="Nick de usuario" 
							labelPlacement="floating" 
							placeholder="Ingrese un nombre de usuario" />
      				</IonItem>
				</div>
			</IonContent>
		</IonPage>
	);
}

export default UserProfile;
