import React, { useEffect } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { IonToast, IonButton, IonIcon } from '@ionic/react';
import { downloadOutline, closeOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

const ReloadPrompt: React.FC = () => {
  const { t } = useTranslation();
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const close = () => {
    setNeedRefresh(false);
  };

  useEffect(() => {
    if (needRefresh) {
      console.log('New content available, show reload prompt');
    }
  }, [needRefresh]);

  return (
    <IonToast
      isOpen={needRefresh}
      onDidDismiss={close}
      message={t('New version available! Update now?')}
      position="bottom"
      buttons={[
        {
          text: t('Update'),
          role: 'info',
          handler: () => {
            updateServiceWorker(true);
          },
        },
        {
          text: t('Close'),
          role: 'cancel',
          handler: () => {
            close();
          },
        },
      ]}
      duration={0} // Keep it open until user interacts
      cssClass="reload-prompt-toast"
    />
  );
};

export default ReloadPrompt;
