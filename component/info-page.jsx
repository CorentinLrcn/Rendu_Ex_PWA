import React from "react";

const InfoPage = () => {
    return (
        <div>
            <h1>Aide à l'installation de la PWA</h1>
            <h2>Qu'est-ce qu'une PWA ?</h2>
            <p>Une PWA est un site internet responsive (s'adaptant à l'écran de l'appareil) téléchargeable sur l'écran d'accueil de votre appareil afin :
                <ul>- d'être accessible rapidement</ul>
                <ul>- d'avoir la possibilité de l'utiliser hors ligne</ul>
                <ul>- ayant la capacité d'utiliser certaines fonctionnalités de l'appareil (ex pour les appareils mobiles: envoie de notifications, vibrations, etc.)</ul></p>
            <br />
            <h2>Sur quels appareils ?</h2>
            <p>Vous pouvez télécharger la PWA sur smartphones et tablettes iOS, Android, et sur PC</p>
            <br />
            <h2>Comment vérifier les fonctionnalités disponibles sur votre appareil ?</h2>
            <p>Vous pouvez les vérifier en cliquant <a href="https://pwafire.org/developer/tools/browser-test/" style={{ textDecorationLine: 'underline' }} >ici</a></p>
            <br />
            <h2>Comment installer la PWA ?</h2>
            <p>Pour savoir comment installer votre PWA, cliquez <a href="https://support.google.com/chrome/answer/9658361?hl=fr&co=GENIE.Platform%3DDesktop&oco=1" style={{ textDecorationLine: 'underline' }} >ici</a></p>
        </div>
    )
}

export default InfoPage