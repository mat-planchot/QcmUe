# QcmUe (en développement)
Application React Native

C'est une application pour s'exercer sur des QCM de médecine.
UE signifie unité d'enseignement. Pour l'instant il n'y a que des QCM d'UE2.

Pour fonctionner l'application nécessite internet. Un QCM est récupéré alétoirement grâce un objet json à partir de http://mat.planchot.free.fr/?a=qcm

L'application peut être testé à l'aide d'expo à l'adresse suivante : https://expo.io/@konki/QcmUe

Pour améliorer l'affichage des label des checkbox, modifiez node_modules/react-native-checkbox-form/index.js
Enlevez justifyContent: 'center', alignItems: 'center' ligne 82.

Ajout futur :
- barre de navigation pour changer de matière
- minuteur
- faire un lot de question (ex : 40 qcm = 40 minutes)
- choix d'une date de qcm qui correspond à une colle (interrogation périodique)
