# QcmUe (migration gitlab)
Application React Native

C'est une application pour s'exercer sur des QCM de médecine.
UE signifie unité d'enseignement.

Pour fonctionner l'application nécessite internet. Un QCM est récupéré alétoirement grâce un objet json à partir de http://mat.planchot.free.fr/?api_key=UN_TOKEN&a=qcm&ue=ID_MATIERE
Les qcm ne peuvent être consulté que si l'on dispose du token.

Pour améliorer l'affichage des label des checkbox, modifiez node_modules/react-native-checkbox-form/index.js
Enlevez justifyContent: 'center', alignItems: 'center' ligne 82.

