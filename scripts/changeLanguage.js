const languages = {
    "rus": {
        firstButtonTitle: 'Прототип',
        secondButtonTitle: 'Документация',
        thirdButtonTitle: 'Контакты',
        title: 'Разнообразный и богатый опыт рамки и место обучения кадров',
        subtitle: 'Таким образом сложившаяся структура организации играет важную роль в формировании системы обучения кадров',
        goToPrototypeBtnTitle: 'Перейти к прототипу',
        description: 'Разнообразный и богатый опыт рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение систем массового участия. Не следует, однако забывать, что рамки и место обучения кадров представляет собой интересный эксперимент проверки дальнейших направлений развития. Таким образом сложившаяся структура организации играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        firstProTitle: 'Супер-плюс номер 1',
        firstProSubtitle: 'Таким образом новая модель организационной деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.',
        secondProTitle: 'Супер-плюс номер 2',
        secondProSubtitle: 'С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.',
        thirdProTitle: 'Супер-плюс номер 3',
        thirdProSubtitle: 'Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание направлений прогрессивного развития. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании модели развития.',
        feedbackTitle: 'Свяжитесь с нами',
        feedbackSubtitle: 'Вы можете заполнить форму ниже или написать нам в социальных сетях:',
        nameInputPlaceholder: 'Имя',
        emailInputPlaceholder: 'Эл. почта',
        messageInputPlaceholder: 'Введите сообщение здесь...',
        sendBtnTitle: 'Отправить',
    },
    "eng": {
        firstButtonTitle: 'Prototype',
        secondButtonTitle: 'Documentation',
        thirdButtonTitle: 'Contacts',
        title: ' Adipiscing quam vel hac sodales inceptos suspendisse tellus',
        subtitle: 'Lorem ipsum dolor sit amet quisque risus scelerisque pulvinar curabitur a accumsan nam nisl ac turpis primis sem vestibulum augue fringilla velit',
        goToPrototypeBtnTitle: 'Go to prototype',
        description: 'Convallis curae justo nisi vitae nullam cras dictum elementum ac torquent conubia est vel amet imperdiet magna adipiscing netus et pulvinar non tristique feugiat lacus augue elementum suspendisse aliquam sodales semper quis vel sapien volutpat dictumst iaculis integer aptent nullam adipiscing tempor ultrices donec eleifend magna rutrum eu nec laoreet.',
        firstProTitle: 'Pro title number 1',
        firstProSubtitle: 'Posuere arcu odio euismod nisi tellus tempor euismod lobortis praesent porta tortor dictum arcu sollicitudin iaculis pharetra platea dictum ornare dictum ante nostra elit enim ut diam porttitor fringilla vel molestie gravida amet ornare est ad cras metus etiam dictumst urna lorem consequat venenatis sapien morbi fusce quam urna conubia.',
        secondProTitle: 'Pro title number 2',
        secondProSubtitle: 'Orci rutrum habitasse netus etiam blandit nec ad platea volutpat luctus tempus turpis elementum habitant non sollicitudin feugiat volutpat ullamcorper proin adipiscing habitant fusce varius dictum maecenas viverra sapien risus vivamus vehicula eleifend tempus auctor sit nec consequat tortor.',
        thirdProTitle: 'Pro title number 3',
        thirdProSubtitle: 'Libero nunc malesuada aliquet aenean condimentum dapibus taciti vehicula class aliquam platea purus blandit sem cubilia curabitur ullamcorper urna varius pellentesque praesent blandit gravida viverra iaculis dictumst sem dolor in quisque quam mauris purus sollicitudin mattis mollis per accumsan nunc aliquam.',
        feedbackTitle: 'Contact us',
        feedbackSubtitle: 'You can fill out the form below or write to us on social networks:',
        nameInputPlaceholder: 'Name',
        emailInputPlaceholder: 'E-mail',
        messageInputPlaceholder: 'Input your message here...',
        sendBtnTitle: 'Send',
    }
}

window.addEventListener("load", async function (event) {
    console.log(localStorage.getItem('language'));
    if (localStorage.getItem('language') === null)
        setLanguage('eng');
    else
        setLanguage(localStorage.getItem('language'))
    document.body.style.visibility = "visible";
})

const $ruLanguageBtn = document.getElementById('ru-language-button');
const $enLanguageBtn = document.getElementById('en-language-button');

$ruLanguageBtn.onclick = () => {
    setLanguage('rus');
}

$enLanguageBtn.onclick = () => {
    setLanguage('eng');
}

const setLanguage = (language) => {
    localStorage.setItem('language', language);
    if (language === 'rus') {
        $ruLanguageBtn.style.backgroundColor = 'rgba(255,255,255,0.2)';
        $enLanguageBtn.style.backgroundColor = 'transparent';
    }
    else {
        $enLanguageBtn.style.backgroundColor = 'rgba(255,255,255,0.2)';
        $ruLanguageBtn.style.backgroundColor = 'transparent';
    }
    document.getElementById('first-button-title').innerText = languages[language].firstButtonTitle;
    document.getElementById('second-button').innerText = languages[language].secondButtonTitle;
    document.getElementById('third-button').innerText = languages[language].thirdButtonTitle;
    document.getElementById('title').innerText = languages[language].title;
    document.getElementById('sub-title').innerText = languages[language].subtitle;
    document.getElementById('go-to-prototype-button').innerText = languages[language].goToPrototypeBtnTitle;
    document.getElementById('description').innerText = languages[language].description;
    document.getElementById('pro-1-title').innerText = languages[language].firstProTitle;
    document.getElementById('pro-1-subtitle').innerText = languages[language].firstProSubtitle;
    document.getElementById('pro-2-title').innerText = languages[language].secondProTitle;
    document.getElementById('pro-2-subtitle').innerText = languages[language].secondProSubtitle;
    document.getElementById('pro-3-title').innerText = languages[language].thirdProTitle;
    document.getElementById('pro-3-subtitle').innerText = languages[language].thirdProSubtitle;
    document.getElementById('feedback-title').innerText = languages[language].feedbackTitle;
    document.getElementById('feedback-subtitle').innerText = languages[language].feedbackSubtitle;
    document.getElementById('name-input').placeholder = languages[language].nameInputPlaceholder;
    document.getElementById('email-input').placeholder = languages[language].emailInputPlaceholder;
    document.getElementById('message-input').placeholder = languages[language].messageInputPlaceholder;
    document.getElementById('send-btn').innerText = languages[language].sendBtnTitle;
}
