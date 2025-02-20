'use strict';

// DOM Elements
const text_1 = document.querySelector('.text1');
const text_2 = document.querySelector('.text2');
const Search_Btn = document.querySelector('.Search_Btn');
const Input_label = document.querySelector('.Input_label');
const forms = document.querySelector('.formS');
const Cancel_CLick_btn = document.querySelector('.Cancel_CLick');
const view_recip = document.querySelector('.view_recip');

// Grouping related elements for easier management
const meinIdeas = [
    document.querySelector('.mein-idea_1'),
    document.querySelector('.mein-idea_2'),
    document.querySelector('.mein-idea_3'),
    document.querySelector('.mein-idea_4'),
    document.querySelector('.mein-idea_5'),
    document.querySelector('.mein-idea_6'),
];

const steps = [
    document.querySelector('.STEP_1'),
    document.querySelector('.STEP_2'),
    document.querySelector('.STEP_3'),
    document.querySelector('.STEP_4'),
    document.querySelector('.STEP_5'),
    document.querySelector('.STEP_6'),
];

// Utility function to hide all elements in a list
const hideAll = (elements) => elements.forEach(el => el.classList.add('hidden'));

// Utility function to show one specific element and hide the rest
const showOnly = (elements, index) => {
    hideAll(elements);
    if (index !== -1) elements[index].classList.remove('hidden');
};

// Event Handlers
Search_Btn.addEventListener('click', function (e) {
    e.preventDefault();
    const inputValue = Input_label.value.trim();

    if (!inputValue) {
        text_1.classList.remove('hidden');
        text_2.classList.add('hidden');
        return;
    }

    const index = meinIdeas.findIndex((_, i) => `mein_idea_${i + 1}` === inputValue);

    if (index !== -1) {
        showOnly(meinIdeas, index);
        text_1.classList.add('hidden');
        text_2.classList.add('hidden');
    } else {
        text_2.classList.remove('hidden');
        text_1.classList.add('hidden');
        hideAll(meinIdeas);
    }
});

view_recip.addEventListener('click', function () {
    const inputValue = Input_label.value.trim();
    const index = meinIdeas.findIndex((_, i) => `mein_idea_${i + 1}` === inputValue);

    if (index !== -1) {
        meinIdeas[index].classList.toggle('hidden');
        steps[index].classList.remove('hidden');
        forms.classList.add('hidden');
    }
});

Cancel_CLick_btn.addEventListener('click', function () {
    showOnly(meinIdeas, 0); // Show the first "mein_idea" by default
    steps[0].classList.add('hidden');
    forms.classList.remove('hidden');
});
