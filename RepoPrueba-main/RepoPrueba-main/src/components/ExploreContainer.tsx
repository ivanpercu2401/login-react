import './ExploreContainer.css';
import { IonInput, IonItem, IonList, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Logueate</IonCardTitle>
        </IonCardHeader>

        <IonCardContent><IonItem>
          <IonInput label="Username" placeholder="Username" maxlength={20}></IonInput>
        </IonItem>

          <IonItem>
            <IonInput label="Password" placeholder="Password" maxlength={20}></IonInput>
          </IonItem>

        </IonCardContent>

        <IonButton>Submit</IonButton>
      </IonCard>
      <IonList>
      
      </IonList>

    </div>
  );
};

export default ExploreContainer;
