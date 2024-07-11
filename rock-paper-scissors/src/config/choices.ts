import paperImage from '../assets/choices/icon-paper.svg';
import rockImage from '../assets/choices/icon-rock.svg';
import scissorsImage from '../assets/choices/icon-scissors.svg';
import lizardImage from '../assets/choices/icon-lizard.svg';
import spockImage from '../assets/choices/icon-spock.svg';

export const ROCK = 'rock';
export const PAPER = 'paper';
export const SCISSORS = 'scissors';
export const LIZARD = 'lizard';
export const SPOCK = 'spock';

export const  DEFAULT_CHOICES = {
    rock: {
        name: ROCK,
        defeats: [SCISSORS],
        image: rockImage,
    },
    paper: {
        name: PAPER,
        defeats: [ROCK],
        image: paperImage,
    },
    scissors: {
        name: SCISSORS,
        defeats: [PAPER],
        image: scissorsImage,
    },
}

export const EXTRA_CHOICES = {
    lizard: {
        name: LIZARD,
        defeats: [PAPER, SPOCK],
        image: lizardImage,
    },
    spock: {
        name: SPOCK,
        defeats: [SCISSORS, ROCK],
        image: spockImage,
    },
    scissors: {
        name: SCISSORS,
        defeats: [PAPER, LIZARD],
        image: scissorsImage,
    },
    paper: {
        name: PAPER,
        defeats: [ROCK, SPOCK],
        image: paperImage,
    },
    rock: {
        name: ROCK,
        defeats: [SCISSORS, LIZARD],
        image: rockImage,
    },
}
