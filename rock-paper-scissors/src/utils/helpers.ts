export const randomChoice = (choices: string[]): string => {
  const randomChoiceIndex = Math.floor(Math.random() * (choices.length + 1));
  return choices[randomChoiceIndex];
}

