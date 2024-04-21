import paperImage from '../assets/choices/icon-paper.svg';
import rockImage from '../assets/choices/icon-rock.svg';
import scissorsImage from '../assets/choices/icon-scissors.svg';
import lizardImage from '../assets/choices/icon-lizard.svg';
import spockImage from '../assets/choices/icon-spock.svg';

export const  DEFAULT_CHOICES = {
    rock: {
        name: 'rock',
        defeats: ['scissors'],
        image: rockImage,
    },
    paper: {
        name: 'paper',
        defeats: ['rock'],
        image: paperImage,
    },
    scissors: {
        name: 'scissors',
        defeats: ['paper'],
        image: scissorsImage,
    },
}

export const EXTRA_CHOICES = {
    lizard: {
        name: 'lizard',
        defeats: ['paper', 'spock'],
        image: lizardImage,
    },
    spock: {
        name: 'spock',
        defeats: ['scissors', 'rock'],
        image: spockImage,
    },
    scissors: {
        name: 'scissors',
        defeats: ['paper', 'lizard'],
        image: scissorsImage,
    },
    paper: {
        name: 'paper',
        defeats: ['rock', 'spock'],
        image: paperImage,
    },
    rock: {
        name: 'rock',
        defeats: ['scissors', 'lizard'],
        image: rockImage,
    },
}