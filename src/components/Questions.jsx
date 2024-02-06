import React, { useState } from 'react';

const questions = {
    "Diferenciální počet": {
        "1 Základní pojmy": {
            "1.1": {},
            "1.2": {},
            "1.3": {},
            "1.4": {},
            "1.5": {},
            "1.6": {},
            "1.7": {},
        },
        "2 Funkce jedné proměnné": {
            "2.1": {},
            "2.2": {},
            "2.3": {},
            "2.4": {},
            "2.5": {}
        },
        "3 Limita posloupnosti": {
            "3.1": {},
            "3.2": {},
            "3.3": {},
            "3.4": {},
            "3.5": {}
        },
        "4 Spojitost a limita funkce": {
            "4.1": {},
            "4.2": {},
            "4.3": {},
            "4.4": {},
            "4.5": {},
            "4.6": {}
        },
        "5 Derivace": {
            "5.1": {},
            "5.2": {},
            "5.3": {},
            "5.4": {},
            "5.5": {},
            "5.6": {},
        }
    },
    "Integrální počet": {
        "1 Obecné věty o spojitosti a derivaci": {
            "1.1": {},
            "1.2": {},
            "1.3": {},
            "1.4": {},
            "1.5": {},
            "1.6": {},
            "1.7": {}
        },
        "2 Určitý nebo-li Riemannův integrál": {
            "2.1": {},
            "2.2": {},
            "2.3": {},
            "2.4": {},
        },
        "3 Neurčitý integrál nebo-li primitivní funkce": {
            "3.1": {},
            "3.2": {},
            "3.3": {},
        },
        "4 Integrace vybraných funkcí": {
            "4.1": {},
            "4.2": {},
            "4.3": {},
            "4.4": {},
            "4.5": {},
            "4.6": {},
        },
        "5 Dodatky a aplikace": {
            "5.1": {},
            "5.2": {},
            "5.3": {},
            "5.4": {},
            "5.5": {},
        }
    }
};

export const Questions = () => {
    const [gnQuests, setGnQuests] = useState([]);

    // vybere 2 otazky z diferencialniho poctu a 2 z integralniho poctu
    const generate = () => {
        const newSelectedQuestions = [];
        for (const category of ['Diferenciální počet', 'Integrální počet']) {
            const subcategories = Object.keys(questions[category]);
            for (let i = 0; i < 2; i++) {
                const randomSubcategory = subcategories[Math.floor(Math.random() * subcategories.length)];
                const questionsInSubcategory = Object.keys(questions[category][randomSubcategory]);
                const randomQuestion = questionsInSubcategory[Math.floor(Math.random() * questionsInSubcategory.length)];
                newSelectedQuestions.push(`${category} - ${randomSubcategory} - ${randomQuestion}`);
            }
        }
        setGnQuests(newSelectedQuestions);
    }

    return (
        <div>
            <h1>Generátor otázek - MA1-M</h1>
            <button onClick={generate}>Generovat</button>
            <div>
                {gnQuests.map((question, index) => (
                    <p key={index}>{question}</p>
                ))}
            </div>
            <div className="questions">
                {Object.keys(questions).map((question, index) => (
                    <div key={index}>
                        <h2>{question}</h2>
                        {Object.keys(questions[question]).map((subquestion, index) => (
                            <div key={index}>
                                <h3>{subquestion}</h3>
                                {
                                    /*
                                    Object.keys(questions[question][subquestion]).map((subsubquestion, index) => (
                                        <div key={index}>
                                            <h4>{subsubquestion}</h4>
                                        </div>
                                    ))
                                    */
                                }
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Questions;